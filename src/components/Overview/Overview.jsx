import React from "react";
import { useLoaderData } from "react-router";
import { FaUsers, FaClock, FaUser } from "react-icons/fa";
import Loading from "../common/Loading";
import { useUserContext } from "../contexts/FirebaseContext/UserContext";

const Overview = () => {
  const groups = useLoaderData();
  const [user] = useUserContext();

  if (!groups) return <Loading />;

  const totalGroups = groups.length;
  const myGroups = groups.filter((g) => g.email === user?.userData?.email).length;
  const expiredGroups = groups.filter(
    (g) => new Date(g.endDate) < new Date()
  ).length;

  const stats = [
    {
      title: "All Groups",
      count: totalGroups,
      icon: <FaUsers className="text-3xl text-primary" />,
      bg: "bg-primary/10",
    },
    {
      title: "My Groups",
      count: myGroups,
      icon: <FaUser className="text-3xl text-secondary" />,
      bg: "bg-secondary/10",
    },
    {
      title: "Expired Groups",
      count: expiredGroups,
      icon: <FaClock className="text-3xl text-red-500" />,
      bg: "bg-red-500/10",
    },
  ];

  return (
    <section className="p-6 lg:p-10">
      <h2 className="text-2xl font-bold mb-8 text-center lg:text-left">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map(({ title, count, icon, bg }) => (
          <div
            key={title}
            className={`card ${bg} shadow-md p-6 flex items-center gap-4`}
          >
            <div className="shrink-0">{icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-2xl font-bold">{count}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
