import { Link } from "react-router-dom";

const features = [
  {
    icon: "🛡️",
    title: "Quality Workmanship",
    text: "Built to last, with attention to every detail.",
  },
  {
    icon: "◷",
    title: "Reliable Delivery",
    text: "We value your time and plan every stage carefully.",
  },
  {
    icon: "♙",
    title: "Skilled Professionals",
    text: "A committed team focused on quality construction.",
  },
  {
    icon: "♧",
    title: "Sustainable Building",
    text: "Thoughtful solutions for people and the environment.",
  },
];

const services = [
  {
    number: "01",
    title: "Residential Construction",
    text: "From family homes to modern luxury residences, we help turn building plans into reality.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    title: "Commercial Buildings",
    text: "Functional, durable spaces designed around business needs and long-term value.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Renovations & Remodeling",
    text: "Upgrade existing spaces with practical improvements and a fresh, modern finish.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative flex min-h-[650px] items-center bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90"
          alt="Modern residential architecture"
          className="absolute inset-0 h-full w-full object-cover"
        />
        

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/10" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
          <div className="max-w-3xl">
          
            <p className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
              <span className="h-0.5 w-10 bg-amber-400" />
              Building today. Better tomorrow.
            </p>

            <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Quality Construction
              <span className="mt-2 block text-amber-400">
                For a Stronger Future.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Rubu Construction Limited is dedicated to delivering dependable
              construction solutions for residential and commercial projects.
              From the first plan to the final finish, we put quality first.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-3 rounded-md bg-amber-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-amber-300"
              >
                Explore Our Services <span>→</span>
              </Link>

              <Link
                to="/contact"
                className="rounded-md border border-white/70 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950"
              >
                Request a Quote
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-6 text-sm text-slate-200">
              <span>✓ Quality-focused approach</span>
              <span>✓ Client-first service</span>
              <span>✓ Built around your needs</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden h-2 w-1/3 bg-amber-400 lg:block" />
      </section>

      {/* FEATURES */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 px-6 sm:grid-cols-2 sm:px-10 sm:divide-y-0 lg:grid-cols-4 lg:px-12">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex gap-4 py-8 sm:px-5 lg:px-4"
            >
              <span className="text-3xl text-amber-500" aria-hidden="true">
                {feature.icon}
              </span>
              <div>
                <h2 className="font-extrabold text-slate-900">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {feature.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-12 lg:py-28">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1100&q=85"
            alt="Construction professionals working on a building project"
            className="h-[430px] w-full rounded-xl object-cover shadow-xl sm:h-[520px]"
            loading="lazy"
          />

          <div className="absolute -bottom-5 right-4 max-w-xs rounded-lg border-l-4 border-amber-400 bg-slate-950 p-5 text-white shadow-xl sm:-right-5">
            <p className="text-xl font-black">Built with purpose.</p>
            <p className="mt-1 text-sm text-slate-300">
              Every project starts with understanding your vision.
            </p>
          </div>
        </div>

        <div className="pt-6 lg:pt-0">
          <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
            <span className="h-0.5 w-9 bg-amber-400" />
            About Rubu Construction
          </p>

          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-5xl">
            We Build More Than Structures.
            <span className="mt-2 block text-amber-500">
              We Build Possibilities.
            </span>
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Every successful building begins with a clear vision and a team
            committed to bringing it to life. Rubu Construction Limited aims to
            provide practical construction solutions shaped around each
            client's requirements.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            We believe good construction combines thoughtful planning,
            responsible workmanship, clear communication, and attention to
            detail at every stage.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-3 border-b-2 border-amber-400 pb-2 font-extrabold transition hover:text-amber-600"
          >
            Discover Our Company <span>→</span>
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
                What We Do
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                Construction Solutions
                <span className="block text-amber-500">That Deliver.</span>
              </h2>
            </div>

            <Link
              to="/services"
              className="font-bold text-slate-800 transition hover:text-amber-600"
            >
              View All Services →
            </Link>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-0 left-0 bg-amber-400 px-5 py-3 text-lg font-black text-slate-950">
                    {service.number}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-extrabold">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {service.text}
                  </p>
                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 font-bold text-amber-600 hover:text-slate-950"
                  >
                    Learn More <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 sm:px-10 lg:px-12">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />

        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Let's Build Something Great
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl">
              Have a Construction Project in Mind?
            </h2>
            <p className="mt-5 leading-7 text-slate-300">
              Tell us about your plans. Let's discuss the right way to move
              your project forward.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-md bg-amber-400 px-8 py-4 font-extrabold text-slate-950 transition hover:bg-amber-300 md:self-center"
          >
            Talk to Our Team <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}