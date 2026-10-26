import { Link } from "react-router-dom";

const values = [
  {
    title: "Quality Construction",
    description:
      "We focus on quality workmanship, careful planning, and attention to detail throughout every stage of construction.",
    icon: "🏗️",
  },
  {
    title: "Professional Planning",
    description:
      "From architectural and structural plans to Bills of Quantities, we help clients plan their projects with clarity.",
    icon: "📐",
  },
  {
    title: "Client-Focused Service",
    description:
      "We aim to understand each client's needs and provide practical solutions for residential and commercial developments.",
    icon: "🤝",
  },
];

export default function About() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-slate-950 px-6 py-24 text-white sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
          alt="Modern residential architecture"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-slate-950/60" />

        <div className="mx-auto max-w-7xl">
          <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-amber-400">
            About Rubu Construction
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Building with purpose.
            <span className="block text-amber-400">
              Planning for the future.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            We provide construction and building-related services for
            residential and commercial projects, helping clients turn
            their ideas into practical plans and spaces.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-semibold uppercase tracking-widest text-amber-600">
            Who We Are
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Your vision deserves careful planning.
          </h2>
          <p className="mt-6 leading-8 text-slate-600">
            Rubu Construction Company Limited offers general building
            works, architectural and structural planning, interior
            design, renovations, Bills of Quantities, and consultation
            for residential and commercial developments.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Based in Eldoret, Kenya, we welcome enquiries from clients
            across the country and diaspora. Every project begins with understanding
            the client's requirements and identifying an appropriate
            way forward.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-md bg-amber-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Discuss Your Project →
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
            alt="Contemporary house design"
            className="h-[420px] w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-widest text-amber-600">
              What Guides Us
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              The principles behind our work
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-4xl">{value.icon}</span>
                <h3 className="mt-5 text-xl font-bold">
                  {value.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-500 px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Planning a construction project?
            </h2>
            <p className="mt-3 text-slate-800">
              Let's discuss your ideas and requirements.
            </p>
          </div>
          <Link
            to="/contact"
            className="w-fit rounded-md bg-slate-950 px-7 py-3 font-semibold text-white hover:bg-slate-800"
          >
            Contact Our Team →
          </Link>
        </div>
      </section>
    </main>
  );
}