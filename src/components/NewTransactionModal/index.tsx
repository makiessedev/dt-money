import ReactModal from "react-modal";
import { Container } from "./styles";

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
      <Container>
        <h2>New Transaction</h2>

        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
}
