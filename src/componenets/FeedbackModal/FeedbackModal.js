import React from "react";

const FeedBackModal = () => {
  return (
    <div className="mt-5 card border-0 readerCard">
      <div className="card-body p-2">
        <h5>Have a Feedback?</h5>
        <div
          className="p-2 feedbackButton btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          We’re Listening!
        </div>
      </div>
      {/* modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackModal;
