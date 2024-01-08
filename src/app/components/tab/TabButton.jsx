const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-transparent bg-clip-text bg-gradient-to-br from-amber-500 via-orange-600 to-red-700"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
