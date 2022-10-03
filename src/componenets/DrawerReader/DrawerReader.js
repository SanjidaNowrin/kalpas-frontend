import React from "react";

const DrawerReader = () => {
  return (
    <div>
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
    </div>
  );
};

export default DrawerReader;
