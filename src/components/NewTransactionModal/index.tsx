import ReactModal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outComeImg from "../../assets/outcome.svg";
import { Container } from "./styles";
import { TransactionContainer } from "./styles";

interface NewTransationModalPros {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransationModalPros) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={"react-modal-overlay"}
      className={"react-modal-content"}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container>
        <h2>New Transaction</h2>

        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />

        <TransactionContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrda" />
            <span>Entrada</span>
          </button>

          <button type="button">
            <img src={outComeImg} alt="Saida" />
            <span>Saida</span>
          </button>
        </TransactionContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
}
