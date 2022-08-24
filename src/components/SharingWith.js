import React, { useState, useEffect } from "react";
import '../styles/abstracts/sharingwith.scss'
const SharingWith = () => {
  const [clients, setClients] = useState([]);
  const [checked, setChecked] = useState(false);
  // const [checked, setChecked] = useState(false);
  const [data, setData] =useState({
    cards:[],
    // response: [],
  })

  const getAllClients = () => {
    fetch("https://6305077894b8c58fd72a83cd.mockapi.io/people")
      .then((response) => response.json())
      .then((clients) =>setClients(clients));
  };

  useEffect(() => {
    getAllClients();
  }, []);

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { cards } = data;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setChecked(!checked);
      setData({
        cards: [...cards, value],
        // response: [...cards, value]
      
      });
    }else {
      setData({
        cards: cards.id.filter((e) => e !== value),
        // response: cards.filter((e) => e !== value)
       
      });
    }
  }
  // const handleChange = () => {
  //   setChecked(!checked);
  // };

  // const hadleAddCard = (card) => {
  //   setData({...data, cards:[...data.cards, card]})
  // }

  // const handleChange = event => {
  //   if (event.target.checked) {

  //     setChecked(!checked);
  //     setData({...data, cards:[...data.cards]})
  //   } else {
  //     // console.log('⛔️ Checkbox is NOT checked');
  //   }
  // };

  return (
    <section className="containerClients">
      <p className="h1 d-flex justify-content-center tittle-sharing">2. Compartir con:</p>
      <section className="list-clients">
        {clients.map((item) => {
          return (
            <div key={item.id}>
              <div className="card baseSimple">
                <div className="card-body d-flex flex-row justify-content-between  ">
                  <section className="mr-auto p-2">
                    <h5 className="card-title double">{item.name} <span /> {item.cardNumber} </h5>
                    <h6 className="card-subtitle mb-2 text-muted double-upper">{item.bank} <span /> {item.name} </h6>
                  </section>
                  <section className="p-2">
                    <div className="form-check form-check-reverse check">
                      <input className="form-check-input" type="checkbox" id="reverseCheck1" 
                       onChange={handleChange}
                      //  checked={checked}
                      // onChange={(e)=>{
                      //   e.preventDefault()
                      //   handleChange()
                      //   hadleAddCard(item)}}
                      //de aqui hacia abajo otro intento fallido
          //               value={checked}
          // onChange={handleChange} 
          />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <div className='container-btn'>
        <button className='btn-newperson'>$ Nueva Persona</button>
        <button className='btn-dg'>Dividir Gastos</button>
      </div>
    </section>

  );
}

export default SharingWith;