import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { useUserContext } from "../contexts/FirebaseContext/UserContext"; 
import Group from "./Group";

import Loading from "../common/Loading";
import { Tooltip } from "react-tooltip";

function MyGroups() {
  const [user] = useUserContext();
  const [groups, setGroups] = useState([]);
  const allGroups = useLoaderData();
  useEffect(() => {
    const filtered = allGroups.filter(
      (item) => item.email === user.userData.email
    );
    setGroups(filtered);
  }, [allGroups, user]);
  if (!allGroups) return <Loading />;
  return (
    <section className="overflow-x-auto mt-5 max-w-6xl mx-auto">
       <Tooltip id="details" />
       <h2 className="text-3xl font-bold text-center mb-8">
          My Groups
        </h2>
        <div className="divider"></div>
      {groups.length ? (
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>Serial</label>
              </th>
              <th>Photo</th>
              <th>Name & Location</th>
              <th>Expired Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[...groups].reverse().map((item, index) => (
              <Group
                key={item._id}
                setGroups={setGroups}
                index={index}
                item={item}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex justify-center items-center h-[60vh]">
          <h2 className="text-2xl font-bold">
            You have not created any group yet.
          </h2>
        </div>
      )}
    </section>
  );
}

export default MyGroups;
