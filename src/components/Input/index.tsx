import { IInput, IInputValues } from "./interface";
import { FieldPath } from "react-hook-form";

export const Input = ({ label, errors, register, ...props }: IInput) => {
  return (
    <>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        {...register(props.id as FieldPath<IInputValues>)}
      />
      {errors && <span>Preencha corretamente</span>}
    </>
  );
};
