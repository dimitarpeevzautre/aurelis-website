// Shared submit handler for the enquiry forms (pricing.html, fleets.html).
//
// Sends the form to FormSubmit's AJAX endpoint and shows the inline
// confirmation. Without JS the form still POSTs normally to its action URL.
//
// Spam protection:
//  - The hidden `_honey` field is included in the payload, so FormSubmit
//    discards submissions where it is filled.
//  - If `_honey` is filled, or the form is submitted faster than a human could
//    fill it in, nothing is sent and the bot just sees the confirmation.
//
// Markup contract:
//   <form data-enquiry-form
//         data-confirmation="<id of the confirmation block>"
//         data-confirm-email="<id of the span that echoes the email>">
(function () {
  'use strict';

  var MIN_FILL_MS = 3000;
  var loadedAt = Date.now();

  function ajaxUrl(action) {
    // https://formsubmit.co/<id> -> https://formsubmit.co/ajax/<id>
    return action.replace(/^(https:\/\/formsubmit\.co\/)(?!ajax\/)/, '$1ajax/');
  }

  function showConfirmation(form, email) {
    var emailEl = document.getElementById(form.getAttribute('data-confirm-email'));
    if (email && emailEl) emailEl.textContent = email;
    form.hidden = true;
    var confirmation = document.getElementById(form.getAttribute('data-confirmation'));
    if (confirmation) confirmation.hidden = false;
  }

  function wire(form) {
    var btn = form.querySelector('.btn-submit');
    var btnLabel = btn ? btn.textContent : '';

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var data = {};
      new FormData(form).forEach(function (value, key) {
        data[key] = typeof value === 'string' ? value.trim() : value;
      });

      var looksLikeBot = !!data._honey || Date.now() - loadedAt < MIN_FILL_MS;
      if (looksLikeBot) {
        showConfirmation(form, data.email);
        return;
      }

      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending…';
      }

      fetch(ajaxUrl(form.action), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      }).then(function (r) {
        if (!r.ok) throw new Error('Request failed');
        return r.json();
      }).then(function () {
        showConfirmation(form, data.email);
      }).catch(function () {
        if (btn) {
          btn.disabled = false;
          btn.textContent = btnLabel;
        }
        var note = form.querySelector('.fine-print');
        if (note) note.textContent = 'Something went wrong — please try again in a moment.';
      });
    });
  }

  var forms = document.querySelectorAll('form[data-enquiry-form]');
  for (var i = 0; i < forms.length; i++) wire(forms[i]);
})();
