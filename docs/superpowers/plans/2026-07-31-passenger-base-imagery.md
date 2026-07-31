# Re-base Site Imagery/Copy on Kia PV5 Passenger — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the Aurelis One static site so its imagery and copy present the camper as built on the **Kia PV5 Passenger** instead of the Cargo.

**Architecture:** Pure static HTML edits across three files (`index.html`, `camper.html`, `about.html`). Images are hot-linked from Wikimedia Commons via `Special:FilePath` URLs; each has an adjacent `.image-credit` link. No CSS, no JS, no build step, no local assets. "Tests" here are behavioural checks — the content isn't unit-testable, so each task verifies by (a) grepping for leftover "Cargo", (b) confirming every new image URL resolves to HTTP 200, and (c) a final browser render.

**Tech Stack:** Static HTML5 + CSS (`css/style.css`, untouched). Verification via `curl` and `grep` (Git Bash / Bash tool) and the browser.

## Global Constraints

- **Only** these files change: `index.html`, `camper.html`, `about.html`. No CSS/layout/JS changes; no new local image files.
- **Leave untouched:** the `picsum.photos` camp-scene placeholder (`index.html:160`) and the three `i.pravatar.cc` team portraits (`about.html`). They are not Kia imagery.
- **Keep** all PV5 **Concept** camper-interior images (kitchen, beds, pop-top, living area, roof bed, rail-floor) and the `오픈베드` pop-top image — the production Passenger has no equivalent. Only swap base-vehicle (exterior/cab/dashboard) and the two genuine **Cargo** shots.
- **Image `src` URL format (verbatim):** `https://commons.wikimedia.org/wiki/Special:FilePath/<name>?width=1600` where `<name>` encodes spaces as `%20`, the en-dash `–` as `%E2%80%93`, and keeps literal `(` `)`.
- **Credit link format (verbatim):** `<a class="image-credit" href="https://commons.wikimedia.org/wiki/File:<name_with_underscores>" target="_blank" rel="noopener"><LICENSE> · Wikimedia Commons</a>`.
- **Exact per-file licenses (do not alter):** Soft Mint (1)(2)(3)(4) → `CC BY-SA 4.0`; RuinDig 3201/3202 → `CC BY 4.0`; Seoul Passenger (01) → `CC BY-SA 4.0`; JMS 2025 → `CC0`.
- After all edits, `grep -i cargo` across the three HTML files must return **zero** matches.
- Author-name attribution is intentionally omitted to match the site's existing credit convention (license + link to source file page).

---

### Task 1: index.html — hero + cabin images, story copy

**Files:**
- Modify: `index.html` (lines 27, 51, 57, 108, 109)

**Interfaces:**
- Consumes: verified file/license table (Global Constraints).
- Produces: nothing later tasks depend on (each page task is independent).

- [ ] **Step 1: Swap the hero image (line 27).**

Replace:
```html
    <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20SW1%20%E2%80%93%20Seoul%20Mobility%20Show%202025%20(01).jpg?width=1600" alt="The Aurelis One camper, built on the Kia PV5">
```
with:
```html
    <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20Passenger%20SW1%20Soft%20Mint%20(4).jpg?width=1600" alt="The Aurelis One, built on the Kia PV5 Passenger">
```

- [ ] **Step 2: Swap the hero credit (line 51).**

Replace:
```html
    <a class="image-credit" href="https://commons.wikimedia.org/wiki/File:Kia_PV5_SW1_%E2%80%93_Seoul_Mobility_Show_2025_(01).jpg" target="_blank" rel="noopener">CC BY-SA 4.0 · Wikimedia Commons</a>
```
with:
```html
    <a class="image-credit" href="https://commons.wikimedia.org/wiki/File:Kia_PV5_Passenger_SW1_Soft_Mint_(4).jpg" target="_blank" rel="noopener">CC BY-SA 4.0 · Wikimedia Commons</a>
```

- [ ] **Step 3: Rewrite the story paragraph (line 57).**

Replace:
```html
      <p>Every Aurelis One starts life as a Kia PV5 Cargo — a dedicated electric platform with a flat floor, 71.2 kWh of battery, and no engine to work around. We use that freedom to build a camper the combustion era never could.</p>
```
with:
```html
      <p>Every Aurelis One starts life as a Kia PV5 Passenger — a dedicated electric platform that already ships with what a camper needs: factory side glazing, homologated seats, a flat skateboard floor, 71.2 kWh of battery, and no engine to work around. We start from a van built for people and turn it into a camper the combustion era never could.</p>
```

- [ ] **Step 4: Swap the "The Cabin" image (line 108).**

Replace:
```html
        <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20(SW1)%20Cargo%20%E2%80%93Seoul%20Mobility%20Show%202025%20(02).jpg?width=1600" alt="Interior with bench-bed folded flat and warm textiles" loading="lazy">
```
with:
```html
        <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20Passenger%20SW1%20Soft%20Mint%20(3).jpg?width=1600" alt="Passenger cabin with the sliding door open, showing the flat floor and seats" loading="lazy">
```

- [ ] **Step 5: Swap the "The Cabin" credit (line 109).**

Replace:
```html
        <a class="image-credit" href="https://commons.wikimedia.org/wiki/File:Kia_PV5_(SW1)_Cargo_%E2%80%93Seoul_Mobility_Show_2025_(02).jpg" target="_blank" rel="noopener">CC BY-SA 4.0 · Wikimedia Commons</a>
```
with:
```html
        <a class="image-credit" href="https://commons.wikimedia.org/wiki/File:Kia_PV5_Passenger_SW1_Soft_Mint_(3).jpg" target="_blank" rel="noopener">CC BY-SA 4.0 · Wikimedia Commons</a>
```

- [ ] **Step 6: Verify no "Cargo" remains in index.html.**

Run: `grep -ic cargo index.html`
Expected output: `0`

- [ ] **Step 7: Verify both new image URLs resolve.**

Run:
```bash
for u in \
  "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20Passenger%20SW1%20Soft%20Mint%20(4).jpg?width=1600" \
  "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20Passenger%20SW1%20Soft%20Mint%20(3).jpg?width=1600"; do
  echo "$(curl -s -o /dev/null -w '%{http_code}' -L "$u") $u"
done
```
Expected: each line starts with `200`.

- [ ] **Step 8: Commit.**

```bash
git add index.html
git commit -m "Re-base index hero + cabin imagery and story copy on PV5 Passenger"
```

---

### Task 2: camper.html — five images, alts, and the specs note

**Files:**
- Modify: `camper.html` (lines 34, 35, 45, 46, 84, 85, 202, 211, 212, 215, 216)

**Interfaces:**
- Consumes: verified file/license table (Global Constraints).
- Produces: nothing later tasks depend on.

- [ ] **Step 1: Swap the profile hero image (line 34).**

Replace:
```html
      <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20concept.jpg?width=1600" alt="Side profile of the Aurelis One with pop-top raised" loading="lazy">
```
with:
```html
      <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20Passenger%20SW1%20Soft%20Mint%20(1).jpg?width=1600" alt="The Kia PV5 Passenger — the base for every Aurelis One" loading="lazy">
```

- [ ] **Step 2: Swap the profile hero credit (line 35).**

Replace:
```html
      <a class="image-credit" href="https://commons.wikimedia.org/wiki/File:Kia_PV5_concept.jpg" target="_blank" rel="noopener">CC BY-SA 4.0 · Wikimedia Commons</a>
```
with:
```html
      <a class="image-credit" href="https://commons.wikimedia.org/wiki/File:Kia_PV5_Passenger_SW1_Soft_Mint_(1).jpg" target="_blank" rel="noopener">CC BY-SA 4.0 · Wikimedia Commons</a>
```

- [ ] **Step 3: Swap the Z1 cab image (line 45).**

Replace:
```html
          <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20Concept%20(2).jpg?width=1600" alt="Cab with swivel seats turned to face the rear" loading="lazy">
```
with:
```html
          <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Japan-Mobility-Show-2025-RuinDig%203201.jpg?width=1600" alt="The Kia PV5 Passenger cab and digital cockpit" loading="lazy">
```

- [ ] **Step 4: Swap the Z1 cab credit (line 46) — note license is CC BY 4.0.**

Replace:
```html
          <a class="image-credit" href="https://commons.wikimedia.org/wiki/File:Kia_PV5_Concept_(2).jpg" target="_blank" rel="noopener">CC BY-SA 4.0 · Wikimedia Commons</a>
```
with:
```html
          <a class="image-credit" href="https://commons.wikimedia.org/wiki/File:Japan-Mobility-Show-2025-RuinDig_3201.jpg" target="_blank" rel="noopener">CC BY 4.0 · Wikimedia Commons</a>
```

- [ ] **Step 5: Swap the Z4 boot image (line 84).**

Replace:
```html
          <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20(SW1)%20Cargo%20%E2%80%93Seoul%20Mobility%20Show%202025%20(01).jpg?width=1600" alt="Boot with modular storage and bikes loaded" loading="lazy">
```
with:
```html
          <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20(SW1)%20Passenger%20%E2%80%93%20Seoul%20Mobility%20Show%202025%20(01).jpg?width=1600" alt="Rear of the Kia PV5 Passenger with the tailgate" loading="lazy">
```

- [ ] **Step 6: Swap the Z4 boot credit (line 85).**

Replace:
```html
          <a class="image-credit" href="https://commons.wikimedia.org/wiki/File:Kia_PV5_(SW1)_Cargo_%E2%80%93Seoul_Mobility_Show_2025_(01).jpg" target="_blank" rel="noopener">CC BY-SA 4.0 · Wikimedia Commons</a>
```
with:
```html
          <a class="image-credit" href="https://commons.wikimedia.org/wiki/File:Kia_PV5_(SW1)_Passenger_%E2%80%93_Seoul_Mobility_Show_2025_(01).jpg" target="_blank" rel="noopener">CC BY-SA 4.0 · Wikimedia Commons</a>
```

- [ ] **Step 7: Update the specs note (line 202).**

Replace:
```html
    <p class="specs-note">Base-vehicle figures per Kia PV5 Cargo homologation (WLTP). Camper conversion figures are Aurelis measurements on the Vista trim; final homologated values may vary slightly.</p>
```
with:
```html
    <p class="specs-note">Base-vehicle figures per Kia PV5 Passenger homologation (WLTP). Camper conversion figures are Aurelis measurements on the Vista trim; final homologated values may vary slightly.</p>
```

- [ ] **Step 8: Swap the control-panel detail image (line 211).**

Replace:
```html
      <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20Concept%20(3).jpg?width=1600" alt="Detail of the control panel" loading="lazy">
```
with:
```html
      <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Japan-Mobility-Show-2025-RuinDig%203202.jpg?width=1600" alt="Detail of the digital cockpit and touchscreen" loading="lazy">
```

- [ ] **Step 9: Swap the control-panel detail credit (line 212) — CC BY 4.0.**

Replace:
```html
      <a class="image-credit" href="https://commons.wikimedia.org/wiki/File:Kia_PV5_Concept_(3).jpg" target="_blank" rel="noopener">CC BY-SA 4.0 · Wikimedia Commons</a>
```
with:
```html
      <a class="image-credit" href="https://commons.wikimedia.org/wiki/File:Japan-Mobility-Show-2025-RuinDig_3202.jpg" target="_blank" rel="noopener">CC BY 4.0 · Wikimedia Commons</a>
```

- [ ] **Step 10: Swap the tailgate/exterior gallery image (line 215).**

Replace:
```html
      <img src="https://commons.wikimedia.org/wiki/Special:FilePath/2027%20Kia%20PV5%20au%20SIAM%202026.JPG?width=1600" alt="Tailgate open showing boot storage" loading="lazy">
```
with:
```html
      <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20Passenger%20SW1%20Soft%20Mint%20(2).jpg?width=1600" alt="The Kia PV5 Passenger" loading="lazy">
```

- [ ] **Step 11: Swap the tailgate/exterior gallery credit (line 216).**

Replace:
```html
      <a class="image-credit" href="https://commons.wikimedia.org/wiki/File:2027_Kia_PV5_au_SIAM_2026.JPG" target="_blank" rel="noopener">CC BY-SA 4.0 · Wikimedia Commons</a>
```
with:
```html
      <a class="image-credit" href="https://commons.wikimedia.org/wiki/File:Kia_PV5_Passenger_SW1_Soft_Mint_(2).jpg" target="_blank" rel="noopener">CC BY-SA 4.0 · Wikimedia Commons</a>
```

- [ ] **Step 12: Verify no "Cargo" remains in camper.html.**

Run: `grep -ic cargo camper.html`
Expected output: `0`

- [ ] **Step 13: Verify all five new image URLs resolve.**

Run:
```bash
for u in \
  "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20Passenger%20SW1%20Soft%20Mint%20(1).jpg?width=1600" \
  "https://commons.wikimedia.org/wiki/Special:FilePath/Japan-Mobility-Show-2025-RuinDig%203201.jpg?width=1600" \
  "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20(SW1)%20Passenger%20%E2%80%93%20Seoul%20Mobility%20Show%202025%20(01).jpg?width=1600" \
  "https://commons.wikimedia.org/wiki/Special:FilePath/Japan-Mobility-Show-2025-RuinDig%203202.jpg?width=1600" \
  "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20Passenger%20SW1%20Soft%20Mint%20(2).jpg?width=1600"; do
  echo "$(curl -s -o /dev/null -w '%{http_code}' -L "$u") $u"
done
```
Expected: each line starts with `200`.

- [ ] **Step 14: Commit.**

```bash
git add camper.html
git commit -m "Re-base camper page imagery, alts and specs note on PV5 Passenger"
```

---

### Task 3: about.html — story image and paragraph

**Files:**
- Modify: `about.html` (lines 33, 34, 38)

**Interfaces:**
- Consumes: verified file/license table (Global Constraints).
- Produces: nothing.

- [ ] **Step 1: Swap the story image (line 33).**

Replace:
```html
      <img src="https://commons.wikimedia.org/wiki/Special:FilePath/01%20Kia%20PV5%20development%20mule.jpg?width=1600" alt="The workshop — conversion line, PV5 shells" loading="lazy">
```
with:
```html
      <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20Passenger%20JMS%202025.jpg?width=1600" alt="A Kia PV5 Passenger — the base for every Aurelis One" loading="lazy">
```

- [ ] **Step 2: Swap the story credit (line 34) — note license is CC0.**

Replace:
```html
      <a class="image-credit" href="https://commons.wikimedia.org/wiki/File:01_Kia_PV5_development_mule.jpg" target="_blank" rel="noopener">CC BY-SA 4.0 · Wikimedia Commons</a>
```
with:
```html
      <a class="image-credit" href="https://commons.wikimedia.org/wiki/File:Kia_PV5_Passenger_JMS_2025.jpg" target="_blank" rel="noopener">CC0 · Wikimedia Commons</a>
```

- [ ] **Step 3: Rewrite the story paragraph (line 38).**

Replace:
```html
      <p>So we waited for the right base vehicle. The Kia PV5 Cargo gave us what no combustion van could: a completely flat floor, a 71.2 kWh battery that doubles as camp infrastructure, vehicle-to-load power built in, and a 7-year factory warranty that survives conversion.</p>
```
with:
```html
      <p>So we waited for the right base vehicle. The Kia PV5 Passenger gave us what no combustion van could: a completely flat floor, factory side glazing and homologated seating to build around, a 71.2 kWh battery that doubles as camp infrastructure, vehicle-to-load power built in, and a 7-year factory warranty that survives conversion.</p>
```

- [ ] **Step 4: Verify no "Cargo" remains in about.html.**

Run: `grep -ic cargo about.html`
Expected output: `0`

- [ ] **Step 5: Verify the new image URL resolves.**

Run:
```bash
curl -s -o /dev/null -w '%{http_code}\n' -L "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20PV5%20Passenger%20JMS%202025.jpg?width=1600"
```
Expected output: `200`

- [ ] **Step 6: Commit.**

```bash
git add about.html
git commit -m "Re-base About story image and copy on PV5 Passenger"
```

---

### Task 4: Full-site verification in the browser

**Files:** none modified (verification only; fix-and-recommit only if a defect is found).

**Interfaces:**
- Consumes: the three edited HTML files.
- Produces: confirmation the site renders correctly.

- [ ] **Step 1: Confirm zero "Cargo" references site-wide.**

Run: `grep -ric cargo index.html camper.html about.html`
Expected: each file reports `0`.

- [ ] **Step 2: Serve the site locally.**

Run (leave running): `python -m http.server 8000`
(If Python is unavailable, open the files directly via `file://` in the next step.)

- [ ] **Step 3: Render each page and inspect images.**

Open `http://localhost:8000/index.html`, `.../camper.html`, `.../about.html` in the browser (use the claude-in-chrome tools or the run/verify skill). For each page confirm:
  - Every image renders — no broken-image icons. Pay special attention to the swapped slots (index hero + cabin; camper hero, Z1 cab, Z4 boot, control-panel, exterior gallery; about story).
  - The kept camper-interior images (kitchen, beds, pop-top, living area, roof bed, rail-floor) still render.
  - Each swapped image's credit shows the correct license: Soft Mint & Seoul → `CC BY-SA 4.0`; RuinDig 3201/3202 → `CC BY 4.0`; JMS → `CC0`.
  - The rewritten copy reads correctly (index story, About story, camper specs note) and no caption still implies a feature the new photo doesn't show.

Expected: all images load; all credits correct; no "Cargo" anywhere; copy reads cleanly.

- [ ] **Step 4: Stop the local server.**

Stop the `http.server` process (Ctrl-C / kill the background task).

- [ ] **Step 5 (only if a defect was found and fixed): Commit the fix.**

```bash
git add -A
git commit -m "Fix image/copy defect found during full-site verification"
```

---

## Self-Review

**1. Spec coverage:**
- Images + copy scope → Tasks 1–3 swap every base-vehicle image and rewrite all three "Cargo" copy spots. ✓
- "Replace all PV5 shots where a Passenger equivalent exists"; keep camper-conversion shots → Global Constraints + kept-image list; only exterior/cab/dashboard and the two Cargo shots swapped. ✓
- Mint colorway → hero/cabin/camper-hero/exterior use Soft Mint + Seoul (mint/green); interiors from the colour-neutral RuinDig set; About uses mint JMS. ✓
- Base-vehicle caption rewrites → new alts in Task 2 Step 1 (hero) and Task 3 Step 1 (About) drop "pop-top raised" / "workshop shells". ✓
- Per-file license verification → done during planning; exact licenses baked into every credit step (BY-SA / BY / CC0). ✓
- Out-of-scope picsum & pravatar → Global Constraints "Leave untouched". ✓
- Verification (images resolve, no "Cargo", browser render) → Steps 6–8 (Task 1), 12–14 (Task 2), 4–6 (Task 3), Task 4. ✓

**2. Placeholder scan:** No TBD/TODO/"handle appropriately". Every edit step shows the exact before/after HTML; every check shows the exact command and expected output. ✓

**3. Type/string consistency:** File names, `Special:FilePath` `src` encodings, and `File:` credit hrefs match between each image step and its verification `curl`, and the en-dash encoding (`%E2%80%93`) and license strings are consistent across the plan and Global Constraints. ✓
