import { History, House, Settings, Sun } from "lucide-react";
import style from "./styles.module.css";

export const Menu = () => {
  return (
    <nav className={style.menu}>
      <a className={style.menuLink} href="#">
        <House size={24} />
      </a>
      <a className={style.menuLink} href="#">
        <History size={24} />
      </a>
      <a className={style.menuLink} href="#">
        <Settings size={24} />
      </a>
      <a className={style.menuLink} href="#">
        <Sun size={24} />
      </a>
    </nav>
  );
};
