import Photo from "./Photo";

export default function Hope() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-tight md:text-5xl">
            You look like you&rsquo;re coping. Inside, you&rsquo;re exhausted.
          </h2>
          <p className="em mt-4 font-display text-2xl md:text-3xl">Therapy can help you finally exhale.</p>
          <p className="body-copy mx-auto mt-6">
            Many of the adults I work with in Santa Monica are high-achieving, thoughtful, and self-aware. From the
            outside, life looks functional. On the inside there&rsquo;s constant worry, tension in the body, trouble
            sleeping, and a sense that something is about to go wrong.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <Photo
            src="/images/hope.jpg"
            alt="Quiet stretch of California beach at low tide"
            className="aspect-[4/3] rounded-3xl"
          />
          <p className="body-copy">
            Whether you&rsquo;re dealing with anxiety, panic, burnout, or the effects of earlier life experiences on
            your relationships, confidence, or sense of safety, you don&rsquo;t have to push through it alone. Here
            you&rsquo;ll be respected, understood, and actively involved in every step, so therapy builds insight,
            resilience, and a stronger relationship with yourself over time.
          </p>
        </div>
      </div>
    </section>
  );
}
