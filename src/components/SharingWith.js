import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ModalAddAccount } from "./ModalAddAccount";
import "../styles/abstracts/sharingwith.scss";
import cardDebito from "../img/cardBank.png";
import { FaDollarSign } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdQrCode } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useLocation } from "react-router";
import { TiGroup } from "react-icons/ti";

const SharingWith = () => {
  const [clients, setClients] = useState([]);
  const [totalDivision, setTotalDivision] = useState();
  const { state } = useLocation();
  const [total, setTotal] = useState();
  const [viewTotal, setViewTotal] = useState(false);
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
    const selectInfo = state.amountTopay;
    setTotalAmount(selectInfo.toFixed(2));
  };

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
  const divisionCuenta = (total, totalToSplit) => {
    let division = 0;
    division = totalToSplit / (total + 1);

    setTotalDivision(division.toFixed(2));
    return division;
  };

  const totalCheckList = () => {
    const total = data.cards.length;
    setTotal(total);
    setViewTotal(true);
    console.log(divisionCuenta(total, state.amountTopay));
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

  const redirectCodi = () => {
    navigate("/codi", {
      state: {
        id: state.id,
        expenseName: state.expenseName,
        date: state.date,
        amountTopay: state.amountToPay,
        totalDivision: totalDivision,
      },
    });
  };

  return (
    <>
      <ModalAddAccount
        onClickCloseModal={onClickHide}
        visible={objPopup.visibility}
        attrProduct={objPopup.popupProduct}
      />
      <div className="icon-top">
        <AiOutlineArrowLeft className="arrowBack" onClick={redirectBack} />
      </div>
      <section className="containerClients">
        <p className="h1 d-flex justify-content-center tittle-sharing">
          2. Compartir con:
        </p>
        <section className="list-clients">
          {clients.map((item) => {
            return (
              <div key={item.id}>
                <div className="card baseSimple">
                  <div className="card-body d-flex flex-row justify-content-between p-1">
                    <section className="card-inf mr-auto p-0">
                      <img
                        className="card-imgDebito"
                        src={cardDebito}
                        alt="img tarjeta"
                      />
                      <div className="card-data">
                        <h5 className="card-title  double">
                          {item.name} <br />{" "}
                          {maskifyCardsContact(item.cardNumber)}{" "}
                        </h5>
                        <h6 className="card-subtitle mb-1 text-muted double-upper">
                          {item.bank} /<span /> {item.name}{" "}
                        </h6>
                      </div>
                    </section>
                    <section className="p-2 ">
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
        {viewTotal === true && (
          <div className="card result">
            <div className="card-body d-flex flex-row justify-content-between p-1 linea">
              <section className="mr-auto p-1 ">
                <TiGroup className="icon-people" />{" "}
                <h5 className="card-title"> {total + 1} personas</h5>
              </section>
              <section className="p-1 d-flex flex-column ">
                <p className="card-text txt-res">${totalDivision}</p>
              </section>
            </div>
            <div className="card-body d-flex flex-row justify-content-between p-1">
              <section className="mr-auto p-1">
                <h5 className="card-title total">Total</h5>
              </section>
              <section className="p-1 d-flex flex-column ">
                <p className="card-text txt-res">${totalAmount}</p>
              </section>
            </div>
          </div>
        )}
        <div className="container-return">
          <button className="return">
            {" "}
            <MdQrCode />{" "}
            <p className="txt-btn" onClick={redirectCodi}>
              Generar CoDi
            </p>
          </button>
        </div>
      </section>
    </>
  );
};

export default SharingWith;
