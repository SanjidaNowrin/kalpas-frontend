import React from "react";
import { RiListCheck } from "react-icons/ri";
import { FaGripHorizontal } from "react-icons/fa";
import FeedbackModal from "./../FeedbackModal/FeedbackModal";
import DrawerReader from "./../DrawerReader/DrawerReader";

const Drawer = ({ toggleButton, toggle }) => {
  console.log(toggle);
  return (
    <div className="container">
      {/* reader section */}
      <DrawerReader />
      {/* toggle button */}
      <div className="mt-5 card border-0 mb-4 readerCard">
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
