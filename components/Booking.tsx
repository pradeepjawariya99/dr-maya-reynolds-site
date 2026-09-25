import Photo from "./Photo";
import { CONTACT_HREF } from "@/lib/site";

export default function Booking() {
  return (
    <section id="contact" className="section-y bg-secondary-soft">
      <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-4xl leading-tight md:text-5xl">
            Find out if we&rsquo;re a good <span className="em">fit.</span>
          </h2>
          <p className="body-copy mt-5">
            Reaching out is a big step, and I want you to feel respected and understood from the start. Meet in person
            at my Santa Monica office, or by secure telehealth from anywhere in California, whichever works best for
            you.
          </p>
          <p className="body-copy mt-4">Select the button below to schedule a session.</p>
          <div className="mt-8">
            <a href={CONTACT_HREF} className="btn-accent">
              Schedule a session
            </a>
          </div>
        </div>
        <Photo
          src="/images/booking.jpg"
          alt="Sunlit doorway opening onto a quiet Santa Monica street"
          className="aspect-[4/3] rounded-3xl"
        />
      </div>
    </section>
  );
}
