import { Link } from "react-router-dom";

const projects = [
  {
    title: "Modern Residential Design",
    category: "Residential",
    description:
      "A contemporary house design concept focused on practical spaces, modern architecture, and attractive finishes.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Contemporary Family Home",
    category: "Residential",
    description:
      "A modern home concept combining comfortable living areas with clean architectural lines.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Building Planning & Design",
    category: "Planning",
    description:
      "Planning and design concepts that help clients visualise their building ideas before construction.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function Projects() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-amber-400">
            Our Projects
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Every great building begins with an idea.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore residential design inspiration and building
            concepts that reflect the possibilities of thoughtful
            planning and construction.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12">
          <p className="font-semibold uppercase tracking-widest text-amber-600">
            Design Gallery
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Ideas for your next project
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Browse these visual references and contact us to discuss
            your own building requirements.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-800">
                  {project.category}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {project.description}
                </p>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex font-semibold text-amber-700 hover:text-amber-900"
                >
                  Discuss a Similar Project →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-lg bg-amber-50 p-5 text-sm leading-6 text-slate-700">
          Note: These images are illustrative design references, not
          verified Rubu Construction projects. Replace them with the
          company's actual work once approved by the owner.
        </p>
      </section>

      <section className="bg-amber-500 px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Ready to discuss your building plans?
            </h2>
            <p className="mt-3 text-slate-800">
              Tell us about your project, wherever you are in Kenya.
            </p>
          </div>

          <Link
            to="/contact"
            className="w-fit rounded-md bg-slate-950 px-7 py-3 font-bold text-white hover:bg-slate-800"
          >
            Contact Us →
          </Link>
        </div>
      </section>
    </main>
  );
}