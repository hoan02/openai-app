import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import "./MyPosts.scss";
import BackTo from "../../components/backTo/BackTo";
import newRequest from "../../utils/newRequest";
import Post from "../../components/post/Post";

const MyPosts = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { data: allPosts, isLoading } = useQuery({
    queryKey: ["myPosts"],
    queryFn: async () => {
      const response = await newRequest.get(`/dalle/my-posts`);
      return response.data.reverse();
    },
  });

  console.log(allPosts);

  return (
    <div className="myPosts">
      <div className="container">
        <div className="mainContainer">
          <div className="renderPost">
            {allPosts?.map((post, index) => {
              return <Post key={post._id} {...post} idColor={index % 5} />;
            })}
          </div>
        </div>
      </div>
      <BackTo />
    </div>
  );
};

export default MyPosts;
