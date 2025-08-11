import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "443f22d1-7c48-4a8c-befe-c6f1ad6330f4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult(data.message);
    }
  };
  return (
    <div  data-aos="zoom-in" data-aos-delay="50" className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
     <h1  data-aos="zoom-in" data-aos-delay="100"className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
        <p data-aos="zoom-in" data-aos-delay="150" className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let's Build Your Future Together</p>
        <form  data-aos="zoom-in" data-aos-delay="170" onSubmit={onSubmit} className='max-w-2x1 mx-auto text-gray-600 pt-8'>
          <div data-aos="zoom-in" data-aos-delay="190" className='flex flex-row justify-center gap-6'>
            <div data-aos="zoom-in" data-aos-delay="200" className='text-left'>
              <label htmlFor="Name" className='block mb-1'>Your name</label>
              <input  data-aos="zoom-in" data-aos-delay="210" className='max-w-[240px] border border-gray-300 rounded py-2 px-3' type="text" name="Name" id="Name" placeholder="Your Name" required />
            </div>
            <div data-aos="zoom-in" data-aos-delay="220" className='text-left'>
              <label htmlFor="Email" className='block mb-1'>Your Email</label>
              <input  data-aos="zoom-in" data-aos-delay="230" className='max-w-[240px] border border-gray-300 rounded py-2 px-3' type="Email" name="Email" id="Email" placeholder="Your Email" required />
            </div>
          </div>
          <div className='my-6 text-left flex flex-col items-center'>
            <label htmlFor="Message" className='block mb-1 w-[492px] text-left'>Message</label>
            <textarea data-aos="zoom-in" data-aos-delay="240" className="w-[492px] border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none" name='Message' id='Message' placeholder='Message' required></textarea>
          </div>
          <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result ? result : "Send Message"}</button>
        </form>
        </div>
  )
}

export default Contact
