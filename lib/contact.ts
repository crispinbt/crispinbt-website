/**
 * One definition of the contact details, so the site, the JSON-LD and the
 * Google Business Profile cannot drift apart. NAP consistency is a local
 * ranking signal, and three hardcoded copies is how it gets lost.
 *
 * `TELEPHONE_E164` is the form schema.org and GBP want; `TELEPHONE_DISPLAY`
 * is the form a human reads.
 */
export const EMAIL = "crispinbt@gmail.com";
export const TELEPHONE_E164 = "+447710997650";
export const TELEPHONE_DISPLAY = "07710 997650";

/**
 * The Calendly embed is only rendered when this is set to a scheduling link
 * that actually resolves. There is deliberately no hardcoded fallback: the
 * previous default, `https://calendly.com/crispinbt/30min`, had no matching
 * event type on the account, so the iframe rendered "This Calendly URL is not
 * valid" as a blank slab on /contact from the initial commit onwards.
 *
 * To turn booking back on: create the event type in Calendly, then set
 * NEXT_PUBLIC_CALENDLY_URL in the Netlify environment variables to its public
 * link and redeploy. Verify the link in a browser first - Calendly returns
 * HTTP 200 for invalid slugs, so a status check does not prove it works.
 */
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || null;
