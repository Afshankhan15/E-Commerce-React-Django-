import React from "react";

const Cards = () => {
  const cards = [
    {
      title: "Starter",
      description: "Best option for personal use & for your next project.",
      price: "$29",
      items: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
    },
    {
      title: "Company",
      description: "Relevant for multiple users, extended & premium support.",
      price: "$59",
      items: [
        "Extended configuration",
        "Priority support",
        "Team size: 5 developers",
        "Premium support: 31 months",
        "Free updates: 12 months",
      ],
    },
    {
      title: "Enterprise",
      description:
        "Best for large scale uses and extended redistribution rights.",
      price: "$70",
      items: [
        "Extended configuration",
        "Priority support",
        "Team size: 5 developers",
        "Premium support: 12 months",
        "Free updates: 12 months",
      ],
    },
  ];

  return (
    <div className="w-full max-w-full mt-12"> 
      <div className="flex flex-col max-w-7xl mx-auto px-4 py-8 lg:py-24">
        {/* div text */}
        <div className="flex flex-col max-w-[768px] mx-auto text-center">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
            Designed for business teams like yours
          </h1>
          <p className="mb-5 font-light text-gray-500 sm:text-xl">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        {/* Cards div */}
        <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 px-4 py-4 lg:space-x-5 ">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between px-10 py-4 space-y-3 mt-[24px] text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow max-w-[380px] transform transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
            >
              <h1 className="text-2xl mb-4 font-semibold">{card.title}</h1>
              <p className="text-md font-light sm:text-lg text-gray-500">
                {card.description}
              </p>
              {/* <p className="text-xl"> */}
              <div
                class="flex items-end justify-center"
                style={{ marginTop: "30px" }}
              >
                <span class="mr-2 text-5xl font-extrabold">{card.price}</span>
                <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>

              <ul className="space-y-4 text-left" style={{ marginTop: "30px" }}>
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    {/* item = Premium support : 31 months */}
                    <p>
                      {item.split(":")[0]}{" "}
                      <span className="font-semibold">
                        :{item.split(":")[1]}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>

              <button
                style={{ marginTop: "30px" }}
                className="bg-purple-600 text-white px-5 py-2.5 border rounded-lg w-full text-sm xs:text-md lg:text-[1.1rem]"
              >
                Get Started
              </button>
            </div>
          ))}
          {/* card1 */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
