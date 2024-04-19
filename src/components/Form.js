import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItemobject = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItemobject);

    setDescription("");
    setQuantity(1);
  };
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        {/*  */}
        {/* <h3>What do you nead for your 😍 trip?</h3> */}
        <h3>چه چیزای برای مسافرت 😍 نیاز داری </h3>
        {/*  */}
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="موارد..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>اضافه</button>
        {/* <button>Add</button> */}
      </form>
    </>
  );
};

export default Form;
