import React from 'react';
import InstructorCard from '../components/instructor_card';
import instuctorImage1 from '../img/1.jpg'
import instuctorImage2 from '../img/2.jpg'
import instuctorImage3 from '../img/3.jpg'
import instuctorImage4 from '../img/4.jpg'
import instructorsBg from '../img/instructors_bg.png'

//Instructors info
var instructorName1 = 'Laza Stamenkov';
var instuctorRole1 = 'War Thunder Pocetnik';
var instructorDesc1 = 'Kao mali uvek su ga zanimali tenkovi, ali sada ima priliku da se dokaze kao najbolji war thunder player';
var instructorPhone1 = 'tel:1234';

var instructorName1 = 'Laza Stamenkov';
var instuctorRole1 = 'War Thunder Pocetnik';
var instructorDesc1 = 'Kao mali uvek su ga zanimali tenkovi, ali sada ima priliku da se dokaze kao najbolji war thunder player';
var instructorPhone1 = 'tel:1234';

var instructorName1 = 'Laza Stamenkov';
var instuctorRole1 = 'War Thunder Pocetnik';
var instructorDesc1 = 'Kao mali uvek su ga zanimali tenkovi, ali sada ima priliku da se dokaze kao najbolji war thunder player';
var instructorPhone1 = 'tel:1234';

var instructorName1 = 'Laza Stamenkov';
var instuctorRole1 = 'War Thunder Pocetnik';
var instructorDesc1 = 'Kao mali uvek su ga zanimali tenkovi, ali sada ima priliku da se dokaze kao najbolji war thunder player';
var instructorPhone1 = 'tel:1234';
var instructorPhoneDesktop1 = '069/223-213-32'

const instructors = () => (

    <div className="instructors m_padding">
        <h2 className="instructors__title">INSTRUKTORI</h2>
        <p className="instructors__subtitle">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias </p>
        <div className="instructors__cards">
            <InstructorCard instructorImage={instuctorImage1} instructorName={instructorName1} instuctorRole={instuctorRole1} instructorDesc={instructorDesc1} instructorPhone={instructorPhone1} instructorPhoneDesktop={instructorPhoneDesktop1}/>
            <InstructorCard instructorImage={instuctorImage2} instructorName={instructorName1} instuctorRole={instuctorRole1} instructorDesc={instructorDesc1} instructorPhone={instructorPhone1} instructorPhoneDesktop={instructorPhoneDesktop1}/>
            <InstructorCard instructorImage={instuctorImage3} instructorName={instructorName1} instuctorRole={instuctorRole1} instructorDesc={instructorDesc1} instructorPhone={instructorPhone1} instructorPhoneDesktop={instructorPhoneDesktop1}/>
            <InstructorCard instructorImage={instuctorImage4} instructorName={instructorName1} instuctorRole={instuctorRole1} instructorDesc={instructorDesc1} instructorPhone={instructorPhone1} instructorPhoneDesktop={instructorPhoneDesktop1}/>
        </div>
        <img src={instructorsBg} alt="" className="instructors__desktopBg"/>
    </div>

);


export default instructors;