import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-gradient-to-br from-red-700 via-red-600 to-black"
    : "text-[#ADB7BE] bg-gradient-to-br from-red-700 via-red-600 to-black";

  return (
    <>
      {isSelected ? (
        <button
          onClick={() => onClick(name)}
          className={`rounded-full border border-red-500 px-6 py-3 text-xl cursor-pointer hover:text-white ${buttonStyles}`}
        >
          {name}
        </button>
      ) : (
        <button
          onClick={() => onClick(name)}
          className={`rounded-full border border-red-500 px-1 py-1 text-xl cursor-pointer hover:text-white group/link ${buttonStyles}`}
        >
          <div
            className={`block rounded-full bg-black px-5 py-2 group-hover/link:bg-slate-700`}
          >
            {name}
          </div>
        </button>
      )}
    </>
  );
};

export default ProjectTag;
