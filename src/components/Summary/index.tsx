import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";

export function Summary(){
  return(
  <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>5.000 €</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="" />
        </header>
        <strong>-2.000 €</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>
        <strong>3.000 €</strong>
      </div>
  </Container>
  );
}
