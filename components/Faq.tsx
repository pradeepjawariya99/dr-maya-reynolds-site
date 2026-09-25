const faqs = [
  {
    q: "Who do you work with?",
    a: "I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many are high-achieving, thoughtful professionals, entrepreneurs, or creatives who look functional on the outside while feeling exhausted or stuck in overthinking on the inside.",
  },
  {
    q: "What kinds of therapy do you use?",
    a: "I integrate evidence-based methods, including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, so we can address both the emotional and physiological sides of what you're experiencing.",
  },
  {
    q: "Do you offer trauma therapy in Santa Monica?",
    a: "Yes. Trauma work is an important part of my practice. I work with single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. The pace is careful, with an emphasis on safety and stabilization.",
  },
  {
    q: "Can I meet with you online?",
    a: "Yes. I offer secure telehealth sessions for clients located in California, as well as in-person sessions at my Santa Monica office.",
  },
  {
    q: "What is your office like?",
    a: "It's a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.",
  },
  {
    q: "What can I expect in a session?",
    a: "Sessions are structured enough to feel supportive, with space for reflection and depth. You'll be respected, understood, and actively involved in the process, and we'll work toward insight, resilience, and feeling more regulated in your daily life.",
  },
];

export default function Faq() {
  return (
    <section id="faqs" className="section-y">
      <div className="container-x grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <h2 className="text-4xl leading-tight md:text-5xl">
          Questions about therapy <span className="em">in Santa Monica?</span>
        </h2>
        <div className="divide-y divide-primary/15 border-y border-primary/15">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-2xl text-primary">
                {f.q}
                <span aria-hidden className="text-3xl leading-none text-primary-soft transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="body-copy mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
