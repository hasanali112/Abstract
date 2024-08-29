import { TCard } from "./Card";

type TProps = {
  open: boolean;
  onClose: () => void;
  card: TCard | null;
};

const CardDetailModal = ({ open, onClose, card }: TProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-white rounded-lg shadow-lg max-w-[600px] h-[400px] w-full p-6">
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h3 className="text-2xl font-semibold mb-4">Details</h3>
        <hr />
        <div>
          <h1 className="text-2xl font-bold text-gray-700 mt-2">Title</h1>
          <h1 className="mt-2">{card?.title}</h1>
          <h1 className="text-2xl font-bold text-gray-700 mt-5">Description</h1>
          <p className="mt-2">{card?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetailModal;
