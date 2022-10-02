import React from "react";

const IframePost = ({ src }) => {
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <iframe
                title={src}
                allowFullScreen
                frameBorder="0"
                height="315px"
                src={src}
                width="560px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IframePost;
