import React from 'react';
import '../assets/css/proservices.css'
import appointment from '../assets/images/appointment.png'
import arrowimg from '../assets/images/group-314.png'
import rigthsign from '../assets/images/vector-right.png'
import rightsignBrown from '../assets/images/vector-right-brown.png'

const ProServicesContainer = () => {
  return (
  <div Class="container mainContainer">
        <div Class="row innerContainer">
            <div Class="col-sm-12 left-Container">
              <div className='pro-services'>PRO Services</div>
              <div className='appointment'>Make an appointment with <strong>Advocates and Legal</strong><br/> consultancy, Today! </div>
                <div className='appointment-text'>
                <div className='right-sign'>
                    <img src={rigthsign} alt="right" />
                    <img src={rigthsign} alt="right" />
                    <img src={rigthsign} alt="right" />
                    <img src={rigthsign} alt="right" />  
                  </div>
                  <div className='appointment-grp'>
                    <img src={appointment} alt="appointment" />
                  </div>
                  <div className='arrow-img'>
                    <img src={arrowimg} alt="appointment" />
                  </div>
              </div>
              
            </div>
           

            <div Class="col-sm-12 right-Container">
            <div className='legal-header'>Legal Translation <br/> Services</div>
              <div className='appointment'><strong>Make an appointment</strong> with Advocates and <br/> Legal consultancy, Today! </div>
                <div className='appointment-text'>
                  <div className='right-sign'>
                    <img src={rightsignBrown} alt="right" />
                    <img src={rightsignBrown} alt="right" />
                    <img src={rightsignBrown} alt="right" />
                    <img src={rightsignBrown} alt="right" />  
                  </div>
                  <div className='appointment-grp'>
                    <img src={appointment} alt="appointment" />
                  </div>
                  <div className='arrow-img'>
                  <img src={arrowimg} alt="appointment" />
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProServicesContainer;
