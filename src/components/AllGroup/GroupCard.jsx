import React from "react";
import { Link } from "react-router";

function GroupCard({ group }) {
  return (
    <div className="bg-base-200 p-6 rounded-box shadow-md hover:shadow-xl transition-all">
      <div className="flex justify-center items-center mb-5">
        <img
          className="h-24"
          src={
            group.image &&
            typeof group.image === "string" &&
            group.image.startsWith("https://")
              ? group.image
              : "/default.jpeg"
          }
          alt="Group image"
        />{" "}
      </div>
      <h3 className="text-xl font-semibold">{group.groupName}</h3>
      <p className="text-sm text-base-content/70">
        Category: {group.hobbyCategory}
      </p>
      <p className="text-sm text-base-content/70">
        Members: {group.maxMembers}
      </p>
      <p className="text-sm text-base-content/70">Location: {group.location}</p>
      <p className="text-sm text-base-content/70">
        Deadline: {new Date(group.endDate).toLocaleDateString()}
      </p>
      <Link
        to={`/details/${group._id}`}
        className="btn btn-primary mt-4 w-full"
      >
        See More
      </Link>
    </div>
  );
}

export default GroupCard;
