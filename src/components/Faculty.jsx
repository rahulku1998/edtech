function Faculty() {
  const faculty = [
    {
      name: "Bipin Sir",
      role: "Head & Lead Faculty",
      subject: "JEE / NEET / Competitive Preparation",
      photo: "/bipin.jpg",
      featured: true,
    },

    // Yaha future teachers add karna
    // {
    //   name: "Teacher Name",
    //   role: "Faculty",
    //   subject: "Mathematics",
    //   photo: "/maths-teacher.jpg",
    //   featured: false,
    // },

    // Photo nahi hai to photo: "" kar dena
    // {
    //   name: "Teacher Name",
    //   role: "Faculty",
    //   subject: "Physics",
    //   photo: "",
    //   featured: false,
    // },
  ];

  const initials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <section
      id="faculty"
      className="bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
            Our Faculty
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Learn From
            <span className="block text-blue-600">
              Experienced Guidance
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Meet the educators who bring focused guidance, conceptual
            clarity and a student-first approach to every classroom.
          </p>
        </div>

        {/* Faculty */}
        <div className="mt-14">

          {faculty
            .filter((teacher) => teacher.featured)
            .map((teacher) => (
              <div
                key={teacher.name}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className="grid items-center lg:grid-cols-2">

                  {/* Photo */}
                  <div className="relative min-h-[420px] overflow-hidden bg-slate-100 sm:min-h-[500px]">
                    {teacher.photo ? (
                      <img
                        src={teacher.photo}
                        alt={teacher.name}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                    ) : (
                      <div className="flex h-full min-h-[420px] items-center justify-center">
                        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-slate-900 text-4xl font-bold text-white">
                          {initials(teacher.name)}
                        </div>
                      </div>
                    )}

                    {/* Photo Label */}
                    <div className="absolute bottom-5 left-5">
                      <span className="rounded-full border border-white/20 bg-slate-950/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                        Head Faculty
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 sm:p-10 lg:p-14">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                      Head & Lead Faculty
                    </p>

                    <h3 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                      {teacher.name}
                    </h3>

                    <p className="mt-4 text-lg font-semibold text-slate-700">
                      {teacher.subject}
                    </p>

                    <div className="mt-7 h-px bg-slate-200" />

                    <p className="mt-7 text-sm leading-7 text-slate-600">
                      At BUGGA Academy, the focus is on building strong
                      concepts, developing problem-solving ability and
                      providing students with the right academic direction.
                    </p>

                    {/* Highlights */}
                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Focus
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-800">
                          Concept Clarity
                        </p>
                      </div>

                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Approach
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-800">
                          Personalised Guidance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Other Faculty */}
          {faculty.filter((teacher) => !teacher.featured).length > 0 && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {faculty
                .filter((teacher) => !teacher.featured)
                .map((teacher) => (
                  <div
                    key={teacher.name}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Teacher Photo */}
                    <div className="relative h-72 overflow-hidden bg-slate-100">
                      {teacher.photo ? (
                        <img
                          src={teacher.photo}
                          alt={teacher.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-900 text-3xl font-bold text-white">
                            {initials(teacher.name)}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                        {teacher.role}
                      </p>

                      <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                        {teacher.name}
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        {teacher.subject}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-slate-500">
            More faculty profiles will be added as the academy grows.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Faculty;