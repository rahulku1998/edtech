
import { useState } from "react";
import courses from "../data/courses";

function Courses() {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    className: "",
    course: "",
    message: "",
  });

  const openCourseForm = (courseName = "") => {
    setFormData((prev) => ({
      ...prev,
      course: courseName,
    }));

    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919358338687";

    const message = `
Hello BUGGA JEE 👋

I want to enquire about a course.

👤 Student Name: ${formData.name}
📱 Phone Number: ${formData.phone}
📚 Current Class: ${formData.className}
🎯 Interested Course: ${formData.course}

💬 Message:
${formData.message || "I would like to know more about this course."}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    setShowForm(false);

    setFormData({
      name: "",
      phone: "",
      className: "",
      course: "",
      message: "",
    });
  };

  return (
    <>
      {/* =====================================================
          COURSES SECTION
      ====================================================== */}

      <section id="courses" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* HEADER */}

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
              Expert guidance, structured preparation and focused
              learning designed to help students move closer to
              their goals.
            </p>

          </div>


          {/* COURSE CARDS */}

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


                {/* Explore */}

                <button
                  type="button"
                  onClick={() => openCourseForm(course.title)}
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

                </button>


                {/* Decoration */}

                <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-blue-50 opacity-0 transition duration-500 group-hover:opacity-100" />

              </div>

            ))}

          </div>


          {/* BOTTOM CTA */}

          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-slate-900 px-7 py-7 sm:flex-row sm:px-10">

            <div>

              <h3 className="text-xl font-bold text-white">
                Not sure which course is right for you?
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Talk to our academic team and get the right guidance.
              </p>

            </div>

            <button
              type="button"
              onClick={() => openCourseForm("")}
              className="shrink-0 rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-blue-50"
            >
              Book Free Counselling
            </button>

          </div>

        </div>
      </section>


      {/* =====================================================
          PREMIUM COURSE ENQUIRY MODAL
      ====================================================== */}

      {showForm && (

        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-md sm:p-5"
          onClick={() => setShowForm(false)}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[95vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl sm:rounded-[2.5rem]"
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl font-medium text-slate-700 shadow-lg backdrop-blur transition hover:bg-white hover:text-slate-900 sm:right-6 sm:top-6"
            >
              ×
            </button>


            <div className="grid max-h-[95vh] overflow-y-auto lg:grid-cols-[0.9fr_1.1fr]">


              {/* =================================================
                  LEFT SIDE - FACULTY / BRAND
              ================================================== */}

              <div className="relative min-h-[360px] overflow-hidden bg-slate-950 lg:min-h-[650px]">

                {/* IMAGE */}

                <img
                  src="/bipin.jpg"
                  alt="Bipin Sir - BUGGA JEE"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />


                {/* DARK GRADIENT */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />


                {/* BLUE GLOW */}

                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />


                {/* CONTENT */}

                <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-between p-7 sm:p-10 lg:min-h-[650px] lg:p-12">

                  {/* TOP */}

                  <div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">

                      <span className="h-2 w-2 rounded-full bg-blue-400" />

                      BUGGA JEE

                    </div>

                  </div>


                  {/* BOTTOM */}

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                      Experienced Faculty
                    </p>

                    <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                      Start Your
                      <span className="block text-blue-400">
                        Preparation Journey.
                      </span>
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
                      Get personalised guidance for your academic
                      journey from experienced faculty at BUGGA JEE.
                    </p>


                    {/* EXPERIENCE */}

                    <div className="mt-7 flex items-center gap-4">

                      <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-md">

                        <p className="text-2xl font-black text-white">
                          7+
                        </p>

                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Years Experience
                        </p>

                      </div>


                      <div className="h-10 w-px bg-white/20" />


                      <div>

                        <p className="text-sm font-bold text-white">
                          JEE • NEET • BOARD
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          Focused Academic Guidance
                        </p>

                      </div>

                    </div>


                    {/* COURSE BADGES */}

                    <div className="mt-6 flex flex-wrap gap-2">

                      <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-200">
                        IIT-JEE
                      </span>

                      <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-200">
                        NEET
                      </span>

                      <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-200">
                        DROPPER
                      </span>

                      <span className="rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-200">
                        BOARD
                      </span>

                    </div>

                  </div>

                </div>

              </div>


              {/* =================================================
                  RIGHT SIDE - FORM
              ================================================== */}

              <div className="bg-white p-6 sm:p-8 lg:p-12">

                {/* FORM HEADER */}

                <div className="max-w-lg">

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                    Course Enquiry
                  </span>

                  <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                    Tell us about the student
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Fill in the details below and our team will
                    connect with you on WhatsApp.
                  </p>


                  {/* SELECTED COURSE */}

                  {formData.course && (

                    <div className="mt-5 flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                        ✓
                      </div>

                      <div>

                        <p className="text-[10px] font-bold uppercase tracking-wider text-blue-500">
                          Selected Course
                        </p>

                        <p className="mt-0.5 text-sm font-extrabold text-slate-900">
                          {formData.course}
                        </p>

                      </div>

                    </div>

                  )}

                </div>


                {/* FORM */}

                <form
                  onSubmit={handleSubmit}
                  className="mt-7 space-y-5"
                >

                  {/* NAME */}

                  <div>

                    <label className="mb-2 block text-sm font-bold text-slate-800">
                      Student Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter student name"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                  </div>


                  {/* PHONE + CLASS */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>

                      <label className="mb-2 block text-sm font-bold text-slate-800">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10 digit number"
                        pattern="[0-9]{10}"
                        maxLength="10"
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />

                    </div>


                    <div>

                      <label className="mb-2 block text-sm font-bold text-slate-800">
                        Current Class
                      </label>

                      <select
                        name="className"
                        value={formData.className}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      >

                        <option value="">
                          Select Class
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

                      </select>

                    </div>

                  </div>


                  {/* COURSE */}

                  <div>

                    <label className="mb-2 block text-sm font-bold text-slate-800">
                      Interested Course
                    </label>

                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    >

                      <option value="">
                        Select Course
                      </option>

                      <option value="IIT-JEE">
                        IIT-JEE
                      </option>

                      <option value="NEET">
                        NEET
                      </option>

                      <option value="DROPPER">
                        DROPPER
                      </option>

                      <option value="BOARD">
                        BOARD
                      </option>

                    </select>

                  </div>


                  {/* MESSAGE */}

                  <div>

                    <label className="mb-2 block text-sm font-bold text-slate-800">
                      Message{" "}
                      <span className="font-normal text-slate-400">
                        (Optional)
                      </span>
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Any specific query..."
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                  </div>


                  {/* WHATSAPP */}

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-green-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-xl"
                  >

                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.52 3.48A11.77 11.77 0 0 0 12.06 0C5.55 0 .25 5.3.25 11.81c0 2.08.54 4.11 1.57 5.9L.17 24l6.44-1.69a11.77 11.77 0 0 0 5.45 1.35h.01c6.51 0 11.81-5.3 11.81-11.81 0-3.16-1.23-6.13-3.36-8.37ZM12.07 21.7h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.82 1 1.02-3.72-.23-.38a9.84 9.84 0 1 1 8.42 4.69Zm5.41-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                    </svg>

                    Send Enquiry on WhatsApp

                  </button>


                  {/* TRUST */}

                  <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-5">

                    <div className="text-center">

                      <div className="text-sm font-black text-blue-600">
                        ✓
                      </div>

                      <p className="mt-1 text-[10px] font-semibold text-slate-500">
                        Experienced Faculty
                      </p>

                    </div>

                    <div className="text-center">

                      <div className="text-sm font-black text-blue-600">
                        ✓
                      </div>

                      <p className="mt-1 text-[10px] font-semibold text-slate-500">
                        Personalised Guidance
                      </p>

                    </div>

                    <div className="text-center">

                      <div className="text-sm font-black text-blue-600">
                        ✓
                      </div>

                      <p className="mt-1 text-[10px] font-semibold text-slate-500">
                        Focused Preparation
                      </p>

                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default Courses;

