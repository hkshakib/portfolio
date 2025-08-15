import { AiOutlineFire } from "react-icons/ai";

function Achivement({ Text }) {
  return (
    <div className="flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]">
      <h2 className="flex gap-1 items-center text-white">
        <AiOutlineFire className="text-emerald-400 h-5 w-5" />{" "}
        <span>{Text}</span>
      </h2>
    </div>
  );
}

export default Achivement;
