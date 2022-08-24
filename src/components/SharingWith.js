import React, { useState, useEffect } from "react";
import { ModalAddAccount } from "./ModalAddAccount";
import "../styles/abstracts/sharingwith.scss";
import cardDebito from "../img/cardBank.png";
import { FaDollarSign } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SharingWith = () => {
  const [clients, setClients] = useState([]);
  const [data, setData] = useState({
    cards: [],
  });
  const [objPopup, setPopup] = useState({ visibility: false });
  const [totalAmount, setTotalAmount] = useState([]);
  const navigate = useNavigate();

  const getAllClients = () => {
    fetch("https://6305077894b8c58fd72a83cd.mockapi.io/people")
      .then((response) => response.json())
      .then((clients) => setClients(clients));
  };
  const maskifyCardsContact = (input) => {
    return input.replace(/.(?=.{3})/g, "*");
  };

  useEffect(() => {
    getAllClients();
  }, []);

  const totalToSplit = () => {
    fetch("https://6305077894b8c58fd72a83cd.mockapi.io/expenses")
      .then((response) => response.json())
      .then((expenses) => setTotalAmount(expenses));
  };
  console.log(totalAmount);

  useEffect(() => {
    totalToSplit();
  }, []);

  const handleChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.id;

    const { cards } = data;

    if (checked) {
      setData({
        cards: [...cards, value],
      });
    } else {
      setData({
        cards: cards.filter((e) => e !== value),
      });
    }
  };

  let total;
  const totalCheckList = () => {
    // const total = data.cards.length;
    total = data.cards.length;
    console.log(total);
  };

  const SplitExpenses = () => {

  };

  const onAdd = () => {
    let popupProduct = {};
    setPopup({ visibility: true, popupProduct });
  };

  const onClickHide = () => {
    getAllClients();
    setPopup({ visibility: false });
  };

  const redirectBack = () => {
    navigate("/movimientos");
  };

  return (
    <>
      <ModalAddAccount
        onClickCloseModal={onClickHide}
        visible={objPopup.visibility}
        attrProduct={objPopup.popupProduct}
      />
      <AiOutlineArrowLeft className="arrowBack" onClick={redirectBack} />
      <section className="containerClients">
        <p className="h1 d-flex justify-content-center tittle-sharing">
          2. Compartir con:
        </p>
        <section className="list-clients">
          {clients.map((item) => {
            return (
              <div key={item.id}>
                <div className="card baseSimple">
                  <div className="card-body d-flex flex-row justify-content-between  ">
                    <section className="mr-auto p-2">
                      <img
                        className="card-imgDebito"
                        src={cardDebito}
                        alt="img tarjeta"
                      />
                      <h5 className="card-title double">
                        {item.name} <span />{" "}
                        {maskifyCardsContact(item.cardNumber)}{" "}
                      </h5>
                      <h6 className="card-subtitle mb-2 text-muted double-upper">
                        {item.bank} <span /> {item.name}{" "}
                      </h6>
                    </section>
                    <section className="p-2">
                      <div className="form-check form-check-reverse check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={item.id}
                          onChange={handleChange}
                        />
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <div className="container-btn">
          <button className="btn-newperson" onClick={onAdd}>
            <FaDollarSign className="icon-dollar" />{" "}
            <p className="txt-btn">Nueva Cuenta</p>
          </button>
          <button className="btn-dg">
            {" "}
            <BsFillPeopleFill />{" "}
            <p className="txt-btn" onClick={totalCheckList}>
              Dividir Gastos
            </p>
          </button>
        </div>

        <div className="list-result">
          <h5 className="txt-res">
            Melissa Bracamonte <span> $400.00</span>
          </h5>
          <h5 className="txt-res">
            Daniela Miñon <span> $400.00</span>
          </h5>
          <h5 className="txt-res">
            Melissa Bracamonte <span> $400.00</span>
          </h5>
        </div>

        <div className="container-return">
          <button className="return">Volver al inicio</button>
        </div>
      </section>
    </>
  );
};

export default SharingWith;
