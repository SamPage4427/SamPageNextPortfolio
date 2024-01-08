import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-gradient-to-br from-red-700 via-orange-500 to-amber-500"
    : "text-[#ADB7BE] border-slate-600";

  return (
    <button
      onClick={() => onClick(name)}
      className={`rounded-full border px-6 py-3 text-xl cursor-pointer hover:text-white hover:border-white ${buttonStyles}`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
