import React from "react";
import styles from "./Navbar.module.css";
import NavbarList from "./NavbarList";

export default function Navbar() {
  // const title = ["대메뉴", "대메뉴2"];
  const menu = [
    {
      title: "대메뉴1",
      list: [
        { subTitle: "소메뉴1", id: 1 },
        { subTitle: "소메뉴2", id: 2 },
      ],
    },
    {
      title: "대메뉴2",
      list: [
        { subTitle: "소메뉴3", id: 3 },
        { subTitle: "소메뉴4", id: 4 },
      ],
    },
  ];
  // const subTitle = "소메뉴";
  return (
    <div className={styles.contents}>
      {menu.map((m, idx) => (
        <NavbarList title={m.title} list={m.list} key={idx} />
      ))}

      {/* <NavbarList title={title} /> */}
    </div>
  );
}
