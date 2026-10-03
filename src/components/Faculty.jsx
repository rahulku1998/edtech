function Faculty() {
  const faculty = [
    {
      name: "Bipin Sir",
      role: "Head & Lead Faculty",
      subject: "JEE / NEET / Competitive Preparation",
      photo: "/bipin.jpg",
      featured: true,
    },
    
    {
      name: "Team BUGGA JEE",
      role: "JEE /NEET Faculty",
      subject: "PCMB / Competitive Preparation",
      photo: "/photo3.jpg",
      featured: false,
    },
    
    
    
  ];

  const initials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const featuredTeacher = faculty.find(
    (teacher) => teacher.featured
  );

  const otherFaculty = faculty.filter(
    (teacher) => !teacher.featured
  );

  return (
    <section
      id="faculty"
      className="bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =========================
            HEADER
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            Our Faculty
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Meet Our
            <span className="block text-blue-600">
              Expert Faculty
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Learn from dedicated educators focused on strong
            concepts, personal guidance and better academic
            outcomes.
          </p>

        </div>

        {/* =========================
            FEATURED FACULTY
        ========================== */}
        {featuredTeacher && (
          <div className="mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">

            <div className="grid items-stretch lg:grid-cols-2">

              {/* =====================
                  BIPIN PHOTO
              ====================== */}
              <div className="relative min-h-[430px] overflow-hidden bg-slate-100 sm:min-h-[520px] lg:min-h-[580px]">

                {featuredTeacher.photo ? (
                  <img
                    src={featuredTeacher.photo}
                    alt={featuredTeacher.name}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">

                    <div className="flex h-36 w-36 items-center justify-center rounded-full bg-slate-900 text-5xl font-bold text-white shadow-xl">
                      {initials(featuredTeacher.name)}
                    </div>

                  </div>
                )}

                {/* Photo Badge */}
                <div className="absolute bottom-6 left-6">

                  <span className="rounded-full border border-white/20 bg-slate-950/85 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md">
                    Head & Lead Faculty
                  </span>

                </div>

              </div>

              {/* =====================
                  FEATURED CONTENT
              ====================== */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  Head & Lead Faculty
                </p>

                <h3 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                  {featuredTeacher.name}
                </h3>

                <p className="mt-4 text-lg font-semibold text-slate-700">
                  {featuredTeacher.subject}
                </p>

                <div className="mt-7 h-px bg-slate-200" />

                <p className="mt-7 text-sm leading-7 text-slate-600 sm:text-base">
                  At BUGGA Academy, students are guided with a
                  strong focus on conceptual clarity,
                  problem-solving skills and disciplined academic
                  preparation.
                </p>

                {/* Highlights */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Focus
                    </p>

                    <p className="mt-2 text-sm font-bold text-slate-900">
                      Concept Clarity
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Approach
                    </p>

                    <p className="mt-2 text-sm font-bold text-slate-900">
                      Personalised Guidance
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Preparation
                    </p>

                    <p className="mt-2 text-sm font-bold text-slate-900">
                      Competitive Exams
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Students
                    </p>

                    <p className="mt-2 text-sm font-bold text-slate-900">
                      JEE • NEET • Foundation
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

        {/* =========================
            OTHER FACULTY
        ========================== */}
        <div className="mt-16">

          <div className="mb-8 flex items-end justify-between gap-4">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Team
              </p>

              <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Faculty Members
              </h3>

            </div>

            <div className="hidden h-px flex-1 bg-slate-200 sm:block" />

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {otherFaculty.map((teacher) => (
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
                    <div className="flex h-full items-center justify-center bg-slate-100">

                      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-900 text-3xl font-bold text-white shadow-xl">
                        {initials(teacher.name)}
                      </div>

                    </div>
                  )}

                  {/* Faculty Badge */}
                  <div className="absolute left-4 top-4">

                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-md backdrop-blur">
                      Faculty
                    </span>

                  </div>

                </div>

                {/* Faculty Content */}
                <div className="p-6">

                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
                    {teacher.role}
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                    {teacher.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {teacher.subject}
                  </p>

                  <div className="mt-5 h-px bg-slate-100" />

                  <p className="mt-4 text-xs leading-6 text-slate-500">
                    Focused teaching, conceptual understanding
                    and student-centric academic guidance.
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* =========================
            FACULTY CONTACT SECTION
        ========================== */}
        <div className="mt-20">

          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              Connect With Us
            </p>

            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Send Your Message
              <span className="block text-blue-600">
                To Our Faculty
              </span>
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Have a question about courses, admissions, batches
              or exam preparation? Send us your query and our
              faculty team will get back to you.
            </p>

          </div>

          {/* Main Contact Card */}
          <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">

            {/* Decorative Background */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-100/60 blur-3xl" />

            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-100/60 blur-3xl" />

            <div className="relative grid lg:grid-cols-[0.85fr_1.15fr]">

              {/* =====================
                  LEFT INFORMATION
              ====================== */}
              <div className="bg-slate-950 p-8 text-white sm:p-10 lg:p-12">

                <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-300">
                  BUGGA Academy
                </span>

                <h4 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">
                  Let’s Talk About
                  <span className="block text-blue-400">
                    Your Preparation
                  </span>
                </h4>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  Whether you are preparing for JEE, NEET, school
                  examinations or foundation courses, our faculty
                  team is here to guide you.
                </p>

                {/* Benefits */}
                <div className="mt-8 space-y-5">

                  {/* Benefit 1 */}
                  <div className="flex gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                      ✓
                    </div>

                    <div>
                      <p className="font-bold text-white">
                        Personalised Guidance
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        Discuss your academic goals with our
                        faculty.
                      </p>
                    </div>

                  </div>

                  {/* Benefit 2 */}
                  <div className="flex gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                      ✓
                    </div>

                    <div>
                      <p className="font-bold text-white">
                        Course & Batch Information
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        Get details about available courses and
                        batches.
                      </p>
                    </div>

                  </div>

                  {/* Benefit 3 */}
                  <div className="flex gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                      ✓
                    </div>

                    <div>
                      <p className="font-bold text-white">
                        Quick WhatsApp Response
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        Your enquiry will be sent directly to
                        our team.
                      </p>
                    </div>

                  </div>

                </div>

                {/* WhatsApp Number */}
                <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">

                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Talk To Our Team
                  </p>

                  <p className="mt-2 text-lg font-bold">
                    +91 8102044250
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Admissions • Courses • Faculty
                  </p>

                </div>

              </div>

              {/* =====================
                  RIGHT FORM
              ====================== */}
              <div className="p-8 sm:p-10 lg:p-12">

                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    const form = e.currentTarget;

                    const name = form.name.value;
                    const phone = form.phone.value;
                    const className = form.className.value;
                    const subject = form.subject.value;
                    const message = form.message.value;

                    const whatsappMessage = `
*BUGGA Academy - Faculty Enquiry*

*Student Name:* ${name}
*Phone:* ${phone}
*Class:* ${className}
*Subject / Course:* ${subject}

*Message:*
${message}

I would like to discuss my academic preparation with the BUGGA Academy faculty team.
                    `.trim();

                    const whatsappNumber = "918102044250";

                    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      whatsappMessage
                    )}`;

                    window.open(
                      whatsappURL,
                      "_blank"
                    );

                    form.reset();
                  }}
                  className="space-y-6"
                >

                  {/* Name + Phone */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Student Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Enter phone number"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                  </div>

                  {/* Class + Course */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Class
                      </label>

                      <select
                        name="className"
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      >

                        <option value="" disabled>
                          Select class
                        </option>

                        <option value="Class 6">
                          Class 6
                        </option>

                        <option value="Class 7">
                          Class 7
                        </option>

                        <option value="Class 8">
                          Class 8
                        </option>

                        <option value="Class 9">
                          Class 9
                        </option>

                        <option value="Class 10">
                          Class 10
                        </option>

                        <option value="Class 11">
                          Class 11
                        </option>

                        <option value="Class 12">
                          Class 12
                        </option>

                        <option value="Dropper">
                          Dropper
                        </option>

                        <option value="Other">
                          Other
                        </option>

                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Interested In
                      </label>

                      <select
                        name="subject"
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      >

                        <option value="" disabled>
                          Select course
                        </option>

                        <option value="JEE Preparation">
                          JEE Preparation
                        </option>

                        <option value="NEET Preparation">
                          NEET Preparation
                        </option>

                        <option value="Foundation">
                          Foundation
                        </option>

                        <option value="School Preparation">
                          School Preparation
                        </option>

                        <option value="Mathematics">
                          Mathematics
                        </option>

                        <option value="Physics">
                          Physics
                        </option>

                        <option value="Chemistry">
                          Chemistry
                        </option>

                        <option value="Biology">
                          Biology
                        </option>

                        <option value="Other">
                          Other
                        </option>

                      </select>
                    </div>

                  </div>

                  {/* Message */}
                  <div>

                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Your Message
                    </label>

                    <textarea
                      name="message"
                      required
                      rows="5"
                      placeholder="Tell us what you would like to know..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 active:scale-[0.99]"
                  >

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-lg">
                      →
                    </span>

                    Send Message on WhatsApp

                  </button>

                  <p className="text-center text-xs leading-5 text-slate-400">
                    Your enquiry will open directly in WhatsApp
                    with all the details filled in.
                  </p>

                </form>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Message */}
        <div className="mt-14 text-center">

          <p className="text-sm font-medium text-slate-500">
            A dedicated team working together for every
            student's academic growth.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Faculty;