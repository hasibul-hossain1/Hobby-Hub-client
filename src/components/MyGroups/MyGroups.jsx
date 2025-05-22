import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router";
import { useUserContext } from "../contexts/FirebaseContext/UserContext";
import Group from "./Group";
import { useEffect } from "react";
import { HiH2 } from "react-icons/hi2";

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

  return (
      <section className="overflow-x-auto mt-32 max-w-6xl mx-auto">
        {groups.length?<table className="table">
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
            {[...groups].reverse().map((item,index) => (
              <Group key={item._id} setGroups={setGroups} index={index} item={item} />
            ))}
          </tbody>
        </table>:<div className="flex justify-center items-center h-[60vh]"><h2 className="text-2xl font-bold">You have not created any group yet.</h2></div>}
      </section>
  );
}

export default MyGroups;
