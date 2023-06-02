import React, { useState } from "react";
import Select from "react-select";
import Grid from "../Grid";
import * as C from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [quant, setQuant] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const options = [
    { value: "Valor-Inicial", label: "(!) Valor Inicial (!)" },
    { value: "TROCO", label: "(!) Troco (!)" },
    { value: "Biscoito-Sorte", label: "Biscoito da Sorte" },
    { value: "Bloco-Notas", label: "Bloco de Notas" },
    { value: "B-Notas-Imã", label: "Bloco de Notas" },
    { value: "Brinde", label: "Brinde Marcador" },
    { value: "Caixa-Presente", label: "Caixa com Presente" },
    { value: "Imã", label: "Imã de Geladeira" },
    { value: "Marcador-PG", label: "Marcador de Página" },
    { value: "Porta-Lápis(G)", label: "Porta Lápis (G)" },
    { value: "Porta-Treco(M)", label: "Porta Treco (M)" },
    { value: "Quadro", label: "Quadro Pintura" },
    { value: "Coelho(1)", label: "Coelho (1)" },
    { value: "Coelho(2)", label: "Coelho (2)" },
    { value: "Pendulo", label: "Pendulo" }
  ];

  const quantOptions = Array.from({ length: 20 }, (_, index) => ({
    value: index + 1,
    label: String(index + 1)
  }));

  const handleSave = () => {
    if (!desc || !amount || !quant) {
      alert("Informe o Produto/Troco, a Quantidade e o Valor!");
      return;
    } else if (amount < 1) {
      alert("O Valor tem que ser Positivo!");
      return;
    } else if (quant < 1) {
      alert("A Quantidade tem que ser Positiva!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      quant: quant,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
    setQuant("");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Produto/Troco</C.Label>
          <Select
            value={options.find(option => option.value === desc)}
            options={options}
            onChange={option => setDesc(option.value)}
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Quantidade</C.Label>
          <Select
            value={quantOptions.find(option => option.value === quant)}
            options={quantOptions}
            onChange={option => setQuant(option.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;