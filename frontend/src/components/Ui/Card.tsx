import { useEffect, useState } from "react";
import Container from "../Shared/Container";

const cards = [
  {
    title: "Branch",
    description: "Abstract branches lets you manages, vision and doument",
  },
  {
    title: "Branch",
    description: "Abstract branches lets you manages, vision and doument",
  },
  {
    title: "Branch",
    description: "Abstract branches lets you manages, vision and doument",
  },
];

const Card = () => {
  const [cardData, setCardData] = useState([]);

  console.log(cardData);

  useEffect(() => {
    fetch("http://localhost:5000/GET/cards", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);

  return (
    <div>
      <Container className="flex justify-center items-center mt-32 mb-20">
        <div className="grid grid-cols-2 gap-16">
          {cards.map((card) => (
            <div className="bg-[#f4f6f8] w-[400px] h-[190px]  rounded-lg border border-gray-300 hover:-translate-y-2 duration-500 hover:scale-110">
              <h1 className="text-xl font-bold m-4">{card.title}</h1>
              <hr />
              <p className="m-3">{card.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Card;
