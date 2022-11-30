import { useSelector } from "react-redux";
import { CreateTransaction } from "../../components/CreateTransaction";
import { RootState } from "../../store";
import { ITransaction } from "../../store/features/transactions/interfaces";

export const DashboardPage = () => {
  const transactions = useSelector(
    (state: RootState) => state.transaction.value,
  );
  return (
    <>
      <CreateTransaction />
      <ul>
        {transactions.map(({ uuid }: ITransaction) => {
          return <li key={uuid}>teste</li>;
        })}
      </ul>
    </>
  );
};
