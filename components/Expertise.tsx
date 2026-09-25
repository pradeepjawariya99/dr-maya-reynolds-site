import Photo from "./Photo";

const areas = [
  "Anxiety",
  "Panic",
  "Trauma",
  "Complex trauma",
  "Burnout",
  "Perfectionism",
  "Overthinking",
  "Stress",
  "Trouble sleeping",
  "Tension in the body",
  "Confidence",
  "Relationships",
  "Sense of safety",
];

export default function Expertise() {
  return (
    <section className="section-y">
      <div className="container-x">
        <Photo
          src="/images/expertise.jpg"
          alt="Wide view of the Pacific horizon at dusk"
          className="aspect-[16/7] rounded-3xl"
        />
        <h2 className="mx-auto mt-12 max-w-3xl text-center text-4xl leading-tight md:text-5xl">
          You deserve a place to slow down and be understood.{" "}
          <span className="em">Nothing here has to be pushed through alone.</span>
        </h2>

        <h3 className="mt-14 text-2xl text-primary-soft">
          Areas I <span className="italic">focus on</span>
        </h3>
        <ul className="mt-4 divide-y divide-primary/15 border-y border-primary/15">
          {areas.map((a) => (
            <li key={a} className="py-3 font-display text-3xl italic text-primary md:text-4xl">
              {a}
            </li>
          ))}
          <li className="py-3 font-display text-3xl text-primary-soft md:text-4xl">&hellip;and more.</li>
        </ul>
      </div>
    </section>
  );
}
