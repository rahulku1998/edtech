import { useState } from "react";

function Demo() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    className: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "918102044250";

    const message = `Hello BUGGA JEE 👋

I want to book a Free Demo.

👤 Student Name: ${formData.name}
📱 Phone Number: ${formData.phone}
📚 Current Class: ${formData.className}
🎯 Interested Course: ${formData.course}

💬 Message:
${formData.message || "I want to know more about the demo class."}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Free Demo Class
          </span>

          <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Book Your
            <span className="text-blue-600"> Free Demo</span>
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Experience the BUGGA JEE teaching approach and understand
            the right preparation path for your goal.
          </p>
        </div>

        {/* Main Card */}
        <div className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-200 lg:grid-cols-2">

          {/* Left */}
          <div className="relative min-h-[500px] overflow-hidden bg-slate-950">
            <img
              src="/bipin.jpg"
              alt="Bipin Sir - BUGGA JEE"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

            <div className="relative z-10 flex h-full min-h-[500px] flex-col justify-end p-7 sm:p-10">

              <span className="mb-5 w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
                BUGGA JEE
              </span>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                Learn From Experienced Faculty
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                Your Preparation.
                <span className="block text-blue-400">
                  Our Guidance.
                </span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
                Book a free demo session and understand our teaching
                approach, academic guidance and preparation strategy.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
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

          {/* Right Form */}
          <div className="p-6 sm:p-8 lg:p-12">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Demo Enquiry
            </p>

            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              Let's get started.
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Fill in your details and send your enquiry directly
              to our WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">

              {/* Name */}
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
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Phone + Class */}
              <div className="grid gap-4 sm:grid-cols-2">

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
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
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
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  >
                    <option value="">Select Class</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                    <option value="Dropper">Dropper</option>
                  </select>
                </div>

              </div>

              {/* Course */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-800">
                  Interested Course
                </label>

                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="">Select Course</option>
                  <option value="IIT-JEE">IIT-JEE</option>
                  <option value="NEET">NEET</option>
                  <option value="DROPPER">DROPPER</option>
                  <option value="BOARD">BOARD</option>
                </select>
              </div>

              {/* Message */}
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
                  placeholder="Any specific query?"
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* WhatsApp */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-xl"
              >
                <span className="text-xl">💬</span>
                Send Enquiry on WhatsApp
              </button>

              <p className="text-center text-xs text-slate-400">
                Your enquiry will open directly in WhatsApp.
              </p>

            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Demo;