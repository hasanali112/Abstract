import { useState } from "react";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import Card from "./components/Ui/Card";
import HeroSection from "./components/Ui/HeroSection";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  console.log(searchValue);

  return (
    <>
      <Navbar />
      <HeroSection setSearchValue={setSearchValue} />
      <Card searchValue={searchValue} />
      <Footer />
    </>
  );
};

export default Home;
