function Results() {
  const classroomImages = [
    {
      src: "/student/s1.jpg",
      title: "Learning in Action",
      description:
        "Students engaged in focused classroom learning.",
    },
    {
      src: "/student/s2.jpg",
      title: "Concept-Based Learning",
      description:
        "An interactive environment focused on understanding concepts.",
    },
    {
      src: "/student/s3.jpg",
      title: "Focused Classroom",
      description:
        "Creating a disciplined and engaging learning environment.",
    },
    {
      src: "/student/s4.jpg",
      title: "Mentorship & Guidance",
      description:
        "Providing guidance and mentorship to help students achieve their goals.",
    },
    {
      src: "/student/s5.jpg",
      title: "Collaborative Learning",
      description:
        "Encouraging collaboration and discussion among students.",
    },
    {
      src: "/student/s6.jpg",
      title: "Problem-Solving Sessions",
      description:
        "Students actively participating in problem-solving exercises.",
    },
  ];

  const highlights = [
    {
      number: "7+",
      title: "Years of Teaching Experience",
      description:
        "Extensive teaching and mentoring experience in JEE-focused competitive exam preparation.",
    },
    {
      number: "JEE",
      title: "Competitive Exam Focus",
      description:
        "Focused experience in helping students build concepts, problem-solving skills and exam readiness.",
    },
    {
      number: "NEET",
      title: "Established Coaching Institutions",
      description:
        "Teaching experience gained through academic environments including Motion and Sri Chaitanya.",
    },
    {
      number: "DROPPERS",
      title: "Student-First Approach",
      description:
        "BUGGA JEE is being built around personalised guidance, strong fundamentals and consistent practice.",
    },
  ];

  return (
    <section
      id="results"
      className="overflow-hidden bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =========================
            HEADER
        ========================== */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Experience & Journey
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            A New Institute.
            <span className="block text-blue-600">
              Experienced Guidance.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            BUGGA JEE is beginning its own journey, but the experience
            behind the classroom comes from years of teaching and
            mentoring JEE aspirants.
          </p>
        </div>

        {/* =========================
            MAIN EXPERIENCE BANNER
        ========================== */}

        <div className="relative mt-14 overflow-hidden rounded-[2rem] bg-slate-950">

          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />

          <div className="relative grid items-center lg:grid-cols-[1.15fr_0.85fr]">

            {/* CONTENT */}

            <div className="p-8 sm:p-10 lg:p-14">

              <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                Faculty Experience
              </span>

              <h3 className="mt-6 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Years of classroom experience,
                <span className="block text-blue-400">
                  now under one roof.
                </span>
              </h3>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                The faculty behind BUGGA JEE brings 7+ years of
                teaching and mentoring experience in JEE preparation,
                including experience at established coaching
                institutions such as Motion and Sri Chaitanya.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">
                  7+ Years Experience
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">
                  JEE Preparation
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">
                  Motion
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">
                  Sri Chaitanya
                </span>

              </div>
            </div>

            {/* EXPERIENCE HIGHLIGHT */}

            <div className="p-8 sm:p-10 lg:p-14">

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Teaching Experience
                </p>

                <p className="mt-4 text-7xl font-black tracking-tight text-white sm:text-8xl">
                  7+
                </p>

                <p className="mt-3 text-xl font-bold text-white">
                  Years of Teaching
                </p>

                <div className="mt-6 h-px bg-white/10" />

                <p className="mt-6 text-sm leading-6 text-slate-400">
                  Experience teaching and mentoring students for
                  competitive examinations with a strong focus on
                  JEE preparation.
                </p>

              </div>
            </div>

          </div>
        </div>

        {/* =========================
            IMPORTANT NOTE
        ========================== */}

        <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-5">

          <div className="flex gap-4">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white font-bold text-amber-600 shadow-sm">
              i
            </div>

            <div>

              <p className="text-sm font-bold text-slate-900">
                Building Our Own Track Record
              </p>

              <p className="mt-1 text-xs leading-6 text-slate-600 sm:text-sm">
                BUGGA JEE is a new institute and is currently building
                its own student success record. The achievements shown
                on this page focus on faculty experience rather than
                claiming results produced by BUGGA JEE.
              </p>

            </div>
          </div>
        </div>

        {/* =========================
            EXPERIENCE CARDS
        ========================== */}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item) => (

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

        {/* =========================
            VIRTUAL CLASSROOM VIDEO
        ========================== */}

        <div className="mt-20">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Virtual Classroom
            </span>

            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Experience the
              <span className="text-blue-600">
                {" "}BUGGA Classroom
              </span>
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Get a glimpse of our teaching environment and
              interactive classroom experience.
            </p>

          </div>

          {/* VIDEO */}

          <div className="group relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-2xl">

            <div className="relative aspect-video w-full overflow-hidden">

              <video
                src="/student/v1.MP4"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                className="h-full w-full object-cover"
              />

              {/* VIDEO BADGE */}

              <div className="pointer-events-none absolute left-5 top-5 sm:left-7 sm:top-7">

                <span className="rounded-full border border-white/20 bg-slate-950/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md">
                  BUGGA JEE • Virtual Classroom
                </span>

              </div>

            </div>

            <div className="border-t border-white/10 bg-slate-950 px-6 py-5 sm:px-8">

              <h4 className="text-lg font-extrabold text-white sm:text-xl">
                Virtual Classroom Experience
              </h4>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                Experience our virtual classroom sessions and
                interactive learning.
              </p>

            </div>

          </div>
        </div>

        {/* =========================
            CLASSROOM PHOTOS
        ========================== */}

        <div className="mt-20">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              The BUGGA Classroom
            </span>

            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Learning Happens
              <span className="text-blue-600">
                {" "}Inside the Classroom
              </span>
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              A focused and engaging environment designed for
              conceptual learning, interaction and consistent practice.
            </p>

          </div>

          {/* 6 PHOTOS */}

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {classroomImages.map((item, index) => (

              <div
                key={item.title}
                className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  index === 1 ? "lg:translate-y-6" : ""
                }`}
              >

                <div className="relative h-80 overflow-hidden bg-slate-100">

                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* IMAGE OVERLAY */}

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 pt-20">

                    <p className="text-lg font-extrabold text-white">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-200">
                      {item.description}
                    </p>

                  </div>

                </div>
              </div>

            ))}

          </div>
        </div>

        {/* =========================
            MOTION + SRI CHAITANYA
        ========================== */}

        <div className="mt-20 grid gap-6 lg:grid-cols-2">

          {/* MOTION */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Previous Teaching Experience
            </p>

            <h3 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Motion
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Teaching and mentoring experience gained in a
              competitive-exam focused academic environment,
              working with students preparing for JEE.
            </p>

            <div className="mt-6 flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-blue-600" />

              <span className="text-sm font-bold text-slate-800">
                JEE Teaching Experience
              </span>

            </div>

          </div>

          {/* SRI CHAITANYA */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Previous Teaching Experience
            </p>

            <h3 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Sri Chaitanya
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Experience working in an established academic
              environment with a focus on structured preparation,
              conceptual learning and competitive examinations.
            </p>

            <div className="mt-6 flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-blue-600" />

              <span className="text-sm font-bold text-slate-800">
                Competitive Exam Teaching
              </span>

            </div>

          </div>

        </div>

        {/* =========================
            FINAL MESSAGE
        ========================== */}

        <div className="mt-20 text-center">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            The Beginning
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            We are not showing old results.

            <span className="block text-blue-600">
              We are building new ones.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Every institution has a beginning. BUGGA JEE is starting
            with experienced teaching, committed mentorship and a
            classroom focused on helping students achieve their goals.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Results;