import Container from "../Shared/Container";

type TProps = {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const HeroSection = ({ setSearchValue }: TProps) => {
  return (
    <div className="bg-[#dadbf0] h-[400px]">
      <Container className="flex flex-col justify-center items-center pt-28">
        <h1 className="text-5xl font-semibold text-center">How can we help?</h1>
        <div className="relative">
          <input
            type="search"
            placeholder="Search"
            onBlur={(e) => setSearchValue(e.target.value)}
            className="w-[500px] h-[50px] border border-gray-900 mt-8 rounded-sm px-5 focus:outline-none"
          />
          <button className="absolute top-[45px] right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
