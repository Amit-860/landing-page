import React from "react";
import AvatarAnisha from "../img/avatar-anisha.png";
import AvatarAli from "../img/avatar-ali.png";
import AvatarRichard from "../img/avatar-richard.png";

const testimonials = [
  {
    src: AvatarAnisha,
    name: "Anisha Lee",
    description:
      "Manage has supercharged out team's workflow. The ability to maintain visibility on larger milestones at all times heeps everyone motivated.",
  },
  {
    src: AvatarAli,
    name: "Ali Patel",
    description:
      "We have been able to cancel so many other subscriptions since using Manage. Theres is no more cross-channel counfusion and everyone is much more focused.",
  },
  {
    src: AvatarRichard,
    name: "Richard Singh",
    description:
      "Manage has supercharged out team's workflow. The ability to maintain visibility on larger milestones at all times heeps everyone motivated.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        <div className="flex flex-col mt-24 gap-28 justify-between md:flex-row md:gap-0 md:space-x-6">
          {testimonials.map((item) => (
            <div className="flex flex-col items-center p-3 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src={item.src} alt="" className="w-16 -mt-14" />
              <h5 className="text-lg font-bold">{item.name}</h5>
              <p className="sm:w-5/6 text-sm text-darkGrayishBlue">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="my-16">
          <a
            href="#"
            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
