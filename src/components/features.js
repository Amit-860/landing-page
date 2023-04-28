import React from "react";
import Feature from "./feature";

const features = [
  {
    number: "01",
    title: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestorene level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    number: "02",
    title: "Advance Built-in Reports",
    description:
      "Set internal delivery estimates and track progress towards company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    number: "03",
    title: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers and all-in-one team productivity solution.",
  },
];

const Features = () => {
  return (
    <section id="features">
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionnality your team needs, without the
            complexity. Our software is tailor-made for modern digital products
            teams.
          </p>
        </div>
        <div className="flex flex-col space-y-8 md:w-1/2">
          {features.map((item) => (
            <Feature {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
