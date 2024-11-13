import React, {useState} from 'react'
import { MdEmail, MdPhone } from 'react-icons/md';

function Message() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here, like sending the data to an API
      alert(`Feedback Submitted by ${name}`);
    };
  
  return (
    <div className='flex justify-between'>
      <div className='w-[483px]'>
        <h1>
            Let Us Know what you think!
        </h1>
        <p>
        We’d love to hear from you. Whether you have a question about our services, need assistance with account, or just want to share feedback, our team is ready to assist.
        </p>
        <div className='flex flex-col items-start'>
        <h3 className='font-[Inter] font-bold text-xl leading-7 text-[#000000] mb-4'>Contact Us</h3>
        <div className="flex justify-center items-center gap-[1rem]">
          <MdEmail className="text-[#0D192F] bg-[#fff] rounded text-2xl" />
          <div>
            <p className="text-[#000]">Email:</p>
            <p className="text-[#000]">contact@e-medatt.com</p>
          </div>
         </div>
        <div className="flex justify-center items-center gap-[1rem]">
          <MdPhone className="text-[#0D192F] bg-[#fff] rounded text-2xl" />
          <div>
            <p className="text-[#000]">Phone:</p>
            <p className="text-[#000]">(414) 850 - 0417</p>
          </div>
        </div>
      </div> 
      </div>

      <div>
      <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-xl rounded-lg p-6 w-96">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="thoughts..."
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Message
