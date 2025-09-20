import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import Title from "../layout/Title";
import ContactLeft from "./ContactLeft";




const Contact = () => {
  const formRef = useRef();
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ======== Email validation start here =====
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // ======== Email validation end here =======
 const handleSend = (e) => {
  e.preventDefault();

  if (!username || !phoneNumber || !email || !subject || !message) {
    setErrMsg("Please fill in all fields correctly.");
    return;
  }



  emailjs
    .sendForm(
      "service_65hpsp8",
      "template_l7dzvpk",
      formRef.current,
      "LKzHHV50hXiBAapz5"
    )
    .then(
      () => {
        setSuccessMsg(`Thank you dear ${username}, your message has been sent successfully!`);
        setErrMsg("");
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      },
      (error) => {
        setErrMsg("Something went wrong. Please try again.");
        console.error("EmailJS Error:", error);
      }
    );
};


  return (
    <div
      id="contact"
      className="w-full py-10 sm:py-16 md:py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact with me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-8">
          <ContactLeft />
          <div className="w-full lg:w-[60%] h-full py-6 sm:py-10 bg-gradient-to-r from-slate-900 to-gray-900 flex flex-col gap-8 p-4 sm:p-8 rounded-lg shadow-shadowOne">
            <form
              ref={formRef}
              onSubmit={handleSend}
              className="w-full flex flex-col gap-6 py-5"
            >
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-slate-800 to-slate-900 shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-slate-800 to-slate-900 shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col sm:flex-row gap-6 sm:gap-10">
                <div className="w-full sm:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    your name
                  </p>
                  <input
                  name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    phone number
                  </p>
                  <input
                  name="phoneNumber"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  email
                </p>
                <input
                name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Give a valid Email!" && "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  subject
                </p>
                <input
                name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  message
                </p>
                <textarea
                name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div>
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-slate-800 rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-slate-900 to-slate-900 shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-slate-800 to-slate-900 shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
       
      </div>
     
      
    </div>
  );
};
export default Contact;
