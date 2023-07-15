import React, { useState } from "react";
import styles from "./NavbarList.module.css";
import { RxTriangleUp } from "react-icons/rx";

export default function NavbarList({ title, list, selected, selectedHandle }) {
  const [toggle, setToggle] = useState(false);
  const toggleMenuHandler = () => {
    setToggle(!toggle);
  };
  const subTitleHandler = (id) => {
    selectedHandle(id);
  };
  return (
    <>
      <div className={styles.menu_wrap} onClick={toggleMenuHandler}>
        <span>{title}</span>
        <RxTriangleUp className={!toggle ? `${styles.menu_icon}` : ""} />
      </div>
      <ul
        className={
          !toggle ? `${styles.subTitle_wrap_active}` : `${styles.subTitle_wrap}`
        }
      >
        {list.map((sub) => {
          return (
            <li
              className={
                selected === sub.id
                  ? `${styles.subTitle_list_active}`
                  : `${styles.subTitle_list}`
              }
              key={sub.id}
              onClick={() => subTitleHandler(sub.id)}
            >
              <p className={styles.subTitle_list_txt}>{sub.subTitle}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
