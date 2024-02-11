const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-transparent bg-clip-text bg-gradient-to-br from-black via-red-600 to-red-700 border-b-2 border-gradient-to-br"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 mb-2 font-bold hover:text-white text-lg ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
