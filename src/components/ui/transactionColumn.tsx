
import { ColumnDef } from "@tanstack/react-table"

export type Transaction = {
    amount : string,
    description: string,
    title: string,
    transactionTypes: string,
}
 
export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "transactionTypes",
    header: "Income/Expances",
  },
]