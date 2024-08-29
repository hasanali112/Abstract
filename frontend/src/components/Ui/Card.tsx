import { useEffect, useState } from "react";
import Container from "../Shared/Container";
import CardDetailModal from "./CardModal";

export type TCard = {
  _id: string;
  title: string;
  description: string;
};

const Card = ({ searchValue }: { searchValue: string }) => {
  const [cardData, setCardData] = useState<TCard[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<TCard | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = searchValue
          ? `http://localhost:5000/GET/cards?title=${encodeURIComponent(
              searchValue
            )}`
          : "http://localhost:5000/GET/cards";

        const response = await fetch(url, { method: "GET" });
        const data = await response.json();
        setCardData(data?.data || []);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchData();
  }, [searchValue]);

  const handleCardClick = (card: TCard) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedCard(null);
  };

  return (
    <div>
      <Container className="flex justify-center items-center mt-32 mb-20">
        <div className="grid grid-cols-2 gap-16">
          {cardData.map((card) => (
            <div
              key={card._id}
              className="bg-[#f4f6f8] w-[400px] h-[190px] cursor-pointer  rounded-lg border border-gray-300 hover:-translate-y-2 duration-500 hover:scale-110"
              onClick={() => handleCardClick(card)}
            >
              <h1 className="text-xl font-bold m-4">{card.title}</h1>
              <hr />
              <p className="m-3">{card.description}</p>
            </div>
          ))}
        </div>
      </Container>

      <CardDetailModal
        open={open}
        onClose={handleCloseModal}
        card={selectedCard}
      />
    </div>
  );
};

export default Card;
