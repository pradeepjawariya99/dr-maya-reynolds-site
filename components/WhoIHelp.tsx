import Photo from "./Photo";

const groups = [
  {
    title: "Adults with anxiety & panic",
    image: "/images/help-anxiety.jpg",
    alt: "Hands resting around a warm cup of tea",
    text: "Stuck in overthinking, on edge, or always bracing for something to go wrong? We look at both the emotional and the physical side of anxiety so your mind and body can settle.",
  },
  {
    title: "Adults healing from trauma",
    image: "/images/help-trauma.jpg",
    alt: "Person walking slowly along the shoreline at sunrise",
    text: "Whether it was a single event or long-standing patterns from childhood, relationships, or chronic stress, we go at a careful pace with safety and stabilization first.",
  },
  {
    title: "Professionals facing burnout",
    image: "/images/help-burnout.jpg",
    alt: "Notebook and laptop on a quiet desk by a window",
    text: "For entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress, perfectionism, and high internal pressure.",
  },
];

export default function WhoIHelp() {
  return (
    <section className="section-y bg-secondary-soft">
      <div className="container-x">
        <h2 className="text-4xl md:text-5xl">
          Who I <span className="em">help</span>
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {groups.map((g, i) => (
            <article key={g.title}>
              <Photo
                src={g.image}
                alt={g.alt}
                className={`aspect-[4/5] ${i === 1 ? "rounded-t-[999px] rounded-b-2xl" : "rounded-2xl"}`}
              />
              <h3 className="mt-5 text-3xl">{g.title}</h3>
              <p className="body-copy mt-2">{g.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
