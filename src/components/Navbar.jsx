import React from "react";
import styles from "./Navbar.module.css";
import NavbarList from "./NavbarList";

export default function Navbar() {
  // const title = ["대메뉴", "대메뉴2"];
  const menu = [
    { title: "대메뉴", list: ["소제목", "소제목1"] },
    { title: "대메뉴2", list: ["소제목3", "소제목4"] },
  ];
  // const subTitle = "소메뉴";
  return (
    <div className={styles.contents}>
      {menu.map((m, idx) => (
        <NavbarList title={m.title} key={idx} list={m.list} />
      ))}

      {/* <NavbarList title={title} /> */}
    </div>
  );
}
