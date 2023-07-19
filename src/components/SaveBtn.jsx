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
      //통신을 할땐, JSON형태로 보내야하기 때문에, data를 JSON String으로 변환해준다.
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
          //서버에서 보내준 res를 Object 형태로 변환한다.
        } else if (res.status === 400) {
          throw new Error("Unexpected Http Status Code");
          //400 에러일 때, "Unexpected Http Status Code" 메세지를 내보낸다.
        } else if (res.status === 500) {
          throw new Error("Unexpected Http Status Code");
          //500 에러일 때, "Unexpected Http Status Code" 메세지를 내보낸다.
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div>
      <button className={styles.save_btn} type="submit" onClick={handleSave}>
        저장
      </button>
    </div>
  );
}
