import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="overlay">
        <h1>Welcome To Our Website</h1>

        <p>
          We build beautiful and responsive websites using React JS.
        </p>

        <button>Learn More</button>
      </div>
    </section>
  );
}

export default Hero;