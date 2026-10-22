import { Link } from "react-router-dom";
import constructionImage from '../images/construct.jpg'
import Test from '../images/testing.jpg'
const services = [
  {
    number: "01",
    title: "General Building Works",
    description:
      "Construction services for residential and commercial building projects, guided by the project's scope and requirements.",
    image:
      constructionImage,
  },
  {
    number: "02",
    title: "Architectural & Structural Plans",
    description:
      "Architectural design and structural planning to help clients prepare for their proposed building projects.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Bills of Quantities",
    description:
      "Preparation of Bills of Quantities to help clients understand and plan the materials and costs associated with a project.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    title: "Interior Design",
    description:
      "Interior design solutions that consider the intended use, layout, appearance, and functionality of a space.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "05",
    title: "Renovations",
    description:
      "Building improvement and renovation work tailored to the condition of the property and the client's objectives.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "06",
    title: "Project Consultation",
    description:
      "Consultation for residential and commercial developments to help clients evaluate their plans and next steps.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "07",
    title: "Blueprint Printing",
    description:
      "Printing of building plans and blueprints for project documentation and reference.",
    image:
      Test,
  },
];

export default function Services() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-amber-400">
            What We Do
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Practical solutions for your next building project.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore our construction, planning, design, and
            building-related services for residential and commercial
            developments across Kenya.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-semibold uppercase tracking-widest text-amber-600">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              How we can help
            </h2>
          </div>
          <p className="max-w-lg leading-7 text-slate-600">
            Tell us what you are planning, and we can discuss the
            service that best matches your requirements.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded bg-amber-500 px-3 py-1 font-bold text-slate-950">
                  {service.number}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex font-semibold text-amber-700 hover:text-amber-900"
                >
                  Enquire about this service →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-slate-600">
              Contact us to discuss your project requirements.
            </p>
          </div>
          <Link
            to="/contact"
            className="w-fit rounded-md bg-amber-500 px-7 py-3 font-semibold text-slate-950 hover:bg-amber-400"
          >
            Request an Enquiry →
          </Link>
        </div>
      </section>
    </main>
  );
}