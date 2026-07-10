// Curated Unsplash imagery for the Amidarh site.
// Verified reachable; served with sizing/quality params for performance.
const U = "https://images.unsplash.com";
const p = (id: string, w = 1200) => `${U}/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  heroPrimary: p("photo-1522202176988-66273c2fd55f", 1000), // people learning together
  heroSecondary: p("photo-1513258496099-48168024aec0", 700), // notes / study desk
  heroTertiary: p("photo-1517245386807-bb43f82c33c4", 700), // library reading
  flow: p("photo-1499750310107-5fef28a66643", 1100), // individual learning on laptop
  trupper: p("photo-1523240795612-9a054b0db644", 1100), // classroom / institution
  cta: p("photo-1503676260728-1c00da094a0b", 1400), // studying, warm
};
