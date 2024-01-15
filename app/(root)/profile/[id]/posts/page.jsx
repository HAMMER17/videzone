"use client";

import { useUser } from "@clerk/nextjs";

import PostCard from "@/components/cards/PostCard";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProfileCard from "@/components/cards/ProfileCard";
import Loader from "@/components/form/Loader";

const ProfilePosts = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState({});

  const getUser = async () => {
    const response = await fetch(`/api/user/profile/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setUserData(data);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, [id]);

  const { user, isLoaded } = useUser();

  console.log(userData)

  return loading || !isLoaded ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-9">
      <ProfileCard userData={userData} activeTab="Posts" />

      <div className="flex flex-col gap-9">
        {userData?.posts?.map((post) => (
          <PostCard key={post._id} post={post} creator={post.creator} loggedInUser={user} update={getUser} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePosts;