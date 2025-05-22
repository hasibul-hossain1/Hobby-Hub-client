import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router";
import { useUserContext } from "../contexts/FirebaseContext/UserContext";
import Group from "./Group";
import { useEffect } from "react";

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
            {[...groups].reverse().map((item,index) => (
              <Group key={item._id} setGroups={setGroups} index={index} item={item} />
            ))}
          </tbody>
        </table>
      </section>
  );
}

export default MyGroups;
