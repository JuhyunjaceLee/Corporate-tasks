import React, { useEffect, useState } from "react";
import styles from "./SubTitlePageCommon.module.css";
import SaveBtn from "../components/SaveBtn";
import Calendar from "../components/Calendar";
import RadioBtn from "../components/RadioBtn";

export default function Homepage() {
  const [data, setData] = useState();
  const url = `https://api-jobtest.json2bot.chat`;

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  }, []);
  return (
    <div className={styles.contents}>
      <div className={styles.section}>
        <h1 className={styles.home_title}>타이틀</h1>
        <div className={styles.home_main_info}>
          <div className={styles.info_wrap}>
            <p className={styles.info_title}>정보1</p>
            <p className={styles.info_contents}>정보 내용</p>
            {/* <p className={styles.info_contents}>{data.data.info1}</p> */}
          </div>
          <div className={styles.info_wrap}>
            <p className={styles.info_title}>정보2</p>
            <input
              className={`${styles.info_contents} ${styles.info_input}`}
              type="text"
            />
          </div>
          <div className={styles.info_wrap}>
            <p className={styles.info_title}>정보3</p>
            <p className={styles.info_contents}>정보 내용</p>
          </div>
          <div className={styles.info_wrap}>
            <p className={styles.info_title}>정보4</p>
            <input
              className={`${styles.info_contents} ${styles.info_input}`}
              type="text"
            ></input>
          </div>
          <div className={styles.info_wrap}>
            <p className={styles.info_title}>날짜</p>
            <Calendar />
          </div>
          <div className={styles.info_wrap}>
            <p className={styles.info_title}>정보5</p>
            <RadioBtn btnStyle="btn_1" isText={true} />
            {/* props로 className을 넘겨준다. */}
            {/* 정보5에만 text를 표시해야하므로, true값을 갖는 props 하나를 넘겨준다. */}
          </div>
          <div className={styles.info_wrap}>
            <p className={styles.info_title}>정보6</p>
            <RadioBtn btnStyle="btn_2" />
          </div>
        </div>
        <SaveBtn data={data} />
      </div>
    </div>
  );
}
