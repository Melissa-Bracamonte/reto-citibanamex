import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ModalAddAccount } from "./ModalAddAccount";
import "../styles/abstracts/category.scss";
import cardDebito from "../img/cardBank.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiQuestionMark } from "react-icons/bi";
import hogar from "../img/hogar.png";
import trasnporte from "../img/transporte.png";
import bienestar from "../img/bienestar.png";
import salud from "../img/salud.png";
import educacion from "../img/educacion.png";
import mascotas from "../img/mascotas.png";

const Category = () => {
  const [clients, setClients] = useState([]);
  const [totalDivision, setTotalDivision] = useState();

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
  const divisionCuenta = (total) => {
    let division = 0;

    division = 800 / total + 1;

    setTotalDivision(division);
    return division;
  };
  const viewTransaction = () => {
    navigate("/movimientos");
  };
  const totalCheckList = () => {
    const total = data.cards.length;
    console.log(total);
    console.log(divisionCuenta(total));
  };

  const onAdd = () => {
    let popupProduct = {};
    setPopup({ visibility: true, popupProduct });
  };

  const onClickHide = () => {
    getAllClients();
    setPopup({ visibility: false });
  };

  const redirectHome = () => {
    navigate("/");
  };
  const redirectInformation = () => {
    navigate("/informacion");
  };
  return (
    <>
      <ModalAddAccount
        onClickCloseModal={onClickHide}
        visible={objPopup.visibility}
        attrProduct={objPopup.popupProduct}
      />
      <AiOutlineArrowLeft className="arrowBack" onClick={redirectHome} />
      <BiQuestionMark className="question" onClick={redirectInformation} />
      <section className="container-cat">
        <p className="h1 d-flex justify-content-center tittle-sharing">
          1. Selecciona tu categoria:
        </p>
        <section className="list-cat">
          <div className="ctn-icon">
            <img className="icon-cat" src={hogar} alt="icon" />
            <img className="icon-cat" src={trasnporte} alt="icon" />
            <img className="icon-cat" src={bienestar} alt="icon" />
            <img className="icon-cat" src={salud} alt="icon" />
            <img className="icon-cat" src={educacion} alt="icon" />
            <img className="icon-cat" src={mascotas} alt="icon" />
          </div>
        </section>

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
        <div className="container-add">
          <button className="add" onClick={viewTransaction}>
            <p className="txt-btn">Agregar</p>
          </button>
        </div>
      </section>
    </>
  );
};

export default Category;
