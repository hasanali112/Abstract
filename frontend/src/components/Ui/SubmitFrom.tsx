/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  title: string;
  description: string;
};

const SubmitForm = () => {
  const [open, setOpen] = useState(false);

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:5000/POST/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleOpen}
        className="border border-gray-400 rounded-md text-lg text-white p-2"
      >
        Submit a request
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Submit Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  {...register("title")}
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Description</label>
                <input
                  type="text"
                  {...register("description")}
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitForm;
