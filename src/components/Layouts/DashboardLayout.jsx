import React, { useState } from "react";
import { Outlet, NavLink } from "react-router";
import {
  FaHome,
  FaChartPie,
  FaUsers,
  FaPlus,
  FaClipboardList,
  FaBars,
  FaTimes,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import Toggle from "../common/Toggle";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-base-200">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content p-4">
        {/* Small Screen Toggle Button */}
        <div className="lg:hidden mb-4">
          <label htmlFor="dashboard-drawer" className="btn btn-primary btn-sm">
            <FaBars />
          </label>
        </div>

        {/* Routed Page Content */}
        <Outlet />
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <div
          className={`transition-all duration-300 bg-base-100 shadow-md flex flex-col min-h-screen ${
            collapsed ? "w-20" : "w-64"
          }`}
        >
          {/* Header with Collapse/Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-base-300 shrink-0">
            {!collapsed && (
              <h2 className="text-xl font-bold text-primary">Dashboard</h2>
            )}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="btn btn-sm btn-ghost hidden lg:inline-flex"
              >
                {collapsed ? <FaAngleRight /> : <FaAngleLeft />}
              </button>
              <label
                htmlFor="dashboard-drawer"
                className="btn btn-sm btn-ghost lg:hidden"
              >
                <FaTimes />
              </label>
            </div>
          </div>

          {/* Scrollable Menu Section */}
          <div className="flex-grow overflow-y-auto">
            <ul className="menu p-4 space-y-2 text-base-content">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center gap-2 ${isActive ? "text-blue-400" : ""}`
                  }
                >
                  <FaHome />
                  {!collapsed && "Home"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-2 ${isActive ? "text-blue-400" : ""}`
                  }
                >
                  <FaChartPie />
                  {!collapsed && "Overview"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/all"
                  className={({ isActive }) =>
                    `flex items-center gap-2 ${isActive ? "text-blue-400" : ""}`
                  }
                >
                  <FaUsers />
                  {!collapsed && "All Groups"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/create-group"
                  className={({ isActive }) =>
                    `flex items-center gap-2 ${isActive ? "text-blue-400" : ""}`
                  }
                >
                  <FaPlus />
                  {!collapsed && "Create Group"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-groups"
                  className={({ isActive }) =>
                    `flex items-center gap-2 ${isActive ? "text-blue-400" : ""}`
                  }
                >
                  <FaClipboardList />
                  {!collapsed && "My Groups"}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Footer Toggle at Bottom */}
          <div className="p-4 border-t border-base-300 shrink-0">
            <Toggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
