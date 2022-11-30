import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { IInputValues } from "../Input/interface";
import { createTransaction } from "../../store/features/transactions/transactionSlice";

export const CreateTransaction = () => {
  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    description: yup.string().required(),
    value: yup.number().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IInputValues>({
    resolver: yupResolver(formSchema),
  });

  const create = (data: any) => {
    dispatch(createTransaction({ uuid: uuidv4(), ...data }));
  };

  return (
    <form onSubmit={handleSubmit(create)}>
      <Input
        id="description"
        type="text"
        label="Descrição"
        placeholder="Digite aqui sua descrição"
        register={register}
        errors={errors.description?.message}
      />
      <span>Ex: Compra de roupas</span>

      <div>
        <Input
          id="value"
          placeholder="1"
          type="number"
          label="Valor"
          register={register}
          errors={errors.value?.message}
        />

        <label htmlFor="typeValue">Tipo de valor</label>
        <select id="typeValue" {...register("typeValue")}>
          <option value="Prohibited">Entrada</option>
          <option value="exit">Saída</option>
        </select>
      </div>

      <button type="submit">Inserir valor</button>
    </form>
  );
};
