import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de websites</td>
            <td className="deposit">R$1000,00</td>
            <td>Desenvolvimento</td>
            <td>01-02-2023</td>
          </tr>

          <tr>
            <td>Desenvolvimento de websites</td>
            <td className="withdraw">-R$1000,00</td>
            <td>Desenvolvimento</td>
            <td>01-02-2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
