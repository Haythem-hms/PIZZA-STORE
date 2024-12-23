import AboutUs from '../assets/pizzeria.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
        <div className="aboutLeft" style={{ backgroundImage : `url(${AboutUs})` }}>

        </div>
        <div className="aboutRight">
            <h1>About US</h1>
            <p>Welcome to Haythem's Pizzeria, where passion for flavor meets quality ingredients! We specialize in crafting delicious, freshly baked pizzas with a variety of toppings to suit every taste. Whether dining in, taking out, or ordering online, we’re committed to serving you the perfect slice every time.</p>
        </div>
    </div>
  )
}
export default About