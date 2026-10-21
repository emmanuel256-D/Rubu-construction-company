import { useState } from "react";

const phone = "254724899484";
const email = "rubuconstructioncompany@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    service: "General Building Works",
    location: "",
    message: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = `
Hello Rubu Construction Company Limited,

My name is ${form.name}.
My contact: ${form.contact}
Project location: ${form.location}
Service required: ${form.service}

Project details:
${form.message}

I would like to discuss this project with you.
    `.trim();

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="bg-slate-950 px-6 py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-amber-400">
            Get In Touch
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold sm:text-6xl">
            Let's talk about your next project.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you are planning a new building, a renovation, or
            need building plans, get in touch to discuss your needs.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-5">
        <div className="space-y-7 lg:col-span-2">
          <div>
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Based in Eldoret, Kenya, and open to enquiries for
              projects across Kenya.
            </p>
          </div>

          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:shadow-md"
          >
            <span className="text-2xl">📱</span>
            <span>
              <span className="block font-bold">Call or WhatsApp</span>
              <span className="mt-1 block text-slate-600">
                +254 724 899484
              </span>
              <span className="mt-2 block text-sm font-semibold text-amber-700">
                Start a conversation →
              </span>
            </span>
          </a>

          <a
            href={`mailto:${email}`}
            className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:shadow-md"
          >
            <span className="text-2xl">✉️</span>
            <span>
              <span className="block font-bold">Email Us</span>
              <span className="mt-1 break-all text-slate-600">
                {email}
              </span>
            </span>
          </a>

          <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5">
            <span className="text-2xl">📍</span>
            <span>
              <span className="block font-bold">Our Location</span>
              <span className="mt-1 text-slate-600">
                Eldoret, Kenya
              </span>
            </span>
          </div>

          <div className="rounded-xl bg-amber-100 p-5">
            <h3 className="font-bold">Serving clients across Kenya</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Share your project location and requirements so the
              team can discuss the appropriate next steps with you.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9 lg:col-span-3">
          <h2 className="text-2xl font-bold">Tell Us About Your Project</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Complete the form below to prepare an enquiry through WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block font-medium">
                Your Name *
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <div>
              <label htmlFor="contact" className="mb-2 block font-medium">
                Your Phone Number *
              </label>
              <input
                id="contact"
                name="contact"
                required
                value={form.contact}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <div>
              <label htmlFor="service" className="mb-2 block font-medium">
                Service Required *
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-amber-500"
              >
                <option>General Building Works</option>
                <option>Architectural Plans</option>
                <option>Structural Plans</option>
                <option>Bills of Quantities</option>
                <option>Interior Design</option>
                <option>Renovations</option>
                <option>Project Consultation</option>
                <option>Blueprint Printing</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="mb-2 block font-medium">
                Project Location *
              </label>
              <input
                id="location"
                name="location"
                required
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. Eldoret, Nairobi, Kisumu"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-medium">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project, requirements, or plans..."
                className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-amber-500 px-6 py-4 font-bold text-slate-950 transition hover:bg-amber-400"
            >
              Send Enquiry via WhatsApp →
            </button>

            <p className="text-sm leading-6 text-slate-500">
              This form opens WhatsApp with your enquiry prepared.
              It does not store or send information to a website database.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}