import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Content } from "./style";

export function Dashboard() {
  return (
    <Content>
      <Summary/>
      <TransactionsTable/>
    </Content>
  )
} 