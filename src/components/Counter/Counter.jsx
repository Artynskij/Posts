import { useState } from "react";

export const Counter = () => {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("Artem");
  const Increment = () => {
    setLikes(likes + 1);
  };
  const Decrement = () => {
    setLikes(likes - 1);
  };
 
  return (
    <div>
      <h1>{likes}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
      />
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
   
    </div>
  );
};
