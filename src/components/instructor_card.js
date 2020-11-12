import React, { Component } from 'react';
class instructor_card extends Component {
    state = { 
        isNumberClicked: false
     }

     handleNumber = () => {
        this.setState({ isNumberClicked: !this.state.isNumberClicked });
      };

      
    render() { 
        return ( 
            <div className="instructor_card">
            <img src={this.props.instructorImage} alt=""/>
            <h3 className="instructor_card__title">{this.props.instructorName}</h3>
            <p className="instructor_card__role">{this.props.instuctorRole}</p>
            <p className="instructor_card__desc">{this.props.instructorDesc}</p>
            <div className="instructor_card__icons">
            <a href="#" ><i class="fab fa-2x fa-facebook-square"></i></a>
            <a className="mobilePhoneNumber" href={this.props.instructorPhone}><i class="fas fa-2x fa-phone-square"></i></a>
            <a onClick={this.handleNumber} className={this.state.isNumberClicked ? "desktopPhoneNumber desktopPhoneNumberActive" : "desktopPhoneNumber"}><i class="fas fa-2x fa-phone-square"></i></a>
            <a href="#"><i class="fab fa-2x fa-instagram-square"></i></a>
            </div>
            <div className={this.state.isNumberClicked ? "desktopInstructorNumber desktopInstructorNumberClicked" : "desktopInstructorNumber"}><p>{this.props.instructorPhoneDesktop}</p></div>
           
        </div>
         );
    }
}
 
export default instructor_card;

