import React from "react";

const StepsList = () => {
  const steps = [
    {
      title: "1. Create an Account",
      description: "Sign up on our website to become a member.",
      iconClass: "icon-businessman",
    },
    {
      title: "2. Buy Credits",
      description: "Purchase credits through our secure online system.",
      iconClass: "icon-businessman",
    },
    {
      title: "3. Download or Upload Files",
      description:
        "Choose from our extensive database of pre-made chiptuning files or upload your own files for personalized customization by our expert team.",
      iconClass: "icon-businessman",
    },
  ];

  return (
    <ul>
      {steps.map((step, index) => (
        <li key={index}>
          <div className="sc_icons_item">
            <div className={`sc_icons_icon sc_icon_type_ ${step.iconClass}`}>
              <span className={`sc_icon_type_ ${step.iconClass}`}></span>
            </div>
            <div className="sc_icons_item_details">
              <h4 className="sc_icons_item_title">
                <span>{step.title}</span>
              </h4>
              <div className="sc_icons_item_description">
                <span>{step.description}</span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StepsList;
