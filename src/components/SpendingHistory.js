import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../styles/abstracts/SpendingHistory.scss";

const SpendingHistory = () => {
  const [spending, setSpending] = useState([]);
  const navigate = useNavigate();

  const getSpendingHistory = () => {
    fetch("https://6305077894b8c58fd72a83cd.mockapi.io/expenses")
      .then((response) => response.json())
      .then((transaction) => setSpending(transaction));
  };

  useEffect(() => {
    getSpendingHistory();
  }, []);

  const redirectBack = () => {
    navigate("/movimientos");
  };

  return (
    <>
      <AiOutlineArrowLeft className="arrowBack" onClick={redirectBack} />
      <section className="containerTransactions">
        <p className="h2 d-flex justify-content-center titleHeader">
          Historial de gastos
          <br />
          compartidos
        </p>
        <section className="allTransactions">
          {spending.map((item) => {
            return (
              <div key={item.id}>
                <div className="card">
                  <div className="card-body d-flex flex-row justify-content-between">
                    <section className="mr-auto p-0 d-flex flex-column">
                      <h5 className="card-title">{item.expenseName}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {item.date}
                      </h6>
                    </section>
                    <section className="p-0 d-flex flex-column">
                      <p className="card-text amountCard">
                        ${item.amountToPay}
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default SpendingHistory;
