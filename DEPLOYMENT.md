# crispinbt.co.uk – Deployment Guide

## Forms: Where do submissions go?

Form submissions (Contact and Free Audit) are handled by **Netlify Forms**.

1. **View submissions:** Netlify Dashboard → Your site → **Forms**
2. **Email notifications:** Site settings → Forms → Form notifications → Add notification
   - Add your email to receive submissions instantly
   - Or use Slack, webhooks, etc.
3. **Form names:**
   - `contact` – Contact page form (name, email, phone, service, project details, budget)
   - `free-audit` – Audit page form (website URL, challenges, name, email)

Submissions are also stored in the Netlify dashboard under **Forms** for 30 days on all plans.

---

## Calendly: How to link it up

1. **Create a Calendly account** at [calendly.com](https://calendly.com) (free tier is fine).
2. **Create an event type** (e.g. "30-min Consultation") and set availability.
3. **Copy your scheduling link** (e.g. `https://calendly.com/your-username/30min`).
4. **Add to Netlify:**
   - Netlify Dashboard → Site settings → **Environment variables**
   - Add variable:
     - **Key:** `NEXT_PUBLIC_CALENDLY_URL`
     - **Value:** `https://calendly.com/your-username/your-event-type`
5. **Redeploy** so the new env var is used.

The embed on the Contact page will automatically use this URL. If not set, it falls back to `https://calendly.com/crispinbodentebbutt/30min`.

---

## Domain: How to switch crispinbt.co.uk over

Once the site is deployed and working on Netlify’s default URL:

### 1. Add domain in Netlify

- Netlify Dashboard → **Domain management** → **Add custom domain**
- Enter: `crispinbt.co.uk`
- Add `www.crispinbt.co.uk` as well if you want www to work
- Netlify will show the DNS records you need

### 2. Update DNS at your registrar

Where you bought crispinbt.co.uk (e.g. IONOS, GoDaddy, Namecheap):

**Option A – Netlify DNS (recommended)**

- Netlify → Domain management → **Set up Netlify DNS** for your domain
- Your registrar will prompt you to change nameservers to Netlify’s
- Copy the nameservers Netlify shows (e.g. `dns1.p01.nsone.net`, `dns2.p01.nsone.net`)
- At your registrar: set the domain’s nameservers to those Netlify values

**Option B – Keep current DNS**

Add these records at your current DNS provider:

- **A record:** `@` → `75.2.60.5` (Netlify load balancer)
- **CNAME record:** `www` → `your-site-name.netlify.app`

### 3. SSL and verification

- Netlify provisions a free SSL certificate (Let’s Encrypt) when DNS is correct
- DNS propagation can take 5 minutes to 48 hours
- Check: Netlify → Domain management → HTTPS shows a green check

### 4. Redirects (optional)

- Netlify → Domain management → **Domain settings**
- Enable “Force HTTPS”
- Add redirect: `www.crispinbt.co.uk` → `https://crispinbt.co.uk` (or keep both)

---

## Theme

The site defaults to a **dark theme** with teal accents and gradient backgrounds. A **light/dark toggle** in the navigation lets visitors switch. Preference is stored in `localStorage`.
