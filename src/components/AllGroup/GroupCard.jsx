import React from "react";
import { Link } from "react-router"; // ✅ Correct router import

function GroupCard({ group }) {
  const {
    image,
    groupName,
    hobbyCategory,
    maxMembers,
    location,
    endDate,
    _id,
  } = group;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
      {/* Image */}
      <figure className="bg-base-200 h-40 overflow-hidden">
        <img
          src={
            image && typeof image === "string" && image.startsWith("https://")
              ? image
              : "/default.jpeg"
          }
          alt={groupName}
          className="h-full w-full object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body space-y-2">
        <h2 className="card-title text-primary">{groupName}</h2>

        <div className="text-sm text-base-content/70 leading-6">
          <p>
            <span className="font-medium">Category:</span> {hobbyCategory}
          </p>
          <p>
            <span className="font-medium">Members:</span> {maxMembers}
          </p>
          <p>
            <span className="font-medium">Location:</span> {location}
          </p>
          <p>
            <span className="font-medium">Deadline:</span>{" "}
            {new Date(endDate).toLocaleDateString()}
          </p>
        </div>

        <div className="pt-4">
          <Link to={`/details/${_id}`} className="btn btn-primary btn-sm w-full">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
