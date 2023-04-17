import ReactModal from "react-modal";

interface NewTransationModalPros {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransationModalPros) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>New Transaction</h2>
    </ReactModal>
  );
}
