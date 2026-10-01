function Results() {
  const achievements = [
    {
      number: "1000+",
      title: "Students Mentored",
      description:
        "Students guided during previous teaching experience across competitive exam preparation.",
    },
    {
      number: "AIR 100",
      title: "Top Rankers",
      description:
        "Students mentored who went on to secure outstanding ranks in national-level examinations.",
    },
    {
      number: "JEE • NEET",
      title: "Competitive Exams",
      description:
        "Experience in guiding aspirants preparing for highly competitive entrance examinations.",
    },
    {
      number: "Years",
      title: "Teaching Experience",
      description:
        "Experience built through teaching, mentoring and helping students prepare for competitive exams.",
    },
  ];

  return (
    <section id="results" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Experience & Achievements
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Experience That
            <span className="block text-blue-600">
              Builds Confidence
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            While BUGGA Academy is starting its own journey, our faculty
            brings valuable teaching and mentoring experience from
            previous academic institutions.
          </p>

        </div>

        {/* Previous Experience Banner */}
        <div className="mt-12 rounded-3xl border border-blue-100 bg-blue-50/60 p-7 sm:p-10">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-3xl">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Faculty Experience
              </p>

              <h3 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Proven teaching experience from leading coaching environments
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Our faculty has previously taught and mentored students at
                established coaching platforms, including Motion Chaitanya,
                helping aspirants prepare for competitive examinations.
              </p>

            </div>

            <div className="shrink-0 rounded-2xl bg-white px-6 py-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Previous Teaching
              </p>

              <p className="mt-1 text-lg font-extrabold text-slate-900">
                Motion Chaitanya
              </p>
            </div>

          </div>

        </div>

        {/* Achievement Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {achievements.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
            >

              <p className="text-3xl font-black tracking-tight text-blue-600">
                {item.number}
              </p>

              <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-16" />

            </div>
          ))}

        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">

          <p className="text-sm font-medium text-slate-500">
            New academy. Experienced guidance.
          </p>

          <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
            Now building the next generation of achievers.
          </h3>

        </div>

      </div>
    </section>
  );
}

export default Results;