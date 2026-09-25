import Photo from "./Photo";
import { CONTACT_HREF } from "@/lib/site";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-secondary-soft">
      <div className="container-x grid items-center gap-12 py-14 md:grid-cols-2 md:py-24">
        <div>
          <p className="eyebrow">In-person in Santa Monica and online across California</p>
          <h1 className="text-[2.6rem] leading-[1.05] md:text-6xl">
            Anxiety &amp; trauma therapy in Santa Monica, CA{" "}
            <span className="em">for when you&rsquo;re tired of bracing for the worst.</span>
          </h1>
          <p className="lead mt-6">
            I&rsquo;m Dr. Maya Reynolds, a licensed clinical psychologist. I help adults move out of constant worry,
            burnout, and the lingering effects of past experiences, with practical tools and depth-oriented care.
          </p>
          <div className="mt-8">
            <a href={CONTACT_HREF} className="btn-accent">
              Schedule a session
            </a>
          </div>
        </div>

        {/* The one memorable element: two arched "windows" */}
        <div className="relative mx-auto h-[26rem] w-full max-w-md md:h-[34rem]">
          <Photo
            src="/images/hero-1.jpg"
            alt="Soft evening light over the Santa Monica coastline"
            priority
            className="absolute right-0 top-0 h-[80%] w-[68%] rounded-t-full"
          />
          <Photo
            src="/images/hero-2.jpg"
            alt="A calm corner with a plant and a comfortable chair"
            priority
            className="absolute bottom-0 left-0 h-[55%] w-[52%] rounded-t-full border-4 border-secondary-soft"
          />
        </div>
      </div>
    </section>
  );
}
