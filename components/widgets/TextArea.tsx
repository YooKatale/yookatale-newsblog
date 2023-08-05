import { ChangeEvent } from "react";

type Props = {
  className?: string;
  placeholder?: string;
  rows: number;
  value?: string;
  handleChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({
  placeholder,
  value,
  rows,
  handleChange,
  className = "",
}: Props) => {
  return (
    <textarea
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      rows={rows}
    ></textarea>
  );
};

export default TextArea;
