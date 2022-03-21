import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNeTransactionModalOpen, setIsNeTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransacionModal() {
    setIsNeTransactionModalOpen(true);
  }

  function handleCloseNewTransacionModal() {
    setIsNeTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransacionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNeTransactionModalOpen}
        onRequestClose={handleCloseNewTransacionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
