import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {name:"Home", href: "/"},
  { name: "Courses", href: "/courses" },
  {name:"Admisssion", href: "/admission"},
  { name: "Why Us", href: "/why-us" },
  { name: "Results", href: "/results" },
  { name: "Faculty", href: "/faculty" },
  {name:"Contact", href: "/contact"},
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
  <img
    src="/logo.jpg"
    alt="BUGGA Logo"
    className="h-12 w-auto object-contain"
  />

  <div className="leading-tight">
    <h1 className="text-lg font-extrabold tracking-tight text-slate-900">
      <span className="text-blue-600">BUGGA</span>
    </h1>

    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
      Bihari's Ultimate Growth
      <br />
      And Guidance Academy
    </p>
  </div>
</Link>
        {/* Desktop Navigation */}
       
       <div className="hidden items-center gap-7 lg:flex">
  {navLinks.map((link) => (
    <Link
      key={link.name}
      to={link.href}
      className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
    >
      {link.name}
    </Link>
  ))}
</div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
  to="/demo"
  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
>
  Book Free Demo
</Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
  <Link
    key={link.name}
    to={link.href}
    onClick={() => setIsOpen(false)}
    className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
  >
    {link.name}
  </Link>
))}

            <Link
  to="/demo"
  onClick={() => setIsOpen(false)}
  className="mt-3 rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white"
>
  Book Free Demo
</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;