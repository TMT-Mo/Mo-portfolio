import Container from "../UI/Container/Container";
import phoneIcon from "../../assets/bxs-phone.svg";
import homeIcon from "../../assets/home-svgrepo-com.svg";
import gmailIcon from "../../assets/gmail-svgrepo-com.svg";
import contactImg from "../../assets/pexels-pixabay-209151.jpg";

const Contact = () => {
  
  return (
    <section id="contact">
      <Container className="flex flex-col space-y-12 px-6 mt-36 items-center text-black">
        <span className="relative flex text-white font-bold text-2xl md:text-4xl after:w-full after:bg-white after:h-0.5 after:absolute after:mt-8 after:md:mt-12 ">
          Contact
        </span>
        <div data-aos="fade-right" className="flex flex-col w-full justify-evenly space-y-6 items-center lg:flex-row lg:space-y-0 lg:space-x-12 ">
          <div className="p-4 border border-white lg:w-1/3 md:w-2/3">
            <img src={contactImg} alt="" />
          </div>
          <div data-aos="fade-left" className="flex flex-col w-full space-y-8 items-center lg:w-1/3 md:w-2/3">
            <div className="flex flex-row w-full border rounded-md border-gray-400 bg-white space-x-8 p-4 ">
              <img src={phoneIcon} className="h-8 w-8 self-center" alt="" />
              <div className="flex flex-col ">
                <span className="font-bold">Phone Number</span>
                <span className="">0775509168</span>
              </div>
            </div>
            <div className="flex flex-row w-full border rounded-md border-gray-400 bg-white space-x-8 p-4 ">
              <img src={homeIcon} className="h-8 w-8 self-center" alt="" />
              <div className="flex flex-col ">
                <span className="font-bold">My Address</span>
                <span>151 Huynh Van Banh street, Phu Nhuan district, Ho Chi Minh</span>
              </div>
            </div>
            <div className="flex flex-row w-full border rounded-md border-gray-400 bg-white space-x-8 p-4 ">
              <img src={gmailIcon} className="h-8 w-8 self-center" alt="" />
              <div className="flex flex-col ">
                <span className="font-bold">My Email</span>
                <span se>minhtriet17101@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
