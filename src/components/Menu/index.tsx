import { History, House, Settings, Sun } from "lucide-react";
import style from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailableThemes = "dark" | "light";

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  const handleThemeToggle = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <nav className={style.menu}>
      <a
        className={style.menuLink}
        href="#"
        aria-label="Ir para home"
        title="Ir para a home"
      >
        <House size={24} />
      </a>
      <a
        className={style.menuLink}
        href="#"
        aria-label="Ver histórico"
        title="Ver histórico"
      >
        <History size={24} />
      </a>
      <a
        className={style.menuLink}
        href="#"
        aria-label="Ver configurações"
        title="Ver configurações"
      >
        <Settings size={24} />
      </a>
      <a
        className={style.menuLink}
        href="#"
        aria-label="Ativar modo noturno"
        title="Ativar modo noturno"
        onClick={handleThemeToggle}
      >
        <Sun size={24} />
      </a>
    </nav>
  );
};
