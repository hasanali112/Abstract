import Container from "./Container";
import logo from "../../assets/abstract.png";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <Container>
        <div className="grid grid-cols-5 gap-4 pt-16 pb-20">
          <div>
            <h1 className="text-2xl font-semibold">Abstract</h1>
            <p className="mt-3">Branches</p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Resources</h1>
            <ul className="space-y-2 mt-2">
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Community</h1>
            <ul className="space-y-2 mt-2">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Company</h1>
            <ul className="space-y-2 mt-2">
              <li>About</li>
              <li>Careers</li>
              <li>Legal</li>
            </ul>
            <h1 className="text-xl font-semibold mt-8">Contact Us</h1>
            <p className="mt-1">info@abstract.com</p>
          </div>
          <div className="mt-[180px]">
            <img src={logo} alt="abstract" className="w-[30px] h-[30px]" />
            <ul className="space-y-1 mt-2 text-lg">
              <li>Copyright 2022</li>
              <li>Abstract Studio Design, Inc</li>
              <li>All right reverved</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
