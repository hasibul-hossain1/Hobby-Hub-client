import { useState } from "react";
import GroupCard from "./GroupCard";
import { useLoaderData } from "react-router";

const AllGroups = () => {
  const [search, setSearch] = useState("");
  const groups = useLoaderData();
  console.log(groups);
  if (!groups) return <Loading/>

  const filteredGroups = groups.filter((group) =>
    group.groupName.toLowerCase().includes(search.toLowerCase())
  );

  return (
      <section className="mt-32 max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          All Hobby Groups
        </h2>

        <input
          type="text"
          placeholder="Search groups..."
          className="input input-bordered w-full mb-6"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...filteredGroups].reverse().map((group) => (
            <GroupCard key={group._id} group={group} />
          ))}
        </div>
      </section>
  );
};

export default AllGroups;
