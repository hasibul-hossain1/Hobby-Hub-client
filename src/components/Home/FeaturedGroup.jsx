import React from "react";
import GroupCard from "../AllGroup/GroupCard";
import { useLoaderData } from "react-router";
import Loading from "../common/Loading";

function FeaturedGroup() {
  const groups = useLoaderData();
  if (!groups) return <Loading />;

  return (
    <section className="px-8 md:px-15 lg:px-32 xl:px-48 my-32">
      <h2 className="text-center mb-16 text-3xl font-bold">
        Our Featured Groups
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...groups]
          .reverse()
          .slice(0, 4) // Show only 4 cards
          .map((group) => (
            <GroupCard key={group._id} group={group} />
          ))}
      </div>
    </section>
  );
}

export default FeaturedGroup;
