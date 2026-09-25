# Dr. Maya Reynolds, PsyD: homepage

Next.js 14 (App Router) + Tailwind CSS. Copy is based on Dr. Maya's profile.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # check it builds before deploying
```

## Before you submit
1. Add photos to `public/images/` (see `public/images/README.txt`).
2. Set the real contact link in `lib/site.ts` (`CONTACT_HREF`). The profile has no email or phone.
3. Compare each section with https://www.conejovalleycounseling.com/home at 1440px, 768px and 390px, then fix spacing and font sizes by hand.
4. Change colours in one place: the `:root` block in `app/globals.css`.
5. Read each component. Interview questions will be about your own code.
6. Push to a public GitHub repo, then import into Vercel.

## Structure
Header, Hero, Hope, WhoIHelp, Expertise, HowIWork (bio), Services (3), Office (new section), Faq, Booking, Footer. Everything is in `components/`.

## Notes
- Theme: "Pacific dusk": deep blue-teal (primary), sea glass (secondary), low-sun amber (accent).
- FAQs are added because the brief asks for FAQ copy; the original homepage links to a separate FAQs page. Remove `<Faq />` in `app/page.tsx` if you want a stricter clone.
