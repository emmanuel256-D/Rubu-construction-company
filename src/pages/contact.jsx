import { useState } from "react";
import Phonecall from '../images/phonecall.jpg'
import What from '../images/wAlogo.jpg'
import Email from '../images/gmail.png'

const phone = "+254724899484";
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
  setForm({
    ...form,
    [event.target.name]: event.target.value,
  });
}
  function handleSubmit(event) {
  event.preventDefault();

  const enquiry = {
    id: crypto.randomUUID(),
    ...form,
    type: "enquiry",
    status: "New",
    createdAt: Date.now(),
  };

  // Remove enquiries older than 5 days
  const savedEnquiries = JSON.parse(
    localStorage.getItem("rubuEnquiries") || "[]"
  );

  const fiveDays = 5 * 24 * 60 * 60 * 1000;

  const activeEnquiries = savedEnquiries.filter(
    (item) => Date.now() - item.createdAt < fiveDays
  );

  // Save this enquiry
  localStorage.setItem(
    "rubuEnquiries",
    JSON.stringify([...activeEnquiries, enquiry])
  );

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

  setForm({
    name: "",
    contact: "",
    service: "General Building Works",
    location: "",
    message: "",
  });
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
            className="group flex items-start gap-4 rounded-[20px] border border-slate-200 bg-white p-5 transition-all duration-300  hover:-translate-y-1 hover:rounded-[28px] hover:shadow-xl hover:border-green-300 active:scale-[0.97]"
          >
            <span className="flex-shrink-0 w-14 h-14 rounded-full bg-green-100 p-2.5 flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-110 hover:rotate-3  hover:shadow-md active:scale-90">
              <img src={What} alt="WhatsApp" className="w-full h-full object-contain rounded-full" /></span>
              
    <span className="block font-extrabold">WhatsApp</span>
    
          </a>

          <a
            href={`mailto:${email}`}
            className="group flex items-start gap-4 rounded-[20px] border border-slate-200 bg-white p-5 transition-all duration-300  hover:-translate-y-1 hover:rounded-[28px] hover:shadow-xl hover:border-green-300 active:scale-[0.97]"
          >
            <span className="flex-shrink-0 w-14 h-14 rounded-full bg-green-100 p-2.5 flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-110 hover:rotate-3  hover:shadow-md active:scale-90">
              <img src={Email} alt="Email" className="w-full h-full object-contain rounded-full" /></span>
              
    <span className="block font-bold">Reach  Via Email</span>
  
          </a>
          <a
  href={`tel:${phone}`}
  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-orange-300 hover:rounded-[20px] active:scale-[0.98] cursor-pointer group"
>
  <span className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-100 text-orange-600 p-2.5 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-active:scale-90">
    📞
  </span>
  <span>
    <span className="block font-bold">Call Us</span>
    <span className="mt-1 break-all text-slate-600">
      {phone}
    </span>
  </span>
</a>
          

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
              Send Enquiry  →
            </button>

            
          </form> 
        </div>
      </section>
    </main>
  );
}