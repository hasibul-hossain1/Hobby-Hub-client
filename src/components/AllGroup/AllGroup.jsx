import { useState } from "react";
import GroupCard from "./GroupCard";
import { useLoaderData } from "react-router";
import Loading from "../common/Loading";

const AllGroups = ({ m = 32 }) => {
  const groups = useLoaderData();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [size, setSize] = useState("all");
  const [sort, setSort] = useState("newest");

  if (!groups) return <Loading />;

  // 🧠 Filtering logic
  let filtered = groups.filter((group) =>
    group.groupName.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "all") {
    filtered = filtered.filter((group) => group.hobbyCategory === category);
  }

  if (size !== "all") {
    filtered = filtered.filter((group) => {
      if (size === "small") return group.maxMembers <= 10;
      if (size === "medium") return group.maxMembers > 10 && group.maxMembers <= 20;
      if (size === "large") return group.maxMembers > 20;
    });
  }

  // 🔄 Sorting logic
  filtered.sort((a, b) => {
    if (sort === "name-asc") return a.groupName.localeCompare(b.groupName);
    if (sort === "name-desc") return b.groupName.localeCompare(a.groupName);
    if (sort === "members-asc") return a.maxMembers - b.maxMembers;
    if (sort === "members-desc") return b.maxMembers - a.maxMembers;
    if (sort === "newest") return new Date(b.startDate) - new Date(a.startDate);
    if (sort === "oldest") return new Date(a.startDate) - new Date(b.startDate);
    return 0;
  });

  // 🧩 Unique categories for dropdown
  const categories = ["all", ...new Set(groups.map((g) => g.hobbyCategory))];

  return (
    <section className={`mt-${m} max-w-7xl mx-auto px-4 py-10`}>
      <h2 className="text-3xl font-bold text-center mb-8">All Hobby Groups</h2>

      {/* 🔍 Search + Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <input
          type="text"
          placeholder="Search groups..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select select-bordered w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all" ? "All Categories" : cat}
            </option>
          ))}
        </select>

        <select
          className="select select-bordered w-full"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="all">All Sizes</option>
          <option value="small">Small (≤10)</option>
          <option value="medium">Medium (11–20)</option>
          <option value="large">Large (21+)</option>
        </select>

        <select
          className="select select-bordered w-full"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="newest">Start Date: Newest</option>
          <option value="oldest">Start Date: Oldest</option>
          <option value="name-asc">Name A-Z</option>
          <option value="name-desc">Name Z-A</option>
          <option value="members-asc">Members: Low to High</option>
          <option value="members-desc">Members: High to Low</option>
        </select>
      </div>

      {/* 🧾 Group Cards */}
      {filtered.length ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((group) => (
            <GroupCard key={group._id} group={group} />
          ))}
        </div>
      ) : (
        <p className="text-center text-base-content/70 mt-10">No groups found.</p>
      )}
    </section>
  );
};

export default AllGroups;
