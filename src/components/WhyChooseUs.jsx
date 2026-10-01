function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "Expert Faculty",
      description:
        "Learn from experienced educators who focus on strong concepts, problem solving and exam-oriented preparation.",
    },
    {
      number: "02",
      title: "Personalised Guidance",
      description:
        "Get focused academic guidance based on your preparation level, strengths and areas that need improvement.",
    },
    {
      number: "03",
      title: "Regular Practice",
      description:
        "Consistent practice, assignments and revision help students build confidence and improve their performance.",
    },
    {
      number: "04",
      title: "Doubt Support",
      description:
        "Get your doubts resolved and understand difficult concepts with dedicated academic support.",
    },
    {
      number: "05",
      title: "Result Focused",
      description:
        "A structured preparation approach focused on conceptual clarity, regular assessment and continuous improvement.",
    },
    {
      number: "06",
      title: "Student First Approach",
      description:
        "We understand every student's learning journey and provide the right support to help them move towards their goals.",
    },
  ];

  return (
    <section
      id="why-us"
      className="bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            More Than Just
            <span className="block text-blue-600">
              Classroom Learning
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            The right guidance, consistent practice and a supportive
            learning environment can make a real difference in a student's
            preparation journey.
          </p>

        </div>

        {/* Features Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.number}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
            >

              {/* Top */}
              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z"
                    />
                  </svg>
                </div>

                <span className="text-4xl font-black text-slate-100 transition-colors duration-300 group-hover:text-blue-50">
                  {feature.number}
                </span>

              </div>

              {/* Content */}
              <div className="mt-7">

                <h3 className="text-xl font-extrabold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>

              </div>

              {/* Bottom Accent */}
              <div className="mt-6 h-1 w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-16" />

              {/* Background Decoration */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-slate-900 px-7 py-10 sm:px-10 lg:px-14">

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-2xl">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
                Our Promise
              </p>

              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Helping students learn with clarity,
                confidence and consistency.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                From concept building to exam preparation, we focus on
                creating a learning environment where students can
                continuously improve.
              </p>

            </div>

            <a
              href="#demo"
              className="shrink-0 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-blue-50"
            >
              Book Free Demo
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;