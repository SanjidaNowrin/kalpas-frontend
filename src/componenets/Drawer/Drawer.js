import React from "react";
import { RiListCheck } from "react-icons/ri";
import { FaGripHorizontal } from "react-icons/fa";
import FeedbackModal from "./../FeedbackModal/FeedbackModal";

const Drawer = ({ toggleButton, toggle }) => {
  console.log(toggle);
  return (
    <div className="container">
      {/* reader section */}
      <div className="card border-0 mt-5 readerCard">
        <div className="card-body p-2 d-flex ">
          <img
            src="https://i.postimg.cc/D0SWWYdG/Ellipse-11.png"
            height="51px"
            alt=""
            className="ps-1"
          />
          <div className="ps-4 text-start">
            <p className="mb-0">Hi Reader</p>
            <p className="mb-0">Here's your News!</p>
          </div>
        </div>
      </div>
      {/* toggle button */}
      <div className="mt-5 card border-0 readerCard">
        <div className="card-body p-2">
          <h5>View Toggle</h5>
          <div className="d-flex justify-content-center ">
            <div
              onClick={() => toggleButton("horizontal")}
              className={`toggleButtonOne ${
                toggle === "horizontal" ? "activeToggle" : "inactiveToggle"
              }`}
            >
              <FaGripHorizontal size={25} />
            </div>
            <div
              onClick={() => toggleButton("vertical")}
              className={`toggleButtonTwo ${
                toggle === "vertical" ? "activeToggle" : "inactiveToggle"
              }`}
            >
              <RiListCheck size={25} />
            </div>
          </div>
        </div>
      </div>
      {/* feedback */}
      <FeedbackModal />
    </div>
  );
};

export default Drawer;
