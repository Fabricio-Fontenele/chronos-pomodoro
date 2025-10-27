import type React from "react";

type DefaultInputProps = {
  id: string;
} & React.ComponentProps<"input">;

export const DefaultInput = ({ id, type }: DefaultInputProps) => {
  return (
    <>
      <label htmlFor="input">task</label>
      <input id={id} type={type} />
    </>
  );
};
