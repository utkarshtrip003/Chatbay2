const ContactSection: React.FC = () => {
  const handleClick = () => {
    window.open("https://calendly.com/utkarsh-chatbay/30min", "_blank");
  };

  return (
    <section id="contact" className="bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how ChatBay can transform your customer service
            </p>
            <button
              onClick={handleClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-300 mb-8"
            >
              Book Free Strategy Call Now
            </button>
          </div>
          <div className="bg-neutral-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Info</h3>
            <div className="mb-4">
              <p className="text-gray-300 font-medium">Emails:</p>
              <p className="text-gray-300">utkarsh@chatbay.in</p>
              <p className="text-gray-300">aman@chatbay.in</p>
            </div>
            <div>
              <p className="text-gray-300 font-medium">Phone Numbers:</p>
              <p className="text-gray-300">+91 7394840630</p>
              <p className="text-gray-300">+91 9140400259</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
