# Design: Re-base the Aurelis One site on the Kia PV5 Passenger

**Date:** 2026-07-31
**Status:** Awaiting user review
**Scope:** `index.html`, `camper.html`, `about.html` (static site, no build step)

## Goal

The site currently presents the Aurelis One camper as built on the **Kia PV5 Cargo**.
The base vehicle is changing to the **Kia PV5 Passenger**. Update the site's imagery
and copy so it consistently reflects the Passenger variant.

Decisions confirmed with the user:

- **Scope:** images **and** copy (reframe the "why this base van" rationale for the Passenger).
- **Breadth:** replace **all** current Kia PV5 shots with Passenger equivalents **wherever one exists**.
- **Colorway:** standardize exteriors on the **mint / green** Passenger sets.
- **Captions:** where a swapped-in stock Passenger photo no longer matches an evocative
  caption ("pop-top raised", "workshop shells"), **rewrite the caption to honest
  base-vehicle framing**.

## Key constraint: the Passenger is not a camper

The Kia PV5 Passenger is a production people-mover. Its 25 Wikimedia Commons photos are
all **exterior, cab, and dashboard** — there are **no** kitchen / bed / pop-top /
living-area photos. Those camper interiors only exist in the Aurelis conversion and are
currently represented by PV5 **Concept** images (Kia's own concept camper), which are
*not* Cargo shots.

Therefore "replace all where a Passenger equivalent exists" resolves to:

- **Swap** every shot that reveals the base van's body & cab (exterior + cab + dashboard,
  plus the two genuine **Cargo** shots) → mint Passenger photos.
- **Keep** the camper-conversion shots (kitchen, beds, pop-top, living area, rail-floor).
  They depict the conversion, not the base van, and have no Passenger equivalent. These
  are already Concept images, not Cargo, so they carry no "Cargo" implication.

## Image source & licensing

All images are hot-linked from Wikimedia Commons (matching the current site pattern):

- `src`: `https://commons.wikimedia.org/wiki/Special:FilePath/<url-encoded name>?width=1600`
- credit link: `https://commons.wikimedia.org/wiki/File:<name_with_underscores>`

**Licensing (must verify per file during implementation):** the current site uses a
blanket `CC BY-SA 4.0 · Wikimedia Commons` credit. Passenger files may carry a different
license (e.g. CC BY 4.0). For **each** new file, open its Commons `File:` page, read the
license, and set the credit string to the **actual** license (e.g. `CC BY 4.0 · Wikimedia
Commons`) with the link pointing at that file page. Do not assume BY-SA. Also re-confirm
the exact filename (spaces, en-dash `–` = `%E2%80%93`, parentheses) before wiring the URL.

## Image plan

Lead file candidates below; exact file confirmed at implementation time alongside the
license check. Interiors (cab / control panel) are colour-neutral, so they're drawn from
the Japan Mobility Show set regardless of the mint exterior choice.

### index.html

| Line | Slot | Current | Action | New file (lead candidate) | New alt |
|---|---|---|---|---|---|
| 27/51 | Hero | `Kia PV5 SW1 – Seoul Mobility Show 2025 (01)` | **Swap** | `Kia PV5 Passenger SW1 Soft Mint (4)` (mint side profile) | "The Aurelis One, built on the Kia PV5 Passenger" |
| 66/67 | Pop-top | `오픈베드` | **Keep** | — | — |
| 87/88 | Galley | `Kia PV5 Concept (10)` | **Keep** | — | — |
| 108/109 | The Cabin | `Kia PV5 (SW1) **Cargo** – Seoul … (02)` | **Swap** | `Kia PV5 Passenger SW1 Soft Mint (3)` (doors open, seats/floor) | "Passenger cabin, sliding door open — flat floor and rail-mounted seats" |
| 160 | Camp scene | `picsum.photos` placeholder | **Leave** (out of scope) | — | — |
| 163/164 | Roof bed | `Kia PV5 Concept (14)` | **Keep** | — | — |
| 167/168 | Charging | `Kia PV5 Concept (5)` | **Keep** (no Passenger charging shot) | — | — |

### camper.html

| Line | Slot | Current | Action | New file (lead candidate) | New alt |
|---|---|---|---|---|---|
| 34/35 | Profile hero | `Kia PV5 concept` | **Swap** | `Kia PV5 Passenger SW1 Soft Mint (1)` (mint front ¾) | "The Kia PV5 Passenger — the base for every Aurelis One" |
| 45/46 | Z1 cab | `Kia PV5 Concept (2)` | **Swap** | `Japan-Mobility-Show-2025-RuinDig 3201` (dash/steering) | "The Kia PV5 Passenger cab and digital cockpit" |
| 58/59 | Z2 living | `Kia PV5 Concept (13)` | **Keep** | — | — |
| 71/72 | Z3 galley | `Kia PV5 Concept (11)` | **Keep** | — | — |
| 84/85 | Z4 boot | `Kia PV5 (SW1) **Cargo** – Seoul … (01)` | **Swap** | `Kia PV5 (SW1) Passenger – Seoul Mobility Show 2025 (01)` (rear ¾) | "Rear of the Kia PV5 Passenger with the tailgate" |
| 124/125 | Pop-top | `오픈베드` | **Keep** | — | — |
| 134/135 | Kitchen | `Kia PV5 Concept (10)` | **Keep** | — | — |
| 151/152 | Sleeping | `Kia PV5 Concept (15)` | **Keep** | — | — |
| 207/208 | Rail floor | `Kia PV5 Concept (6)` | **Keep** (Aurelis mod, no equivalent) | — | — |
| 211/212 | Control panel | `Kia PV5 Concept (3)` | **Swap** | `Japan-Mobility-Show-2025-RuinDig 3202` (center touchscreen) | "Detail of the digital cockpit and touchscreen" |
| 215/216 | Tailgate/exterior | `2027 Kia PV5 au SIAM 2026` | **Swap** | `Kia PV5 Passenger SW1 Soft Mint (2)` (mint front ¾, other angle) | "The Kia PV5 Passenger" |

### about.html

| Line | Slot | Current | Action | New file (lead candidate) | New alt |
|---|---|---|---|---|---|
| 33/34 | Story image | `01 Kia PV5 development mule` | **Swap** | `Kia PV5 Passenger JMS 2025` (mint exterior) | "A Kia PV5 Passenger — the base for every Aurelis One" |
| 92/99/106 | Team portraits | `i.pravatar.cc` placeholders | **Leave** (out of scope) | — | — |

## Copy plan

Rationale reframe: the old story sells the Cargo's *blank canvas / no windows / flat
floor*. The Passenger's angle is stronger for a camper — **it already ships with factory
side glazing and homologated seats**, so occupants travel legally belted and wake up to
daylight, on the **same flat skateboard floor**.

**index.html L57** — before:
> Every Aurelis One starts life as a Kia PV5 Cargo — a dedicated electric platform with a flat floor, 71.2 kWh of battery, and no engine to work around. We use that freedom to build a camper the combustion era never could.

after:
> Every Aurelis One starts life as a Kia PV5 Passenger — a dedicated electric platform that already ships with what a camper needs: factory side glazing, homologated seats, a flat skateboard floor, 71.2 kWh of battery, and no engine to work around. We start from a van built for people and turn it into a camper the combustion era never could.

**about.html L38** — before:
> So we waited for the right base vehicle. The Kia PV5 Cargo gave us what no combustion van could: a completely flat floor, a 71.2 kWh battery that doubles as camp infrastructure, vehicle-to-load power built in, and a 7-year factory warranty that survives conversion.

after:
> So we waited for the right base vehicle. The Kia PV5 Passenger gave us what no combustion van could: a completely flat floor, factory side glazing and homologated seating to build around, a 71.2 kWh battery that doubles as camp infrastructure, vehicle-to-load power built in, and a 7-year factory warranty that survives conversion.

**camper.html L202** — before:
> Base-vehicle figures per Kia PV5 Cargo homologation (WLTP). …

after:
> Base-vehicle figures per Kia PV5 Passenger homologation (WLTP). …

**index.html L27 hero alt** — `built on the Kia PV5` → `built on the Kia PV5 Passenger` (minor, for consistency).

No change to generic "Built on the Kia PV5" strings (footers, eyebrow L30, `<title>`/meta) —
they name the platform, not the variant, and remain correct.

## Out of scope

- `picsum.photos` camp-scene placeholder (index L160) and `i.pravatar.cc` team portraits
  (about) — not Kia imagery; left untouched.
- No CSS / layout changes. No new local image assets. No build tooling.

## Verification

- Render all three pages in a browser; confirm every swapped image loads (Wikimedia
  `Special:FilePath` resolves) and no broken images remain.
- Confirm no remaining on-page reference to "Cargo".
- Confirm each new image credit links to the correct `File:` page and names the correct
  license.
