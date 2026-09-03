import type { Metadata } from "next";
import Image from "next/image";
import { ServiceLayout } from "@/components/ServiceLayout";

/**
 * Brand-neutral demonstration templates, not delivered client work. Every one
 * carries visible placeholders (logo slot, "yourbusiness.co.uk", "First name
 * Surname") so nothing here can be read as a real customer's post.
 */
const examples = [
  {
    src: "/mockups/examples/01-announcement.jpg",
    title: "Announcement",
    note: "Opening hours, a new location, a change of service. The post people screenshot and act on.",
  },
  {
    src: "/mockups/examples/02-offer.jpg",
    title: "Offer",
    note: "One number, one condition, one deadline. Vague offers get scrolled past.",
  },
  {
    src: "/mockups/examples/03-team.jpg",
    title: "Meet the team",
    note: "A face and a name. Consistently the best performing post type for a small business.",
  },
  {
    src: "/mockups/examples/04-review.jpg",
    title: "Customer review",
    note: "A real review, quoted verbatim with permission, instead of a claim about yourself.",
  },
  {
    src: "/mockups/examples/05-event.jpg",
    title: "Event",
    note: "Date, time, place and cost above the fold, so nobody has to message you to ask.",
  },
  {
    src: "/mockups/examples/06-article.jpg",
    title: "Article teaser",
    note: "The post that sends people off the feed and onto something you own and can measure.",
  },
];
export const metadata: Metadata = {
  title: "Social Media Management | Swansea & UK",
  description:
    "Social media management for local businesses, clubs and community organisations. Branded post templates, written content, scheduling and reporting you can show a sponsor or a board. Based in Swansea.",
};

export default function SocialMediaManagementPage() {
  return (
    <ServiceLayout
      path="/services/social-media-management"
      title="Social Media Management"
      subtitle="Graphics, copy, scheduling and reporting for organisations that need their social channels to actually earn something back."
    >
      <h2>What it is</h2>
      <p>
        Most social accounts are run by whoever has the time. Posts go out
        when someone remembers, in whatever template was to hand, and nobody
        can say afterwards what it achieved. That works until you need the
        account to do a job: sell a sponsorship, fill an event, bring in
        enquiries.
      </p>
      <p>
        This service takes the channel off your hands and runs it as a
        system. A repeatable set of templates in your own brand, a content
        calendar built around what you actually have coming up, written
        content that says something, and a monthly report that shows what
        happened. Where it makes sense, the same content is published
        somewhere you own so it works in search as well as in the feed.
      </p>

      <h2>Who it&apos;s for</h2>
      <ul>
        <li>
          Sports clubs and community organisations selling sponsorship,
          where the sponsor has been promised exposure and someone needs to
          deliver and evidence it
        </li>
        <li>
          Local businesses with a real audience and no time to post to it
          consistently
        </li>
        <li>
          Organisations running events, fundraisers or recruitment drives
          that live or die on turnout
        </li>
        <li>
          Anyone already paying for SEO who wants the content to work in
          both places rather than being written twice
        </li>
      </ul>

      <h2>The process</h2>
      <ol>
        <li>
          Account audit. What you post now, what it reaches, and which posts
          actually landed
        </li>
        <li>
          Template build. A branded set covering your recurring post types,
          designed once and reused
        </li>
        <li>
          Content calendar. Mapped to your fixtures, opening hours, events
          and seasonal peaks
        </li>
        <li>
          Production and scheduling. Graphics and copy produced ahead of
          time and queued, not scrambled the night before
        </li>
        <li>
          Monthly reporting. Reach, engagement and the numbers a sponsor or
          a board actually asks for
        </li>
      </ol>

      <h2>Deliverables</h2>
      <ul>
        <li>Branded template set built to your colours, crest or logo</li>
        <li>A rolling content calendar you can see a month ahead</li>
        <li>Scheduled posts across Facebook, Instagram and X</li>
        <li>Written content: reports, previews, announcements, profiles</li>
        <li>Sponsor-facing summary showing where their name appeared</li>
        <li>Optional: a simple website or news page so the content is indexed</li>
      </ul>

      <h2>Example templates</h2>
      <p>
        A set covering the post types most organisations need month to month.
        These are demonstrations rather than a client&apos;s live posts, so
        they carry visible placeholders where your logo, photos and details go.
        Yours would be built in your own colours and typefaces, then refilled
        each time rather than redesigned.
      </p>
      <div className="not-prose mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {examples.map((ex) => (
          <figure key={ex.src} className="flex flex-col gap-3">
            <Image
              src={ex.src}
              alt={`${ex.title} social media post template`}
              width={1080}
              height={1080}
              className="w-full rounded-md border border-[var(--border)]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <figcaption className="text-sm text-[var(--muted-foreground)]">
              <span className="font-semibold text-[var(--primary)]">
                {ex.title}.
              </span>{" "}
              {ex.note}
            </figcaption>
          </figure>
        ))}
      </div>

      <h2>Sports clubs and sponsorship</h2>
      <p>
        Grassroots and amateur clubs sell sponsorship on the promise of
        exposure, and social mentions are usually written into the package.
        The problem is almost never the selling. It is that nothing
        systematic gets published afterwards, so the sponsor sees very
        little, and renewal is a conversation about goodwill rather than
        value.
      </p>
      <p>
        A consistent matchday set, written reports and a handful of genuine
        sponsor activations turn that around. The club has something to show
        at renewal, and something to sell with when it approaches the next
        business. Typical output covers fixture announcements, matchday
        posts, line-ups, in-game updates, full-time results, written match
        reports, player of the match, signings, milestones, and sponsor
        features that read as content rather than an advert.
      </p>

      <h2>Pricing</h2>
      <p>
        Priced on the number of channels, post volume and how much of the
        content is written rather than templated. Template-only graphics
        packages start lower than full management. Community clubs and
        charities are quoted separately from commercial work. Ask and you
        will get a figure, not a discovery call.
      </p>

      <h2>Typical timeline</h2>
      <p>
        Audit and template build: 2&ndash;3 weeks. Consistent output from
        month one, with the reporting picture meaningful by month three.
      </p>
    </ServiceLayout>
  );
}
