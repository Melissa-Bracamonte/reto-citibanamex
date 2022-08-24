import React, { useState, useEffect } from "react";
import "../styles/abstracts/sharingwith.scss";
import { ModalAddAccount } from "./ModalAddAccount";

const SharingWith = () => {
  const [clients, setClients] = useState([]);
  const [objPopup, setPopup] = useState({ visibility: false });

  const getAllClients = () => {
    fetch("https://6305077894b8c58fd72a83cd.mockapi.io/people")
      .then((response) => response.json())
      .then((clients) => setClients(clients));
  };

  useEffect(() => {
    getAllClients();
  }, []);

  const onAdd = () => {
    let popupProduct = {};
    setPopup({ visibility: true, popupProduct });
  };
  const onClickHide = () => {
    getAllClients();
    setPopup({ visibility: false });
  };

  return (
    <>
      <ModalAddAccount
        onClickCloseModal={onClickHide}
        visible={objPopup.visibility}
        attrProduct={objPopup.popupProduct}
      />

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
                      <h5 className="card-title double">
                        {item.name} <span /> {item.cardNumber}{" "}
                      </h5>
                      <h6 className="card-subtitle mb-2 text-muted double-upper">
                        {item.bank} <span /> {item.name}{" "}
                      </h6>
                    </section>
                    <section className="p-2">
                      <div class="form-check form-check-reverse check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="reverseCheck1"
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
            $ Nueva Persona
          </button>
          <button className="btn-dg">Dividir Gastos</button>
        </div>
      </section>
    </>
  );
};

export default SharingWith;
