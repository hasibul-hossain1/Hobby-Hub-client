import { useLoaderData } from "react-router";
import Loading from "../common/Loading";
import PrivateRoute from "../common/PrivateRoute";
import { useRef } from "react";
import toast from "react-hot-toast";

function GroupDetails() {
  const group = useLoaderData();
  const joinRef = useRef(null);
  if (!group) return <Loading />;
  const isJoinDisabled = () => {
    if (!group?.endDate) return false;
    const now = new Date();
    const deadline = new Date(group.endDate);
    console.log(now,deadline);
    return deadline < now;
  };
  const isDisabled=isJoinDisabled()
  const handleJoin = () => {
    toast.success("Joined Successfully");
    joinRef.current.disabled = true;
  };
  return (
    <PrivateRoute>
      <div className="max-w-4xl mt-32 mx-auto p-6 bg-base-100 shadow-xl rounded-lg space-y-4">
        <img
          src={
            group.image.startsWith("https://") ? group.image : "/default.jpeg"
          }
          alt={group.groupName}
          className="w-full h-[300px] object-cover rounded-md"
        />
        <h2 className="text-3xl font-bold">{group.groupName}</h2>
        <p>
          <strong>Category:</strong> {group.hobbyCategory}
        </p>
        <p>
          <strong>Description:</strong> {group.description}
        </p>
        <p>
          <strong>Meeting Location:</strong> {group.location}
        </p>
        <p>
          <strong>Max Members:</strong> {group.maxMembers}
        </p>
        <p>
          <strong>End Date:</strong>{" "}
          {new Date(group.endDate).toLocaleDateString()}
        </p>
        <p>
          <strong>Created by:</strong> {group.name}
        </p>

        {isDisabled ? (
          <p className="text-xl text-red-500">Sorry the deadline is over you can not join the group</p>
        ) : (
          <button
            onClick={handleJoin}
            ref={joinRef}
            className="btn btn-primary"
          >
            Join
          </button>
        )}
      </div>
    </PrivateRoute>
  );
}

export default GroupDetails;
