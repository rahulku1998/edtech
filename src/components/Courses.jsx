import courses from "../data/courses";

function Courses() {
  return (
    <section id="courses" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Our Courses
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Choose Your Path.
            <span className="block text-blue-600">
              Build Your Future.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Expert guidance, structured preparation and focused learning
            designed to help students move closer to their goals.
          </p>
        </div>

        {/* Course Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/60"
            >
              {/* Number + Icon */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-400">
                  {course.number}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M12 6.5V19M12 6.5C10.5 5.2 8.5 4.5 6.5 4.5H4v12h2.5c2 0 4 .7 6 2m0-12c1.5-1.3 3.5-2 5.5-2H20v12h-2.5c-2 0-4-.7-5.5 2"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {course.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-blue-600">
                  {course.subtitle}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {course.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#demo"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition group-hover:text-blue-600"
              >
                Explore Course

                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </a>

              {/* Decoration */}
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-blue-50 opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-slate-900 px-7 py-7 sm:flex-row sm:px-10">
          <div>
            <h3 className="text-xl font-bold text-white">
              Not sure which course is right for you?
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Talk to our academic team and get the right guidance.
            </p>
          </div>

          <a
            href="#demo"
            className="shrink-0 rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-blue-50"
          >
            Book Free Counselling
          </a>
        </div>

      </div>
    </section>
  );
}

export default Courses;