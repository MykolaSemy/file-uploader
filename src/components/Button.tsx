import Spinner from "./Spinner";

interface ButtonProps {
  title: string;
  isLoading?: boolean;
  style?: string;
  handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  handleClick,
  isLoading,
  style,
}) => {
  const handleButtonClick = (e: any) => {
    e.preventDefault();
    handleClick && handleClick();
  };

  return (
    <button onClick={handleButtonClick} className={`" button "${style}`}>
      {!isLoading ? title : <Spinner />}
    </button>
  );
};

export default Button;
