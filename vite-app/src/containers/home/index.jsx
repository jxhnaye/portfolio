import React from "react";
import {useNavigate} from 'react-router-dom'
import {Animate} from 'react-simple-animate'
import './styles.scss'

const Home = () => {
  const navigate = useNavigate();
  console.log(navigate);

  const handleNavigateToContactPage=()=>{

    navigate('/contact');

  }
  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <h1>
          John Aye
          <br />
          Welcome to my porfolio
        </h1>
      </div>
      <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform: 'translateY(550px)'
      }}

      end={{transform: 'translateX(0px)' }}
      >
        <div className="home_contact-me">
        <button onClick={handleNavigateToContactPage}>Hire Me</button>
      </div>
      </Animate>
      
    </section>
  );
};

export default Home;
