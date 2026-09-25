import Photo from "./Photo";
import { SITE } from "@/lib/site";

const details = [
  { label: "Where", value: `${SITE.addressLine1}, ${SITE.addressLine2}` },
  { label: "In person", value: "Sessions at my Santa Monica office" },
  { label: "Online", value: "Secure telehealth for clients located in California" },
  { label: "The space", value: "Quiet, private, and uncluttered, with natural light" },
];

/* NEW SECTION (not in the original template) */
export default function Office() {
  return (
    <section id="office" className="section-y bg-secondary-soft">
      <div className="container-x">
        <div className="grid items-end gap-8 md:grid-cols-2">
          <h2 className="text-4xl leading-tight md:text-5xl">
            A calm, private therapy office in Santa Monica.{" "}
            <span className="em">Come as you are.</span>
          </h2>
          <p className="body-copy">
            My office is a quiet, private space designed to feel calm and grounding, with natural light and a
            comfortable, uncluttered environment. Clients often tell me the space itself helps them feel more at ease
            when they arrive.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          <Photo
            src="/images/office-1.jpg"
            alt="Therapy room with a comfortable seating area and natural light"
            className="aspect-[4/3] rounded-3xl md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[26rem]"
          />
          <Photo
            src="/images/office-2.jpg"
            alt="Calm corner of the Santa Monica therapy office"
            className="aspect-[4/3] rounded-3xl"
          />
        </div>

        <dl className="mt-10 grid gap-6 border-t border-primary/20 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((d) => (
            <div key={d.label}>
              <dt className="text-sm font-medium text-primary-soft">{d.label}</dt>
              <dd className="mt-1 leading-snug text-ink">{d.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
