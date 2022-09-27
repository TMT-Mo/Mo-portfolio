import Container from "../UI/Container/Container";
import phoneIcon from "../../assets/bxs-phone.svg";
import homeIcon from "../../assets/home-svgrepo-com.svg";
import gmailIcon from "../../assets/gmail-svgrepo-com.svg";
import contactImg from "../../assets/pexels-pixabay-209151.jpg";
import Lottie from "react-lottie";
import contact from "../../assets/76038-contact-mail.json";
const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contact,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { innerWidth } = window;
  const dimension = () => {
    if (innerWidth < 500) return 200;
    else return 400;
  };
  return (
    <section id="contact" className="bg-primary-blue scroll-py-16">
      <Container className="flex flex-col space-y-4 px-6 py-16 items-center text-black">
        <span className="relative flex text-white font-bold text-2xl md:text-4xl after:w-full after:bg-white after:h-0.5 after:absolute after:mt-8 after:md:mt-12 ">
          Contact
        </span>
        <div
          data-aos="fade-right"
          className="flex flex-col w-full justify-evenly space-y-6 items-center lg:flex-row lg:space-y-0 lg:space-x-12 "
        >
          <div className="p-4  lg:w-1/3 md:w-2/3">
            <Lottie
              options={defaultOptions}
              height={dimension}
              width={dimension}
            />
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-col w-full space-y-8 items-center lg:w-1/3 md:w-2/3"
          >
            <div className="flex flex-row w-full border rounded-md border-gray-400 bg-white space-x-8 p-4 ">
              <img src={phoneIcon} className="h-8 w-8 self-center" alt="" />
              <div className="flex flex-col ">
                <span className="font-bold">Phone Number</span>
                <a href="tel:+84775509168" className='hover:font-semibold'>
                  0775509168
                </a>
              </div>
            </div>
            <div className="flex flex-row w-full border rounded-md border-gray-400 bg-white space-x-8 p-4 ">
              <img src={homeIcon} className="h-8 w-8 self-center" alt="" />
              <div className="flex flex-col ">
                <span className="font-bold">My Address</span>
                <span>Ho Chi Minh city.</span>
              </div>
            </div>
            <div className="flex flex-row w-full overflow-hidden border rounded-md border-gray-400 bg-white space-x-8 p-4 ">
              <img src={gmailIcon} className="h-8 w-8 self-center" alt="" />
              <div className="flex flex-col ">
                <span className="font-bold">My Email</span>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=minhtriet17101@gmail.com" className="hover:font-semibold">
                  minhtriet17101@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
