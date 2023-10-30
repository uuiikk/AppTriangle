import { FC } from "react";
import styles from "./Input.module.scss";
type InputProps = {
  value: number;
  name: string;
  onChange: (value: string) => void;
};

const Input: FC<InputProps> = ({ value, name, onChange }) => {
  return (
    <div className={styles.div}>
      <h3 className={styles.label}>{name}</h3>
      <input
        className={styles.input}
        type="number"
        max={100}
        min={1}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default Input;
