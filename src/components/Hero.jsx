
import { Link } from "react-router-dom";

function Hero() {
  const programs = [
    "IIT-JEE Main & Advanced",
    "NEET-UG",
    "Foundation",
    "Doubt Solving",
    "Regular Tests",
  ];

  return (
    <main className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-slate-50">
        {/* Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-indigo-100 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl" />
        </div>

        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">

          {/* ================= LEFT SIDE ================= */}
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
              IIT-JEE • NEET • FOUNDATION
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Prepare Today.
              <br />

              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Achieve Your Dream
                <br className="hidden sm:block" />
                Tomorrow.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              <span className="font-bold text-slate-900">
                BUGGA – Bihari&apos;s Ultimate Growth & Guidance Academy
              </span>{" "}
              is a focused coaching institute for students preparing for{" "}
              <span className="font-semibold text-slate-900">
                IIT-JEE, NEET and Foundation programs.
              </span>
            </p>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Learn from experienced educators, build strong concepts,
              practice with purpose, and receive the guidance you need to
              move confidently towards your goals.
            </p>

            {/* ================= FOUNDER CARD ================= */}
            

            {/* Programs */}
            <div className="mt-7 flex flex-wrap gap-2">
              {programs.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600"
                >
                  ✓ {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/courses"
                className="rounded-xl bg-blue-600 px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                Explore Courses →
              </Link>

              <Link
                to="/demo"
                className="rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-center text-sm font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600"
              >
                Book Free Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8 border-t border-slate-200 pt-7">
              <div>
                <p className="text-2xl font-black text-slate-900">
                  JEE
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Main & Advanced
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-slate-900">
                  NEET
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Medical Entrance
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-slate-900">
                  1:1
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Personal Guidance
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          
{/* ================= RIGHT SIDE ================= */}
<div className="relative">

  {/* Main Founder Card */}
  <div className="relative mx-auto max-w-lg overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 p-2 shadow-2xl shadow-blue-900/30">

    <div className="relative min-h-[620px] overflow-hidden rounded-[2rem] bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-950">

      {/* Decorative Background */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[45px] border-white/5" />

      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full border-[55px] border-white/5" />

      <div className="absolute right-10 top-20 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl" />

      {/* Small Label */}
      <div className="absolute left-7 top-7 z-30">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-100">
          BUGGA Academy
        </p>

        <div className="mt-3 h-1 w-10 rounded-full bg-white/70" />
      </div>

      {/* ================= FOUNDER PHOTO ================= */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">

        <img
          src="/bipin.jpg"
          alt="Bipin Bihari - Founder & Lead Mentor"
          className="h-[570px] w-auto max-w-none object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]"
        />

      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-64 bg-gradient-to-t from-indigo-950 via-indigo-950/80 to-transparent" />

      {/* ================= FOUNDER CONTENT ================= */}
      <div className="absolute bottom-0 left-0 right-0 z-30 p-7 sm:p-9">

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
          Founder & Lead Mentor
        </p>

        <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
          Bipin Bihari
        </h2>

        <p className="mt-2 text-sm font-medium text-blue-100">
          B.Tech • IIT (BHU) Varanasi
        </p>

        <p className="mt-1 text-xs text-blue-200">
          Ex-Faculty at <span className="font-bold text-red-500">Motion</span> & <span className="font-bold text-red-500">Sri Chaitanya</span>
        </p>

        {/* Bottom Line */}
        <div className="mt-5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />

          <p className="text-xs font-medium text-blue-100">
            Guiding students towards academic excellence
          </p>
        </div>

      </div>
    </div>
  </div>

</div>


        </div>
      </section>
    </main>
  );

}

export default Hero;

