import { InputHTMLAttributes } from "react";
import { FieldPath, UseFormRegisterReturn } from "react-hook-form";

export interface IInputValues {
  description: string;
  value: string;
  typeValue: string;
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errors: string | undefined;
  register: (name: FieldPath<IInputValues>) => UseFormRegisterReturn;
}
