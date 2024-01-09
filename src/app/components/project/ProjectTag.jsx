import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-gradient-to-br from-red-700 via-orange-500 to-amber-500"
    : "text-[#ADB7BE] bg-gradient-to-br from-red-700 via-orange-500 to-amber-500";

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
          className={`rounded-full border border-red-500 px-1 py-1 text-xl cursor-pointer hover:text-white ${buttonStyles}`}
        >
          <div
            className={`block rounded-full bg-[#121212] hover:bg-slate-700 px-5 py-2`}
          >
            {name}
          </div>
        </button>
      )}
    </>
  );
};

export default ProjectTag;
