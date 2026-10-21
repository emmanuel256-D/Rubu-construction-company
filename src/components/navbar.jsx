import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `transition duration-200 hover:text-amber-400 ${
      isActive ? "font-bold text-amber-400" : "text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950 text-white shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500 text-xl font-black text-slate-950">
            R
          </span>

          <span>
            <span className="block text-lg font-extrabold tracking-wide">
              RUBU
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Construction Company
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={linkStyle}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <a
          href="https://wa.me/254724899484"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-md bg-amber-500 px-5 py-3 font-bold text-slate-950 transition hover:bg-amber-400 lg:inline-flex"
        >
          Get a Quote
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="rounded-md border border-white/20 p-2 text-2xl md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={linkStyle}
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="https://wa.me/254724899484"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-amber-500 px-5 py-3 text-center font-bold text-slate-950"
            >
              Get a Quote on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}