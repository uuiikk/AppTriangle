import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import styles from "./types/types.module.scss";

function App() {
  const [labelResult, setLabelResult] = useState<string>("Вид треугольника:");
  const [valueA, setValueA] = useState<number>(1);
  const [valueB, setValueB] = useState<number>(1);
  const [valueC, setValueC] = useState<number>(1);
  const onChange = (newValue: string, side: number): void => {
    switch (side) {
      case 1:
        setValueA(Number(newValue));
        break;
      case 2:
        setValueB(Number(newValue));
        break;
      case 3:
        setValueC(Number(newValue));
        break;
    }
  };

  const check = (): void => {
    if (
      valueA + valueB <= valueC ||
      valueA + valueC <= valueB ||
      valueB + valueC <= valueA
    ) {
      setLabelResult("Не существует");
    } else {
      if (valueA == valueB && valueB == valueC) {
        setLabelResult("Равносторонний");
      } else {
        if (valueA == valueB || valueA == valueC || valueB == valueC) {
          setLabelResult("Равнобедренный");
        } else {
          setLabelResult("Разносторонний");
        }
      }
    }
  };

  const refreshPage = (): void => {
    window.location.reload();
    console.log("Warning - restart");
  };

  return (
    <div className={styles.background}>
      <div>
        <textarea
          readOnly
          value={"Введите длины сторон треугольника"}
        ></textarea>
        <p className={styles.warning}>Только целые числа! (1 ⩽ x ⩽ 100)</p>
        <Input
          name="A:"
          value={valueA == 0 ? NaN : valueA >= 100 ? 100 : valueA}
          onChange={(newValue) => onChange(newValue, 1)}
        />
        <Input
          name="B:"
          value={valueB == 0 ? NaN : valueB >= 100 ? 100 : valueB}
          onChange={(newValue) => onChange(newValue, 2)}
        />
        <Input
          name="C:"
          value={valueC == 0 ? NaN : valueC >= 100 ? 100 : valueC}
          onChange={(newValue) => onChange(newValue, 3)}
        />
        <Button
          title1Chek="Проверить"
          title1Reset="Сбросить"
          onClickCheck={(): void => check()}
          onClickReset={(): void => refreshPage()}
        />
        <h4 className={styles.h4}>{labelResult == "" ? null : labelResult}</h4>
      </div>
    </div>
  );
}

export default App;
