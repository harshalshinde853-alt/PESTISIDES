function Services() {
  const data = [
    {
      title: "Web Design",
      text: "Modern and responsive website design.",
    },
    {
      title: "Web Development",
      text: "Fast and secure web applications.",
    },
    {
      title: "UI/UX Design",
      text: "Beautiful and user-friendly interfaces.",
    },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="service-container">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;