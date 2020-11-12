import React from 'react';
import DanceCard from '../components/dance_card';
import hiphop from '../img/hiphop.png';
import salsa from '../img/salsa.png';
import rumba from '../img/rumba.png'
import zumba from '../img/zumba.png';

//Hiphop
var ples1 = 'Hiphop';
var o_plesu1 = 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,  pain and trouble that are bound to ensue.';
var instruktor = 'Laza Stamenkovic'

var ples2 = 'Salsa';
var ples3 = 'Rumba';
var ples4 = 'Zumba';



const Dance = () =>(
    <div className="dance m_padding">
        <h2 className="dance__title">PLESOVI</h2>
        <p className="dance__subtitle">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias </p>
        <div className="dance__cards">
          <DanceCard  ples={ples1} o_plesu={o_plesu1} instruktor={instruktor} image={hiphop} />
          <DanceCard  ples={ples2} o_plesu={o_plesu1} instruktor={instruktor} image={salsa} />
          <DanceCard  ples={ples3} o_plesu={o_plesu1} instruktor={instruktor} image={rumba}/>
          <DanceCard  ples={ples4} o_plesu={o_plesu1} instruktor={instruktor} image={zumba} />
        </div>
    </div>
);

export default Dance;