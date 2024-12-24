import React from 'react';
import heroImg from '../src/assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo voluptates sapiente quisquam
            ipsam. Consequatur libero eligendi, temporibus delectus eum quod ad adipisci eveniet eius ipsa at nulla
            cumque inventore reprehenderit! Exercitationem, necessitatibus possimus? Officia ipsum minus maiores libero
            quae tempora, sint consequatur, porro dignissimos, error quisquam harum molestias veniam?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
