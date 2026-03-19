import "./Deals.css";

export default function Deals() {
  const dealsList = [
    {
      id: 0,
      title: "Basic",
      price: 20,
      image: "src/assets/carrot1.png",
      titleDescription: "Starter pack to test the waters",
      description: ["one", "two", "three", "four", "five", "six"],
    },
    {
      id: 1,
      title: "Improved",
      price: 40,
      image: "src/assets/carrot2.png",
      titleDescription: "The waters are tested, now the real thing",
      description: [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
      ],
    },
    {
      id: 2,
      title: "Advanced",
      price: 60,
      image: "src/assets/carrot3.png",
      titleDescription: "Only for true masters of their craft",
      description: [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
      ],
    },
  ];
  const dealsCards = dealsList.map((deal) => (
    <li key={deal.id}>
      <img src={deal.image} alt="" />
      <div>
        <h2>{deal.title}</h2>
        <p>{deal.titleDescription}</p>
      </div>
      <p>{deal.price}</p>
      <ul>
        {deal.description.map((el, ind) => (
          <li key={ind}>{el}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <section id="dealsSection">
      <ul>{dealsCards}</ul>
      <img src="src/assets/carrot1.png" alt="" />
    </section>
  );
}
