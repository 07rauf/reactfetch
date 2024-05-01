import React from 'react';

function Card(props) {
    const { name, phone, card } = props
  return (
    <div className={(card&&phone&&name)? 'gray' : 'yellow'} style={{ width: "35rem" }}>
    <div className="card-body">
      <h5 className="card-title">Имя клиента: {name?name:'anoniums'}</h5>
     {phone? <h6 className="card-subtitle mb-2 text-muted">Телефон: {phone}</h6>:''}
      <p className="card-text">Номер карты: {card?card:'Card is not specified'}</p>
    </div>
  </div>
    
  );
}
    
export default Card;
