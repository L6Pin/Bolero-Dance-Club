import React from 'react';


const danceCard = (props) => (
    <div className="danceCard ">
       <div>
       <h3 className="danceCard__title">{props.ples}</h3>
        <p className="danceCard__subtitle">{props.o_plesu}</p>
       </div>
        <p className="danceCard__instructor">Instruktor:<span>{props.instruktor}</span></p>
        <img className="danceCard__bgImg" src={props.image} alt=""/>
    </div>

);

export default danceCard;