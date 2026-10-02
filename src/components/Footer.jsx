import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-extrabold tracking-tight">
                BUGGA
                <span className="text-blue-500"> JEE</span>
              </h2>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Building strong concepts, confident learners and future
              achievers through quality education, expert guidance and
              personalised mentorship.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-800 px-4 py-2 text-xs font-medium text-slate-400">
                IIT-JEE
              </span>

              <span className="rounded-full border border-slate-800 px-4 py-2 text-xs font-medium text-slate-400">
                NEET
              </span>

              <span className="rounded-full border border-slate-800 px-4 py-2 text-xs font-medium text-slate-400">
                Classes 9–12
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                to="/"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/courses"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Courses
              </Link>

              <Link
                to="/#why-us"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Why Choose Us
              </Link>

              <Link
                to="/results"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Results
              </Link>

              <Link
                to="/faculty"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Faculty
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4">
              <p className="text-sm leading-6 text-slate-400">
                Have questions about courses, batches or admissions?
                Talk to our academic team.
              </p>

              <Link
                to="/demo"
                className="inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
              >
                Book Free Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-slate-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-slate-500">
            <span className="text-yellow-400">
              Designed & Developed by{" "}
            </span>

            <a
              href="https://www.codewithrahulkumawat.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-300 transition hover:text-blue-400"
            >
              <span className="text-pink-500 underline">
                Rahul Kumawat
              </span>
            </a>
          </p>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} BUGGA JEE. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;