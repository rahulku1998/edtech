function Batches() {
  const batches = [
    {
      number: "01",
      title: "JEE 2026–27",
      subtitle: "IIT-JEE Preparation",
      classes: "Class 11 & 12",
      mode: "Offline + Guided Learning",
      start: "Admissions Open",
      description:
        "Build strong concepts, improve problem-solving skills and prepare systematically for JEE Main & Advanced.",
    },
    {
      number: "02",
      title: "NEET 2026–27",
      subtitle: "NEET Preparation",
      classes: "Class 11 & 12",
      mode: "Offline + Guided Learning",
      start: "Admissions Open",
      description:
        "Focused preparation with conceptual learning, regular practice and exam-oriented guidance for NEET.",
    },
   
  ];

  return (
    <section
      id="batches"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
            Upcoming Batches
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Start Your Preparation
            <span className="block text-blue-600">
              With The Right Batch
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Choose the batch that matches your academic goals and start
            preparing with structured guidance, regular practice and expert
            mentorship.
          </p>
        </div>

        {/* Batch Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {batches.map((batch) => (
            <div
              key={batch.number}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              {/* Top Number */}
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
                  {batch.number}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    batch.start === "Coming Soon"
                      ? "bg-slate-100 text-slate-500"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {batch.start}
                </span>
              </div>

              {/* Content */}
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {batch.subtitle}
                </p>

                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
                  {batch.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {batch.description}
                </p>
              </div>

              {/* Details */}
              <div className="mt-7 space-y-3 border-t border-slate-100 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Eligibility
                  </span>

                  <span className="text-sm font-semibold text-slate-800">
                    {batch.classes}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Learning Mode
                  </span>

                  <span className="text-sm font-semibold text-slate-800">
                    {batch.mode}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#demo"
                className="mt-7 flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Enquire About Batch
              </a>

              {/* Hover Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-70" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-center sm:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            Need Help Choosing?
          </p>

          <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Not sure which batch is right for you?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Talk to our academic team and understand the right preparation
            path based on your class, target exam and current preparation.
          </p>

          <a
            href="#demo"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-blue-600 hover:text-white"
          >
            Book Free Counselling
          </a>
        </div>
      </div>
    </section>
  );
}

export default Batches;