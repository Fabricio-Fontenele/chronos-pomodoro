import style from "./Heading.module.css";

type HeadingProps = {
  children: string;
};

export const Heading = ({ children }: HeadingProps) => {
  return (
    <>
      <h1 className={style.Heading}>{children}</h1>
    </>
  );
};
