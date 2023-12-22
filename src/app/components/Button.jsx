export const Button = ({ children, className }) => {
  return <button className={`rounded-full ${className} `}>{children}</button>;
};
