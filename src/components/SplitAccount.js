import React from "react";

const SplitAccount = ({ data}) => {
    const choosenAccount = data.cards;
    console.log(choosenAccount);

    // <span className="input-label">{ subjects[item].name }</span>

  return (
    <section>
      {Object.values(choosenAccount).map((item, i) => {
        return (
            <div key={i}>
          <div className="card result">
            <div className="card-body d-flex flex-row justify-content-between p-1">
              <section className="mr-auto p-1">
                <h5 className="card-title">{item}</h5>
                <h6 className="card-subtitle mb-2 text-muted">25/07</h6>
              </section>
              <section className="p-1 d-flex flex-column ">
                <p className="card-text txt-res">$400.00</p>
              </section>
            </div>
            {/* <div className="card-body d-flex flex-row justify-content-between p-1">
              <section className="mr-auto p-1">
                <h5 className="card-title">Melissa Bracamonte</h5>
                <h6 className="card-subtitle mb-2 text-muted">25/07</h6>
              </section>
              <section className="p-1 d-flex flex-column ">
                <p className="card-text txt-res">$400.00</p>
              </section>
            </div> */}
            <div className="card-body d-flex flex-row justify-content-between p-1">
              <section className="mr-auto p-1">
                <h5 className="card-title">Total</h5>
                <h6 className="card-subtitle mb-2 text-muted"></h6>
              </section>
              <section className="p-1 d-flex flex-column ">
                <p className="card-text txt-res">$800.00</p>
              </section>
            </div>
          </div>
          </div>
        );
      })}
    </section>
  );
};

export default SplitAccount;
