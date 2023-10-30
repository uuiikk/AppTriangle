import { FC } from "react";
import styles from "./button.module.scss";

type ButtonProps = {
  title1Chek: string;
  title1Reset: string;
  onClickCheck: () => void;
  onClickReset: () => void;
};

const Button: FC<ButtonProps> = ({
  title1Chek,
  title1Reset,
  onClickCheck,
  onClickReset,
}) => {
  return (
    <div className={styles.div}>
      <button className={styles.buttonChecked} onClick={onClickCheck}>
        {title1Chek}
      </button>
      <button className={styles.buttonReset} onClick={onClickReset}>
        {title1Reset}
      </button>
    </div>
  );
};

export default Button;
