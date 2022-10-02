import React, { useEffect, useState } from "react";
import Drawer from "./../Drawer/Drawer";
import Posts from "./../Posts/Posts";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState("horizontal");
  //   fetch data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  //   toggle button
  const toggleButton = (type) => {
    setToggle(type);
  };
  // console.log(toggle);
  const deletePost = (id) => {
    const findPost = posts.filter((p) => p.id !== id);
    setPosts(findPost);
  };
  return (
    <div className="row gx-4 m-0">
      <div className="col-md-3 drawerBody ">
        <Drawer toggle={toggle} toggleButton={toggleButton} />
      </div>
      <div className="col-md-9">
        <Posts posts={posts} toggle={toggle} deletePost={deletePost} />
      </div>
    </div>
  );
};

export default Main;
