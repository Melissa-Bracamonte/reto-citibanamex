import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/abstracts/transactions.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Transactions = () => {
  const [transaction, setTransaction] = useState([]);
  // const [id, setId] = useState();
  const navigate = useNavigate();

  const getAllTransaction = () => {
    fetch("https://6305077894b8c58fd72a83cd.mockapi.io/accountStatus")
      .then((response) => response.json())
      .then((transaction) => setTransaction(transaction));
  };

  useEffect(() => {
    getAllTransaction();
  }, []);

  const saveAmountToPay = (amountToPay) => {
    fetch("https://6305077894b8c58fd72a83cd.mockapi.io/expenses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(amountToPay),
    })
      .then((response) => response.json())
      .then((addedExpense) => {
        console.log(addedExpense);
      });
  };

  const redirectAccounts = (id, expenseName, date, amountToPay) => {
    navigate("/compartir", { state: { id: id, expenseName: expenseName, date:date, amountTopay:amountToPay } });
    // console.log(id);
    // setId(id);
    // saveAmountToPay({
    //   expenseName: expenseName,
    //   date: date,
    //   amountToPay: amountToPay,
    //   id: id
    // });
  };

  const redirectBack = () => {
    navigate("/");
  };

  return (
    <>
      <AiOutlineArrowLeft className="arrowBack" onClick={redirectBack} />
      <section className="containerTransactions">
        <p className="h2 d-flex justify-content-center title">
          1.Selecciona tu movimiento
        </p>
        <section className="allTransactions">
          {transaction.map((item) => {
            return (
              <div key={item.id}>
                <div className="card">
                  <div className="card-body d-flex flex-row justify-content-between">
                    <section className="mr-auto p-2">
                      <h5 className="card-title">{item.expenseName}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {item.date}
                      </h6>
                    </section>
                    <section className="p-2 d-flex flex-column">
                      <p className="card-text">${item.amountToPay}</p>
                      <button
                        type="button"
                        className="btnShare"
                        onClick={() => {redirectAccounts(item.id, item.expenseName, item.date, item.amountToPay,)}}
                      >
                        Dividir
                      </button>
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

export default Transactions;
