import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import Pagination from "./../Pagination/Pagination";
import IframePost from "./../IframePost/IframePost";

const Posts = ({ toggle, deletePost, posts }) => {
  const [showPerPage, setShowPerPage] = useState(6);
  const [shown, setShown] = useState(false);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  // iframe

  return (
    <div className="container mt-5">
      {toggle === "vertical" ? (
        <div>
          {posts?.slice(pagination.start, pagination.end).map((post) => (
            <div key={post.id} className="d-flex justify-content-evenly">
              <div
                className="card border-0  mb-3  cardVertical"
                style={{ width: "950px" }}
              >
                <div className="card-body d-flex text-start">
                  <img
                    src="https://i.postimg.cc/8CSCygcH/Ellipse-1.png"
                    alt=""
                    height="67px"
                  />
                  <div className="ps-3">
                    <h6>{post?.title}...</h6>
                    <p>{post?.body.slice(0, 110)}...</p>
                    <p className="mb-0">Mon, 21 Dec 2020 14:57 GMT</p>
                  </div>
                </div>
              </div>
              <div onClick={() => deletePost(post?.id)}>
                <ImCross className="crossBtn p-2" size={40} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="row container">
          {posts?.slice(pagination.start, pagination.end).map((post) => (
            <div className="col-md-4" key={post?.id}>
              <div className="card border-0 mb-3 cardHorizontal">
                <div className="card-body text-start">
                  <div onClick={() => deletePost(post?.id)}>
                    <p className="card-text text-end ">
                      <ImCross size={20} />
                    </p>
                  </div>
                  <h6>{post?.title.slice(0, 35)}...</h6>
                  <p>{post?.body.slice(0, 44)}...</p>
                  <p className="text-muted">Mon, 21 Dec 2020 14:57 GMT</p>
                  <img
                    className="img-fluid rounded mx-auto d-block"
                    src="https://i.postimg.cc/C10cfYXv/Rectangle-17.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={posts?.length}
      />
    </div>
  );
};

export default Posts;
