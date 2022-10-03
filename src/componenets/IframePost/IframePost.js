import React from "react";

const IframePost = ({ src }) => {
  return (
    <div
      class="modal fade"
      id="exampleModalTwo"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body iframeBody">
            <iframe
              title="first"
              allowFullScreen
              frameBorder="0"
              height="500px"
              src="https://careers.kalpas.in/"
              width="466px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IframePost;
