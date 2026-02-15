# Feedback Notes

## Completed
- Trust section: Added Clearbit logos for Penguin Random House, Imagination Technologies, GoCompare, Amber Energy
- Rate card: Aligned pricing with CBT Consulting Rate Card (Oct 24) – £400/day one-off, £300/day ongoing
- LinkedIn: Updated to linkedin.com/in/crispinbt
- Headshot: Replaced placeholder with your photo (Home + About)
- View Services: Now a secondary CTA button matching Get Free Audit / Book Consultation
- Process page: Fixed overlapping numbers, expanded content, added pricing section
- Email: Updated to crispinbt@gmail.com
- Calendly: Default URL set to crispinbt; API token documented for env vars (never in code)

## Kept as placeholders
- Case studies
- Testimonials

## Agency Partners page
Looks good. Optional additions you could consider later:
- Short "What happens next" (intro call → scope → proposal)
- A testimonial from an agency partner when you have one

## About page
Added your photo and location tagline. You could personalise further with:
- A specific "Why Swansea?" line if relevant
- One sentence on interests outside work (optional, keeps it approachable)
- A standout project or result you're proud of

## Calendly API token
Store in Netlify environment variables – never commit to the repo. For the embed, set `NEXT_PUBLIC_CALENDLY_URL` to your scheduling link (e.g. https://calendly.com/crispinbt/30min).

## Anything else?
- Consider adding Google Analytics or similar when you launch
- Ensure Netlify form notifications are set to crispinbt@gmail.com
- Replace placeholder client logos in the trust section if Clearbit doesn’t have one (e.g. Amber Energy)
