
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    className: "",
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

  const message = `
*BUGGA Academy - Contact Query*

*Name:* ${formData.name}
*Email:* ${formData.email || "Not provided"}
*Phone:* ${formData.phone}
*Class:* ${formData.className || "Not provided"}

*Message:*
${formData.message || "No message provided"}

I would like to know more about BUGGA Academy.
  `.trim();

  const whatsappNumber = "918102044250";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
};

  return (
    <main className="bg-white text-slate-900">

      {/* ================= BREADCRUMB ================= */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <a
              href="/"
              className="transition hover:text-white"
            >
              Home
            </a>

            <span>/</span>

            <span className="font-medium text-white">
              Contact Us
            </span>
          </div>
        </div>
      </section>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-50">

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-indigo-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">

          <div className="max-w-4xl">

            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              We're Here to Help
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Contact
              <span className="text-blue-600">
                {" "}BUGGA JEE
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Have questions about admissions, academic programs, classes
              or competitive exam preparation? Our team is ready to help
              parents and students with clear and personalised guidance.
            </p>

          </div>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Let's start a conversation
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              BUGGA Academy is here to support parents and students with
              admission assistance and academic guidance.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Whether you are looking for information about school
              admissions, board preparation, IIT-JEE, NEET, Olympiads or
              Foundation programs, our academic team will help you understand
              the available options.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Reach out to us and take the first step towards a confident
              and successful academic journey.
            </p>

          </div>

          {/* CONTACT CARDS */}
          <div className="grid gap-5 sm:grid-cols-2">

            {/* PHONE */}
            <a
              href="tel:+918102044250"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
                📞
              </div>

              <h3 className="mt-5 font-bold">
                Call Us
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                +91 81020 44250
              </p>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:inaschool@gamil.com"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-xl">
                ✉️
              </div>

              <h3 className="mt-5 font-bold">
                Email Us
              </h3>

              <p className="mt-2 break-all text-sm text-slate-600">
                inaschool@gamil.com
              </p>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/918102044250"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:col-span-2"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
                💬
              </div>

              <h3 className="mt-5 font-bold">
                WhatsApp Us
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Chat with our academic team for quick assistance.
              </p>
            </a>

          </div>

        </div>
      </section>

      {/* ================= CONTACT + FORM ================= */}
      <section className="bg-slate-50 py-16">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-5">

            {/* LEFT INFORMATION */}
            <div className="lg:col-span-2">

              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Speak With Our Academic Team
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Need guidance?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Have questions about admissions or academic programs?
                Get clear guidance and personalised support from our team.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                    📞
                  </div>

                  <div>
                    <p className="font-bold">
                      Phone
                    </p>

                    <a
                      href="tel:+918102044250"
                      className="text-slate-600 hover:text-blue-600"
                    >
                      +91 81020 44250
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                    ✉️
                  </div>

                  <div>
                    <p className="font-bold">
                      Email
                    </p>

                    <a
                      href="mailto:inaschool@gamil.com"
                      className="break-all text-slate-600 hover:text-blue-600"
                    >
                      bipin@gamil.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                    📍
                  </div>

                  <div>
                    <p className="font-bold">
                      Address
                    </p>

                    <p className="mt-1 leading-6 text-slate-600">
                      Tagore Bal Niketan School,
                      <br />
                      Ahuja Colony, Civil Line,
                      <br />
                      Bihar
                      <br />
                      PIN Code - 304001
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT FORM */}
            <div className="lg:col-span-3">

              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10"
              >

                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                    Submit Your Query
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    How can we help you?
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Fill in the form and our academic counsellors will
                    contact you shortly.
                  </p>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {/* NAME */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
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
                      Phone *
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
                      Class
                    </label>

                    <select
                      name="className"
                      value={formData.className}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    >
                      <option value="">
                        Select Class
                      </option>

                      <option value="Nursery">Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>

                      <option value="Class 1">
                        Class 1
                      </option>

                      <option value="Class 2">
                        Class 2
                      </option>

                      <option value="Class 3">
                        Class 3
                      </option>

                      <option value="Class 4">
                        Class 4
                      </option>

                      <option value="Class 5">
                        Class 5
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
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div className="md:col-span-2">

                    <label className="mb-2 block text-sm font-semibold">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Write your query..."
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    />

                  </div>

                </div>

                <button
  type="submit"
  className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
>
  Send Message on WhatsApp
</button>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="py-16">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Find Us
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Our Location
            </h2>

            <p className="mt-3 text-slate-600">
              Tagore Bal Niketan School, Ahuja Colony, Civil Line,
              Tonk, Rajasthan - 304001
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">

            <iframe
              title="BUGGA Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.562515692016!2d75.77737507447732!3d26.17837369126419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396e6161d86d3c6d%3A0x1e3a6a2363fc9428!2sTagore%20Bal%20Niketan%20School!5e0!3m2!1sen!2sin!4v1769065319068!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-blue-600">

        <div className="mx-auto max-w-7xl px-5 py-14 text-center text-white sm:px-6 lg:px-8">

          <h2 className="text-3xl font-black sm:text-4xl">
            Have a question? We're here to help.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Contact our academic team today for admission guidance,
            program details and counselling.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="tel:+918102044250"
              className="rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Call Us
            </a>

            <a
              href="https://wa.me/918102044250"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/40 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;

