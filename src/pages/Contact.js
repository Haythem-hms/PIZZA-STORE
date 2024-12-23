import store from "../assets/haythem.jpg";
import "../styles/Contact.css";
function Contact() {
  return (
    <div className="contact">
        <div className="leftSide" style={{ backgroundImage : `url(${store})` }}>

        </div>
        <div className="rightSide">
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST" >
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder=" enter your full name ..." type="text" />
                
                
                <label htmlFor="email">Email</label>
                <input name="email" placeholder=" enter your email ..." type="email" />

                <label htmlFor="message">Message</label>
                <textarea rows={6} placeholder="enter a message .." name="message" required></textarea>
                <button type="Submit">Send Message</button>   
            </form>
        </div>
    </div>
  )
}
export default Contact