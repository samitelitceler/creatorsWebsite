import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('https://emailform.elitceler.com/form1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          description,
        }),
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
      setLoading(false);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="relative flex flex-col gap-6 max-h-[600px] overflow-y-auto py-6 no-scrollbar">
      {/* Decorative Circles */}
      <div className="absolute bottom-[-40px] right-[-60px] w-40 h-40 bg-sky-300 rounded-full opacity-80 z-0" />
      <div className="absolute bottom-[-30px] left-[-50px] w-28 h-28 bg-red-400 rounded-full opacity-40 z-0" />
      {/* Title and Subtitle */}
      <div className="flex flex-col gap-1 mb-2 z-10 relative">
        <h3 className="text-2xl font-bold text-black">Contact Information</h3>
        <span className="text-base text-black">Connect with us</span>
      </div>
      {/* Horizontal Contact Info Bar */}
      <div className="flex flex-row items-center justify-between gap-4 mb-2 z-10 relative">
        <div className="flex items-center gap-2 text-black">
          <Phone className="w-5 h-5" />
          <span className="font-medium text-xs">+919089768401</span>
        </div>
        <div className="flex items-center gap-2 text-black">
          <Mail className="w-5 h-5" />
          <span className="font-medium text-xs">Brands@affix.com</span>
        </div>
        <div className="flex items-center gap-2 text-black">
          <MapPin className="w-5 h-5" />
          <span className="font-medium text-xs">Hyderabad</span>
        </div>
      </div>
      {/* Form Fields in White Box */}
      <div className="bg-white rounded-lg p-6 shadow-md z-10 relative">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="font-semibold">First Name</label>
          <input
            className="border border-gray-30 text-black rounded-md px-4 py-2 bg-white"
            placeholder="Your First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
          />

          <label className="font-semibold">Last Name</label>
          <input
            className="border border-gray-300 text-black rounded-md px-4 py-2 bg-white"
            placeholder="Your Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
          />

          <label className="font-semibold">Email</label>
          <input
            className="border border-gray-300 text-black rounded-md px-4 py-2 bg-white"
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label className="font-semibold">Phone Number</label>
          <input
            className="border border-gray-300 text-black rounded-md px-4 py-2 bg-white"
            placeholder="Your Phone Number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
          />

          <label className="font-semibold">Message</label>
          <textarea
            className="border border-gray-300 text-black rounded-md px-4 py-2 bg-white"
            placeholder="Write your message..."
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />

          <button
            type="submit"
            className="mt-4 bg-black text-white rounded-md py-3 mt-8 font-bold hover:bg-yellow-400 hover:text-black transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}