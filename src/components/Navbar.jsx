import React, { useState } from "react";
import styles from "./Navbar.module.css";
import NavbarList from "./NavbarList";

export default function Navbar() {
  const [selected, setSelected] = useState(1);
  const selectedHandle = (id) => {
    setSelected(id);
  };
  const menu = [
    {
      title: "대메뉴1",
      list: [
        { subTitle: "소메뉴1", id: 1, path: "/" },
        { subTitle: "소메뉴2", id: 2, path: "/sub2" },
      ],
    },
    {
      title: "대메뉴2",
      list: [
        { subTitle: "소메뉴3", id: 3, path: "/sub3" },
        { subTitle: "소메뉴4", id: 4, path: "/sub4" },
      ],
    },
  ];
  return (
    <div className={styles.contents}>
      {menu.map((m, idx) => (
        <NavbarList
          title={m.title}
          list={m.list}
          key={idx}
          selected={selected}
          selectedHandle={selectedHandle}
        />
      ))}
    </div>
  );
}
