import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500 text-xl font-black text-slate-950">
              R
            </span>
            <span>
              <span className="block text-lg font-extrabold">RUBU</span>
              <span className="block text-xs text-slate-400">
                Construction Company Limited
              </span>
            </span>
          </Link>

          <p className="mt-5 max-w-xs leading-7 text-slate-400">
            Construction, planning, design, and building-related
            services for residential and commercial projects across Kenya.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-amber-400">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li><Link className="hover:text-amber-400" to="/">Home</Link></li>
            <li><Link className="hover:text-amber-400" to="/about">About Us</Link></li>
            <li><Link className="hover:text-amber-400" to="/services">Our Services</Link></li>
            <li><Link className="hover:text-amber-400" to="/projects">Our Projects</Link></li>
            <li><Link className="hover:text-amber-400" to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-amber-400">Our Services</h3>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li>General Building Works</li>
            <li>Architectural & Structural Plans</li>
            <li>Bills of Quantities</li>
            <li>Interior Design & Renovations</li>
            <li>Project Consultation</li>
            <li>Blueprint Printing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-amber-400">Contact Us</h3>
          <ul className="mt-5 space-y-4 text-slate-300">
            <li>
              <a href="tel:+254724899484" className="hover:text-amber-400">
                +254 724 899484
              </a>
            </li>
            <li>
              <a
                href="mailto:rubuconstructioncompany@gmail.com"
                className="break-all hover:text-amber-400"
              >
                rubuconstructioncompany@gmail.com
              </a>
            </li>
            <li>Eldoret, Kenya</li>
            <li className="text-sm text-slate-400">
              Serving clients across Kenya and Diaspora.
            </li>
          </ul>

          <a
            href="https://wa.me/254724899484"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-md bg-amber-500 px-5 py-3 font-bold text-slate-950 hover:bg-amber-400"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Rubu Construction Company Limited.
          </p>
          <p>Building ideas into reality.</p>
        </div>
      </div>
    </footer>
  );
}