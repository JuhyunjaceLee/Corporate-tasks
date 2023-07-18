import React from "react";
import styles from "./SaveBtn.module.css";

export default function SaveBtn({ data }) {
  const url = `https://api-jobtest.json2bot.chat`;
  const handleSave = () => {
    const requestData = {
      data: data,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {});
  };
  return (
    <div>
      <button className={styles.save_btn} type="submit" onClick={handleSave}>
        저장
      </button>
    </div>
  );
}
