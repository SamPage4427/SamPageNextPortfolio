export const Button = ({ children, className, onClick }) => {
  return (
    <button className={`rounded-full ${className} `} onClick={onClick}>
      {children}
    </button>
  );
};
