import style from "./styles.module.css";

type HeadingProps = {
  children: string;
};

export const Heading = ({ children }: HeadingProps) => {
  return (
    <>
      <h1 className={style.heading}>{children}</h1>
    </>
  );
};
