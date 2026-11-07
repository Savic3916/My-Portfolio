const TO = "savic3916@gmail.com";

const SUBJECT = "Opportunity for React Native Engineer - Akpan Victor";

const BODY = `Hello Victor,

I came across your portfolio and I'm impressed by your work as a React Native engineer, especially the logistics and POS suite and the apps you've shipped to Google Play and the App Store.

I'd like to discuss an opportunity with you.

Company / Team:
Role:
Type of engagement (full-time / contract / project):
Location / Remote:
Estimated start date:

A few details about what we are looking for:


Please let me know your availability for a short call this week.

Best regards,
[Your name]
[Your company]
[Phone / LinkedIn]`;

// Opens a pre-filled Gmail compose window in the browser, already addressed to Victor.
export const hireMeLink =
  "https://mail.google.com/mail/?view=cm&fs=1" +
  `&to=${encodeURIComponent(TO)}` +
  `&su=${encodeURIComponent(SUBJECT)}` +
  `&body=${encodeURIComponent(BODY)}`;
