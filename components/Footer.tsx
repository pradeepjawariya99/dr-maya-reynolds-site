import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-primary text-paper">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl">{SITE.name}</p>
          <p className="mt-2 text-paper/75">{SITE.title}</p>
          <p className="mt-4 max-w-xs text-paper/75">
            In-person therapy in Santa Monica and secure telehealth for clients in California.
          </p>
        </div>
        <div>
          <h2 className="text-lg !text-secondary">Navigate</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#top" className="text-paper/85 hover:text-paper">Home</a>
            </li>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-paper/85 hover:text-paper">{n.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="text-paper/85 hover:text-paper">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg !text-secondary">Office</h2>
          <address className="mt-3 not-italic text-paper/85">
            {SITE.addressLine1}
            <br />
            {SITE.addressLine2}
          </address>
        </div>
      </div>
      <div className="border-t border-paper/15 py-5 text-center text-sm text-paper/60">
        Fictional therapist created for a design exercise.
      </div>
    </footer>
  );
}
