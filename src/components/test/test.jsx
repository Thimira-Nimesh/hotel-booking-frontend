import { useState } from "react";

export default function TestComponent() {
  const [num, setNum] = useState(0);

  const [name, setName] = useState("Init");

  return (
    <div className="w-full h-[100vh] bg-red-600 flex justify-center items-center">
      <div className="bg-white w-[350px] h-[250px] flex justify-center items-center">
        <button
          className="w-[60px] h-[60px] bg-red-400 rounded-full text-2xl text-white text-center  hover:w-[80px] hover:h-[80px]  hover:text-4xl"
          onClick={() => {
            const newNum = num - 1;
            setNum(newNum);
          }}
        >
          -
        </button>
        <span className="text-6xl ml-6 mr-6">{num}</span>
        <button
          className="w-[60px] h-[60px] bg-blue-400 rounded-full text-2xl text-white text-center hover:w-[80px] hover:h-[80px] hover:text-4xl"
          onClick={() => {
            const newAddNum = num + 1;
            setNum(newAddNum);
          }}
        >
          +
        </button>
        <span>{name}</span>
      </div>
    </div>
  );
}
