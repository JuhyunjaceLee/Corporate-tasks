import React, { useState } from "react";
import styles from "./RadioBtn.module.css";

export default function RadioBtn({ btnStyle }) {
  const [selectedOpt, setSelectedOpt] = useState(1); //default 선택1에 checked
  const optionHandler = (opt) => {
    setSelectedOpt(opt);
  };
  const radioOptions = [
    { id: 1, option: "선택1" },
    { id: 2, option: "선택2" },
    { id: 3, option: "선택3" },
  ];

  return (
    <div className={styles.contents}>
      <form className={styles.form}>
        {radioOptions.map((opt) => {
          return (
            <div className={styles.radio_wrap} key={opt.id}>
              <label className={styles.label}>
                <input
                  className={`${styles.radio_btn} ${styles[btnStyle]}`}
                  // 버튼의 모양이 다르기 때문에 props로 className을 다르게 지정하고, style을 다르게 적용한다.
                  type="radio"
                  value={opt.id}
                  checked={selectedOpt === opt.id}
                  //selectedOpt의 값과 value 값인 opt.id를 비교하여 같으면 checked가 true됨
                  onChange={() => optionHandler(opt.id)}
                />
                {opt.option}
              </label>
            </div>
          );
        })}
      </form>
      {selectedOpt === 3 && (
        <p className={styles.opt_text}>*선택시 텍스트가 표시됩니다.</p>
      )}
    </div>
  );
}
