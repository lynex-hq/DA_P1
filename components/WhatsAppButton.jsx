/**
 * Site-wide WhatsApp entry point — brief §7 (Functional Requirements) and the
 * Starter package (§9) both call for a WhatsApp button.
 *
 * NUMBER IS A PLACEHOLDER: it reuses the same "+94 11 234 5678" shown on the
 * contact page and in the footer, which is itself placeholder studio contact
 * data (no real WhatsApp Business number has been provided yet). Replace
 * WHATSAPP_NUMBER once the client gives a real one.
 */
const WHATSAPP_NUMBER = '94112345678'; // +94 11 234 5678, digits only, no leading zero
const PREFILLED_MESSAGE = "Hello Design Ark, I'd like to enquire about a project.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Design Ark on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#161616] border border-secondary text-secondary shadow-lg hover:bg-secondary hover:text-[#161616] transition-colors duration-200"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.29.638 4.43 1.744 6.256L4 29l7.94-1.706A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.7c-1.99 0-3.85-.57-5.42-1.55l-.39-.23-4.71 1.012 1.03-4.59-.26-.41A9.63 9.63 0 0 1 6.3 15c0-5.35 4.36-9.7 9.704-9.7 5.345 0 9.7 4.35 9.7 9.7 0 5.35-4.355 9.7-9.7 9.7Zm5.34-7.27c-.29-.146-1.72-.85-1.988-.948-.267-.098-.462-.146-.657.147-.194.293-.755.947-.926 1.14-.17.196-.34.22-.63.074-.29-.147-1.226-.452-2.335-1.44-.863-.77-1.446-1.72-1.615-2.012-.17-.293-.018-.451.128-.598.132-.13.29-.34.436-.51.146-.17.194-.293.29-.488.098-.196.05-.367-.024-.513-.073-.147-.657-1.583-.9-2.168-.238-.567-.48-.49-.657-.5-.17-.008-.365-.01-.56-.01-.196 0-.514.073-.783.367-.268.293-1.026 1.003-1.026 2.445 0 1.443 1.05 2.837 1.196 3.033.146.196 2.067 3.156 5.008 4.427.7.302 1.246.483 1.672.618.702.223 1.34.192 1.845.117.563-.084 1.72-.703 1.963-1.382.243-.68.243-1.263.17-1.383-.073-.122-.267-.196-.558-.342Z" />
      </svg>
    </a>
  );
}
