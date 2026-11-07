export const EMAIL = "savic3916@gmail.com";

export const SUBJECT = "Opportunity for React Native Engineer - Akpan Victor";

export const BODY = `Hello Victor,

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

const s = encodeURIComponent(SUBJECT);
const b = encodeURIComponent(BODY);
const to = encodeURIComponent(EMAIL);

// Every link below is already addressed to Victor with the message filled in.
export const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${s}&body=${b}`;
export const outlookLink = `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${s}&body=${b}`;
export const yahooLink = `https://compose.mail.yahoo.com/?to=${to}&subj=${s}&body=${b}`;
export const mailtoLink = `mailto:${EMAIL}?subject=${s}&body=${b}`;
