import Container from "../../UI/Container/Container";
import classes from './Footer'
const Footer = () => {
  return (
    <footer>
      <Container className={`flex justify-center min-w-full bg-black`}>
        <span className="font-semibold text-md text-center p-3 text-white lg:text-xl">
          © Triet Minh. All Rights Reserved. Designed by Mo.
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
