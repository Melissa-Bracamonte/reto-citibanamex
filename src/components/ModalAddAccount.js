import React, { useEffect } from "react";
import "../styles/abstracts/modalAddAccount.scss";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export function ModalAddAccount({ attrProduct, onClickCloseModal, visible }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("name", attrProduct?.name);
    setValue("card", attrProduct?.card);
    setValue("bank", attrProduct?.bank);
  }, [attrProduct]);

  const onSubmit = async (data) => {
    saveAccount({
      ...attrProduct,
      name: data.name,
      cardNumber: data.card,
      bank: data.bank,
    });
  };

  const saveAccount = (newAccount) => {
    fetch("https://6305077894b8c58fd72a83cd.mockapi.io/people", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAccount),
    })
      .then((response) => response.json())
      .then((addedAccount) => {
        console.log(addedAccount);
        onClickCloseModal();
      });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Cuenta agregada",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return visible ? (
    <>
      <div id="myModal" className="modal">
        <div className="modalContent">
          <span className="close" onClick={onClickCloseModal}>
            &times;
          </span>
          <section className="titleModal">Agregar cuenta</section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section className="AllInputs">
              <div>
                <label className="inputTitle">Nombre</label>
                <input
                  type={"text"}
                  className="inputModal"
                  id="name"
                  placeholder="Nombre del titular de la cuenta"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                ></input>
                {errors.name && (
                  <p className="errorMessage">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="inputTitle">Tarjeta o cuenta</label>
                <input
                  type={"text"}
                  className="inputModal"
                  id="card"
                  placeholder="Número de tarjeta, cuenta o CLABE"
                  {...register("card", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                ></input>
                {errors.card && (
                  <p className="errorMessage">{errors.card.message}</p>
                )}
              </div>

              <div>
                <label className="inputTitle">Banco</label>
                <input
                  type={"text"}
                  className="inputModal"
                  id="bank"
                  placeholder="Nombre del banco"
                  {...register("bank", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                ></input>
                {errors.bank && (
                  <p className="errorMessage">{errors.bank.message}</p>
                )}
              </div>
            </section>
            <section className="areaSaveButton">
              <button type="submit" className="saveButton">
                Agregar
              </button>
            </section>
          </form>
        </div>
      </div>
    </>
  ) : null;
}
