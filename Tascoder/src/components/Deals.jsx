import "./Deals.css";

export default function Deals() {
  const dealsList = [
    {
      id: 0,
      title: "Basic",
      price: "$20",
      image: "src/assets/carrot1.png",
      titleDescription: "Test the water",
      description: [
        "Lorem Ipsum is simply",
        "been the industry's",
        "1960s with the release",
        "type specimen book",
        "of type and scrambled",
        "default model text, and",
      ],
    },
    {
      id: 1,
      title: "Improved",
      price: "$40",
      image: "src/assets/carrot2.png",
      titleDescription: "Now the real thing",
      description: [
        "printer took a galley",
        "of type and scrambled",
        "type specimen book",
        "but also the leap",
        "less normal distribution",
        "PageMaker including",
        "If you use this site",
      ],
    },
    {
      id: 2,
      title: "Advanced",
      price: "$60",
      image: "src/assets/carrot3.png",
      titleDescription: "Habit is made",
      description: [
        "of type and scrambled",
        "less normal distribution",
        "but also the leap",
        "If you use this site",
        "printer took a galley",
        "characteristic words etc",
        "generators on the Internet",
        "handful of model",
        "There is no minimum",
      ],
    },
  ];

  const dealsCards = dealsList.map((deal) => (
    <li key={deal.id} className="dealsListItem">
      <img src={deal.image} alt="" />
      <div className="dealsTitle">
        <h2>{deal.title}</h2>
        <p>{deal.titleDescription}</p>
      </div>
      <div className="dealsPriceHolder">
        <p className="dealsPrice">{deal.price}</p>
        <div className="dealsPriceBtnHolder">
          <div className="dealsPriceBtnBg"></div>
          <button className="dealsPriceBtn">Start now</button>
        </div>
      </div>
      <ul className="dealsFeaturesList">
        {deal.description.map((el, ind) => (
          <li key={ind}>
            <p>{el}</p>
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
    <section id="dealsSection">
      <div id="dealsSectionTitles">
        <h1>Za svakog postoji odgovarajuci plan</h1>
        <h2>Kreni sa besplatnim, zavrsi za najboljim. Koristi <span>Tascoder</span> i ucini posao laksim.</h2>
      </div>
      <ul id="dealsList">{dealsCards}</ul>
    </section>
  );
}
