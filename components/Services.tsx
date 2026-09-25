import Photo from "./Photo";

const services = [
  {
    title: "Anxiety & panic therapy",
    text: "Constant worry, tension in your body, and restless nights can leave you exhausted even when everything looks fine from the outside. Using CBT, mindfulness-based practices, and body-oriented techniques, we work on both your thoughts and your body's response so you can feel calmer in daily life.",
  },
  {
    title: "Trauma therapy with EMDR",
    text: "Trauma work is a core part of my practice, whether it comes from a single event or long-standing patterns rooted in childhood, relationships, or chronic stress. With EMDR and a carefully paced approach built on safety and stabilization, we help you feel more regulated in everyday life, not only during sessions.",
  },
  {
    title: "Burnout & perfectionism counseling",
    text: "If you're an entrepreneur, creative, or professional who has pushed through stress for years, therapy can be a place to slow down and reconnect with yourself. We work on perfectionism and high internal pressure and build more sustainable ways of living and working.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-y">
      <div className="container-x">
        <Photo
          src="/images/services.jpg"
          alt="Warm light across a quiet room, a place to slow down"
          className="aspect-[16/7] rounded-3xl"
        />
        <h2 className="mt-12 max-w-3xl text-4xl leading-tight md:text-5xl">
          Honoring where you&rsquo;ve been <span className="em">and shaping where you&rsquo;re headed.</span>
        </h2>
        <h3 className="mt-6 text-2xl text-primary-soft">
          Therapy services in Santa Monica, <span className="italic">CA</span>
        </h3>

        <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="border-t border-primary/30 pt-5">
              <h4 className="text-3xl">{s.title}</h4>
              <p className="body-copy mt-3">{s.text}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-primary underline underline-offset-4 hover:text-accent">
                Learn more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}