
import { useState } from "react";
import studentGirl from "../assets/girls.webp";
function Admission() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    className: "",
    gender: "",
    dob: "",
    city: "",
    postalCode: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const message = `
*BUGGA Academy - Admission Enquiry*

*Student Name:* ${formData.name}
*Email:* ${formData.email || "Not provided"}
*Phone:* ${formData.phone}
*Class:* ${formData.className}
*Gender:* ${formData.gender || "Not provided"}
*Date of Birth:* ${formData.dob || "Not provided"}
*City:* ${formData.city || "Not provided"}
*Postal Code:* ${formData.postalCode || "Not provided"}
*Address:* ${formData.address || "Not provided"}

I want to enquire about admission for the academic session 2026-27.
  `.trim();

  const whatsappNumber = "918102044250";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
};

  const steps = [
    {
      number: "01",
      title: "Fill Online Registration Form",
      text: "Complete the admission form with the student's basic details, class and contact information.",
    },
    {
      number: "02",
      title: "Interaction / Assessment",
      text: "For Class 2 onwards, a short interaction or basic assessment helps us understand the student's academic level.",
    },
    {
      number: "03",
      title: "Document Verification",
      text: "Submit the required documents. Our admission team will guide you through the verification process.",
    },
    {
      number: "04",
      title: "Confirmation & Fee Payment",
      text: "After verification, receive admission confirmation and complete the fee payment to secure the seat.",
    },
  ];

  const requirements = [
    "Birth Certificate of the child",
    "Aadhaar Card of the child and parents",
    "Previous school report card (if applicable)",
    "Passport size photographs (4 copies)",
    "Transfer Certificate (for Class II onwards)",
    "Address proof document",
  ];

  const programs = [
    {
      title: "IIT-JEE & NEET",
      text: "In-depth subject preparation with exam-focused strategies, practice and mock tests.",
    },
    {
      title: "Olympiad Preparation",
      text: "Training focused on logical reasoning, conceptual understanding and problem-solving skills.",
    },
    {
      title: "Foundation Programs",
      text: "Build strong fundamentals for school examinations and early competitive preparation.",
    },
    {
      title: "Board Exam Support",
      text: "Structured revision, practice tests and concept reinforcement for better performance.",
    },
  ];

  const faqs = [
    {
      q: "What is the admission process at BUGGA Academy?",
      a: "The admission process is simple — fill the online form, attend a short interaction or assessment, submit the required documents and confirm your seat.",
    },
    {
      q: "Does BUGGA Academy provide IIT-JEE and NEET preparation?",
      a: "Yes. BUGGA Academy provides focused academic preparation for IIT-JEE, NEET and other competitive examinations along with strong board preparation.",
    },
    {
      q: "What documents are required for admission?",
      a: "Birth certificate, Aadhaar cards, previous school report card, passport-size photographs, transfer certificate where applicable and address proof are generally required.",
    },
    {
      q: "What is the fee structure?",
      a: "The fee structure depends on the class and academic program selected. Please contact the BUGGA Academy admission team for the latest fee details.",
    },
    {
      q: "Is teaching based on the NCERT curriculum?",
      a: "Yes. The academic approach focuses on strong conceptual understanding and NCERT-aligned learning along with additional preparation where required.",
    },
    {
      q: "Where is BUGGA Academy located?",
      a: "BUGGA Academy is located in Bihar . Please contact the academy directly for the latest campus address and admission-related information.",
    },
  ];

  return (
    <main className="bg-white text-slate-900">

      {/* ================= BREADCRUMB ================= */}
      

      {/* ================= HERO ================= */}
<section className="relative overflow-hidden bg-slate-50">

  {/* Background Effects */}
  <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />
  <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-indigo-100 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-20">

    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

      {/* ================= LEFT - STUDENT IMAGE ================= */}
      <div className="relative flex justify-center lg:justify-start">

        {/* Student Image */}
        <div className="relative z-10">
          <img
            src={studentGirl}
            alt="BUGGA Academy Student"
            className="h-[420px] w-auto object-contain drop-shadow-2xl sm:h-[520px] lg:h-[560px]"
          />
        </div>

        {/* Small Badge */}
        <div className="absolute bottom-6 left-4 z-20 rounded-2xl border border-white/60 bg-white/95 px-5 py-3 shadow-xl backdrop-blur sm:left-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            BUGGA Academy
          </p>

          <p className="mt-1 text-sm font-black text-slate-900">
            Learn • Grow • Succeed
          </p>
        </div>

      </div>

      {/* ================= RIGHT - CONTENT ================= */}
      <div className="max-w-2xl">

        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          Admissions Open • 2026–27
        </span>

        <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          School Admission

          <span className="block text-blue-600">
            2026–27
          </span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Start your child's academic journey with{" "}
          <strong className="text-slate-900">
            BUGGA Academy
          </strong>
          , a focused learning environment designed to build strong
          concepts, academic discipline and confidence.
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          Our academic programs combine school education with focused
          preparation for board examinations, IIT-JEE, NEET, Olympiads
          and Foundation programs.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <a
            href="#registration"
            className="rounded-xl bg-blue-600 px-7 py-3.5 text-center font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Apply for Admission
          </a>

          <a
            href="tel:+918102044250"
            className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-center font-bold text-slate-800 transition hover:border-blue-500 hover:text-blue-600"
          >
            Call Admission Team
          </a>

        </div>

      </div>

    </div>

  </div>
</section>



      {/* ================= INTRO ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Join BUGGA Academy
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              A learning environment built for academic growth
            </h2>
          </div>

          <div className="text-slate-600">
            <p className="leading-8">
              At BUGGA Academy, students receive personalised academic
              attention, expert mentoring and continuous assessment.
            </p>

            <p className="mt-4 leading-8">
              Our approach focuses on conceptual clarity, regular practice,
              disciplined learning and consistent academic improvement.
            </p>
          </div>

        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Simple & Transparent
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              How to Apply
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Our four-step admission process makes it easy for parents and
              students to get started.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-sm font-black text-white">
                  {step.number}
                </div>

                <h3 className="mt-6 text-lg font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= DOCUMENTS ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Admission Requirements
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Documents Required
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Please keep the following documents ready to complete the
              registration and admission process smoothly.
            </p>

            <div className="mt-8 space-y-4">
              {requirements.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                    {index + 1}
                  </span>

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
              Need Help?
            </p>

            <h3 className="mt-3 text-3xl font-black">
              Talk to our Admission Team
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              Have questions about classes, programs, admission or fees?
              Our team is available to guide parents and students.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+918102044250"
                className="block rounded-xl bg-white px-5 py-4 text-center font-bold text-slate-950 transition hover:bg-blue-50"
              >
                📞 +91 81020 44250
              </a>

              <a
                href="https://wa.me/918102044250?text=Hello%2C%20I%20want%20to%20know%20more%20about%20the%20courses%20and%20admissions."
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-slate-700 px-5 py-4 text-center font-bold transition hover:bg-slate-900"
              >
                💬 WhatsApp Admission Team
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= REGISTRATION FORM ================= */}
      <section
        id="registration"
        className="bg-slate-50 py-16"
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Apply Online
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Online Registration Form
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Fill in your details and our academic team will contact you
              for personalised admission guidance.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10"
          >

            <div className="grid gap-6 md:grid-cols-2">

              {/* NAME */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Student Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter student name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter phone number"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* CLASS */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Class *
                </label>

                <select
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">Select Class</option>
                  <option value="Nursery">Nursery</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                  <option value="4">Class 4</option>
                  <option value="5">Class 5</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>

              {/* GENDER */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Gender
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* DOB */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Date of Birth
                </label>

                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* CITY */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* POSTAL */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Postal Code
                </label>

                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Enter postal code"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* ADDRESS */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold">
                  Street Address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Enter complete address"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Submit Application
            </button>

          </form>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">

        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Why BUGGA Academy
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            More than exam preparation
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            BUGGA Academy focuses on strong concepts, regular practice,
            mentorship and disciplined learning to help students progress
            academically.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

          {[
            "Integrated IIT-JEE & NEET Preparation",
            "Experienced Faculty",
            "Concept-Based Learning",
            "Regular Tests & Feedback",
            "Disciplined Learning Environment",
          ].map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-lg"
            >
              <div className="text-2xl font-black text-blue-600">
                0{index + 1}
              </div>

              <h3 className="mt-5 font-bold leading-6">
                {item}
              </h3>
            </div>
          ))}

        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
              Academic Programs
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              What We Offer
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Carefully designed academic programs to support students at
              different stages of their academic journey.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {programs.map((program, index) => (
              <div
                key={program.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-7"
              >
                <span className="text-sm font-bold text-blue-400">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {program.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {program.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= TEACHERS ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Our Teachers
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Learn from experienced educators
            </h2>
          </div>

          <div className="space-y-5 text-slate-600">
            <p className="leading-8">
              Our teachers and mentors bring strong subject knowledge and
              practical teaching experience to the classroom.
            </p>

            <p className="leading-8">
              Students receive personalised guidance, doubt-clearing
              support and regular academic feedback to help them develop
              confidence and consistency.
            </p>

            <p className="font-semibold text-slate-900">
              We don't just teach — we help students build the habits needed
              for long-term academic success.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">

            {faqs.map((faq, index) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-slate-200 bg-white p-5"
              >
                <summary className="cursor-pointer list-none font-bold text-slate-900">
                  <div className="flex items-center justify-between gap-5">
                    <span>
                      Q{index + 1}. {faq.q}
                    </span>

                    <span className="text-xl text-blue-600 transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 border-t border-slate-100 pt-4 leading-7 text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center text-white sm:px-6 lg:px-8">

          <h2 className="text-3xl font-black sm:text-4xl">
            Ready to start your child's journey?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Apply for admission and let our academic team guide you through
            the next steps.
          </p>

          <a
            href="#registration"
            className="mt-7 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-700 shadow-xl transition hover:bg-blue-50"
          >
            Apply for Admission
          </a>

        </div>
      </section>

    </main>
  );
}

export default Admission;
