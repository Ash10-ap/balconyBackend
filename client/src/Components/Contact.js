import React, { useState } from "react";
import sliderItems from "../data";
import "./Shop.css";
import "./Contact.css";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';


export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // perform some action with formData, like sending it to an API
  };
  return (
      // <div className="main_container">
        <div className="container">
          <div className="contactus-main">
            <div className="top-image-container">
              <span className='image-container-txt'>
                <h1>Get In Touch</h1>
                <p>Get the best collection of plants
                  and a customised decorative in a click
                </p>
              </span>
              <img id="main-plant-img" src={process.env.PUBLIC_URL + '../images/Pexels_Photo_by_Min_An.png'} alt='Pexels_Photo_by_Min_An' />
            </div>
          {/* </div> */}

          {/* main middle */}

          <div className='contact-info-main'>
            {/* middle left */}
            <div className='contact-info-container'>
              <h4>Send a message</h4>
              <form className="form" onSubmit={handleSubmit}>  
                <div className="input-container">
                    <div>
                      <input placeholder="Name" type="text" id="name" name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      
                      <input placeholder="Email"  type="email" id="email" name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <input placeholder="Intrested in" type="text" id="interest" name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                      />
                      
                      <input placeholder="Phone Number" type="tel" id="phone" name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                </div>
                  
                  <textarea placeholder="Message" id="message" name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  <button id="submit-form" type="submit">Submit</button>
              </form>
            </div>

            {/* middle right */}
            
            <div className='contactus-container'>
              <div className="call-us">
                <h4>Call us</h4>
                <p>You can call us between 10 a.m. to 8 p.m.</p>
                <span>
                  <PhoneInTalkIcon id="phone-id"></PhoneInTalkIcon>
                  <p>+91 8000221414</p>
                </span>
                
              </div>
              <div className="email-us">
                <h4>Email us</h4>
                <p>Write an email for any queries</p>
                <span>
                  <EmailOutlinedIcon id="icon-email" ></EmailOutlinedIcon>
                  <p>indfo@thebalconylife.com</p>
                </span>
                
              </div>
              <div className="social-media-handles">
                <h4>Social media Handles</h4>
                <p>Reach out to us throuh our social media handles</p>
                <span id="social-media-icons">
                  <img src="images/Group 1.svg" alt="" srcSet="" />
                  <img src="images/Vector-3.svg" alt="" srcSet="" />
                  <img src="images/Vector-4.svg" alt="" srcSet="" />
                  <img src="images/Vector-5.svg" alt="" srcSet="" />
                </span>
              </div>
            </div>
          </div>

          {/* bottom  */}
          
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1403.0540123583602!2d-73.98867609999999!3d40.754888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x75bc5fbc0e9d9c55!2sEmpire+State+Building!5e0!3m2!1sen!2sus!4v1395141566845"
            />
          </div>

          {/* FAQ Section */}

          <div className="faq-main">
            <div className="faq-txt">
              <small>FAQ</small>
              <h1>FREQUENTLY<br/> ASKED<br/> QUATIONS</h1>
            </div>
            <div className="Quations-container">
              <p>Most asked quations</p>
              <h5>please refer to these quations<br/>
              if you have doubte similer to it </h5>
              <div className="quations">
                <p>Order delivery time?</p>
                <p>Can you customise completly as per us?</p>
                <p>Do you take bulk orders?</p>
                <p>Do you deliver PAN India?</p>
              </div>
            </div>
          </div>
          </div>
         </div>
    // </div>
  )
}
