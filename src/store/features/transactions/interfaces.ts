export interface ITransaction {
  uuid: string;
  description: string;
  value: string;
  typeValue: string;
}

export interface IArrayTransactions {
  value: ITransaction[];
}
