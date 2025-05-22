import React from "react";
import GroupCard from "../AllGroup/GroupCard";
import { useLoaderData } from "react-router";

function FeaturedGroup() {
  const groups = useLoaderData();

  return (
    <section className="px-8 md:px-15 lg:px-32 xl:px-64 2xl:px-72 my-32">
      <h2 className="text-center mb-16 text-3xl font-bold">
        Our Featured Group
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...groups].reverse().map((group, index) => {
          if (index > 5) {
            return;
          }
          return <GroupCard key={group._id} group={group} />;
        })}
      </div>
    </section>
  );
}

export default FeaturedGroup;
