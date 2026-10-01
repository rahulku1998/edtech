function WhatsAppButton() {
  const phoneNumber = "918102044250"; // yaha academy ka WhatsApp number daalna

  const message = encodeURIComponent(
    "Hello, I want to know more about the courses and admissions."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[100] flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl shadow-green-900/20 transition duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] sm:bottom-6 sm:right-6"
    >
      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.847 1.213 3.045.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M20.52 3.449A11.815 11.815 0 0012.04 0C5.495 0 .16 5.335.16 11.88c0 2.092.546 4.135 1.584 5.936L.057 23.76l6.08-1.596a11.87 11.87 0 005.903 1.565h.005c6.542 0 11.88-5.335 11.88-11.88a11.82 11.82 0 00-3.405-8.4zM12.045 21.726h-.004a9.85 9.85 0 01-5.021-1.374l-.36-.214-3.609.947.963-3.52-.234-.36a9.845 9.845 0 01-1.509-5.245c0-5.44 4.43-9.87 9.874-9.87a9.83 9.83 0 016.99 2.898 9.83 9.83 0 012.893 6.997c-.003 5.44-4.433 9.871-9.873 9.871z" />
      </svg>

      {/* Text */}
      <span className="text-sm font-bold">
        Chat with us
      </span>
    </a>
  );
}

export default WhatsAppButton;