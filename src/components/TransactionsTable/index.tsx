import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">12.000€</td>
            <td>Desenvolviemnto</td>
            <td>20-03-2022</td>
          </tr>
          <tr>
            <td>Renda de Casa</td>
            <td className="withdraw">300.00 €</td>
            <td>Casa</td>
            <td>12-03-2022</td>
          </tr>
          <tr>
            <td>Learning React</td>
            <td className="withdraw">250.00 €</td>
            <td>Educação</td>
            <td>10-03-2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
