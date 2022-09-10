import Container from "../../UI/Container/Container";

const Footer = () => {
  return (
    <footer>
      <Container className="flex justify-center mt-16 bg-slate-900 min-w-full">
        <span className="font-semibold text-md text-center p-6 text-white lg:text-xl">
          © Triet Minh. All Rights Reserved. Designed by Mo.
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
