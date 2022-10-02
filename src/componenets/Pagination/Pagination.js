import React, { useState, useEffect } from "react";
import { BiChevronsLeft } from "react-icons/bi";
import { BiChevronsRight } from "react-icons/bi";
const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButtons] = useState(0);
  // number of posts
  useEffect(() => {
    const number = Math.ceil(total / showPerPage);
    setNumberOfButtons(number);
  }, [total]);

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  //   previous & next button
  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="typeButton">
              <BiChevronsLeft size={30} onClick={() => onButtonClick("prev")} />
            </li>

            {[...Array(numberOfButtons).keys()].slice(0, 3).map((index) => (
              <li
                key={index}
                className={`page-link ${
                  index + 1 === counter ? "pageActive" : "page-link"
                }`}
              >
                <p
                  className="text-center mb-0"
                  onClick={() => setCounter(index + 1)}
                >
                  {index + 1}
                </p>
              </li>
            ))}
            <li className="typeButton">
              <BiChevronsRight
                size={30}
                onClick={() => onButtonClick("next")}
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
