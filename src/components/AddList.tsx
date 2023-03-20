import React, { useState, ChangeEvent, FormEvent } from "react";

interface Props {
  people: DataState["people"];
  setPeople: React.Dispatch<React.SetStateAction<DataState["people"]>>;
}

const AddList: React.FC<Props> = ({ people, setPeople }) => {
  const [imagePreview, setImagePreview] = useState<string>("");
  const [formData, setFormData] = useState({ name: "", age: "", notes: "" });

  const handleSetImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // SEND DATA HERE
    if (!formData.name || !formData.age || !imagePreview) {
      alert("not complete");
    }

    setPeople([
      ...people,
      {
        name: formData.name,
        age: parseInt(formData.age),
        url: imagePreview,
        note: formData.notes,
      },
    ]);

    setFormData({ name: "", age: "", notes: "" });
    setImagePreview("");
  };

  const inputChange = (
    ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="container mx-auto mt-4">
      <div className="flex flex-wrap justify-center">
        <div className="w-full order-2 mt-12 lg:mt-0 lg:order-1 md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="flex w-full mx-auto lg:max-w-sm flex-col "
          >
            <div className="flex flex-wrap gap-2 lg:gap-3">
              <div className="form w-[55%] lg:w-[50%]">
                <label htmlFor="nm" className="text-xl text-slate-800">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="nm"
                  value={formData.name}
                  placeholder="Full name"
                  onChange={inputChange}
                  className="form-input focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />
              </div>
              <div className="w-[41%] lg:w-[46%] form ">
                <label htmlFor="age" className="text-xl text-slate-800">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  value={formData.age}
                  placeholder="ur Age"
                  onChange={inputChange}
                  className="form-input  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />
              </div>
            </div>
            <div className="form">
              <label htmlFor="img" className="text-xl text-slate-700 mb-1">
                Photo
              </label>
              <input
                type="file"
                id="img"
                onChange={handleSetImage}
                className="form-input w-full bg-zinc-100 p-3 rounded-md file:rounded-md file:border-none file:bg-transparent"
              />
            </div>
            <div className="form">
              <label htmlFor="txt" className="text-xl text-slate-800">
                Notes
              </label>
              <p className="mb-2 text-slate-500 text-base">optional</p>
              <textarea
                name="notes"
                id="txt"
                cols={7}
                rows={4}
                value={formData.notes}
                onChange={inputChange}
                className="text-area  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-sky-500 w-[128px] mx-auto py-2 rounded-full hover:bg-sky-400"
            >
              Add List
            </button>
          </form>
        </div>
        <div className="w-full lg:order-2 lg:w-1/2">
          <h1 className="text-slate-800 text-xl lg:text-3xl font-bold">
            Party
          </h1>
          <p className="text-md font-semibold text-sky-500 mb-3">
            Add someone to intive your party
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            aperiam modi commodi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AddList;
