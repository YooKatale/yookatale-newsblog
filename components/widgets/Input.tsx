type Props = {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  id?: string;
  inputType?: string;
  handleChange?: () => void;
};

const Input = ({
  inputType,
  placeholder,
  value,
  handleChange,
  className = "",
  disabled,
  id,
}: Props) => {
  return (
    <label>
      <input
        className={className}
        placeholder={placeholder}
        type={inputType}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        id={id}
      />
    </label>
  );
};

export default Input;
