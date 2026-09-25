import Photo from "./Photo";
import { CONTACT_HREF } from "@/lib/site";

const methods = ["Cognitive-behavioral therapy (CBT)", "EMDR", "Mindfulness-based practices", "Body-oriented techniques"];

export default function HowIWork() {
  return (
    <section id="about" className="section-y bg-primary text-paper">
      <div className="container-x grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Photo
          src="/images/maya.jpg"
          alt="Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica"
          className="mx-auto aspect-[4/5] w-full max-w-md rounded-t-full"
        />
        <div>
          <p className="mb-4 text-sm font-medium tracking-wide text-secondary">How I work</p>
          <h2 className="text-4xl leading-tight !text-paper md:text-5xl">
            Meet Dr. Maya Reynolds, PsyD.{" "}
            <span className="italic text-secondary">A warm, collaborative, and grounded approach.</span>
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-paper/85">
            <p>
              I&rsquo;m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults
              who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
            </p>
            <p>
              Sessions are structured enough to feel supportive while leaving room for reflection and depth. I
              combine evidence-based methods to help you understand both the emotional and physiological sides of what
              you&rsquo;re experiencing:
            </p>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2">
            {methods.map((m) => (
              <li key={m} className="rounded-full border border-secondary/50 px-4 py-1.5 text-sm text-paper">
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed text-paper/85">
            My goal is not just symptom relief, but helping you build insight, resilience, and a stronger relationship
            with yourself. If you want practical tools alongside depth-oriented work, and a therapist who understands
            life in a fast-paced environment, I may be a good fit.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a href={CONTACT_HREF} className="btn-accent">
              Schedule a session
            </a>
            <a href="#services" className="text-sm font-medium text-secondary underline underline-offset-4 hover:text-paper">
              Learn more about my approach
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
