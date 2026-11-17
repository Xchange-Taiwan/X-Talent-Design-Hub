# #847 — Julie 2026-11-17 decision

Source: https://github.com/Xchange-Taiwan/X-Talent-Tracker/issues/847#issuecomment-6944335993

- Booking creates no chat message; contact actions remain manual.
- Removed the system question from booking. Mentor-authored questionnaires remain in #840/#842.
- Decline and cancellation reasons remain required. History renders the reason only for its author role; the other participant receives no reason element or expander.
- T10 scenarios: reservation-message, reservation-existing, reservation-failure, booking-mentor-reasons, booking-mentee-reasons.
- Chat source: b7e80282adb71b69a5e6d7bcf1bcc2fdaa864260, Sites v24.
- Mentor source: 0f71678f8a68d67e91d76d656c1fefd25cf511ef, Sites v48.
- Based on remote main c0f6996; approved Chat and composer implementation preserved byte-for-byte.

## Verification

All 8 mentor suites and 4 chat suites passed, plus Hub integration hashes, 60 unique scenarios, bridge, and registry checks. Aside verified required reasons, live history updates, refresh persistence, actor-only rendering, no-question booking submission, custom question numbering, and unchanged chat data after booking. Desktop 1440, Tablet 834 and Mobile 390 checked without horizontal overflow.

These sites use simulated records; operational backend access controls remain the implementation responsibility of the product services.
