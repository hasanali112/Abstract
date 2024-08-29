import logo from "../../assets/abstract.png";
import SubmitForm from "../Ui/SubmitFrom";
import Container from "./Container";

const Navbar = () => {
  return (
    <header className="bg-black h-[100px]">
      <nav className="h-full flex items-center">
        <Container className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="abstract" className="w-[40px] h-[40px]" />
            <h1 className="text-2xl  text-white">Abstract</h1>
            <div className="text-white">|</div>
            <h1 className="text-2xl  text-white">Help Center</h1>
          </div>
          <div>
            <SubmitForm />
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
