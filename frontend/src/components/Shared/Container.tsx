type TProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: TProps) => {
  return (
    <div className={`w-full max-w-[1300px] mx-auto px-[20px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
