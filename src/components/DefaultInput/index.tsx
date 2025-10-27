import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export const DefaultInput = ({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) => {
  return (
    <>
      {labelText && <label htmlFor={id}> {labelText} </label>}
      <input id={id} type={type} {...rest} className={styles.input} />
    </>
  );
};
