import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router";

function Group({ item, index, setGroups }) {
  const handleDelete = () => {
    fetch(`http://localhost:2020/groups/${item._id}`, {
      method: "DELETE",
    });
    setGroups((prev) => {
      const filtered = prev.filter((ele) => ele._id !== item._id);
      return filtered;
    });
  };
  console.log(item);
  return (
    <>
      <tr>
        <th>
          <label>{index + 1}</label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={
                    item.image.startsWith("https://")
                      ? item.image
                      : "/default.jpeg"
                  }
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
        <td>
          <p className="text-xl font-medium">{item.groupName}</p>

          <span className="badge badge-ghost badge-sm">{item.location}</span>
        </td>
        <td>{new Date(item.endDate).toLocaleDateString()}</td>
        <th className="space-x-2">
          <Link
            to={`/details/${item._id}`}
            data-tooltip-id="details"
            data-tooltip-content={"See More"}
            data-tooltip-place="top"
            className="btn bg-green-400 btn-xs"
          >
            <TbListDetails />
          </Link>
          <Link
            to={`/update/${item._id}`}
            data-tooltip-id="details"
            data-tooltip-content={"Edit"}
            data-tooltip-place="top"
            className="btn bg-pink-400 btn-xs"
          >
            <BiSolidEdit />
          </Link>
          <button
            onClick={handleDelete}
            data-tooltip-id="details"
            data-tooltip-content={"Delete"}
            data-tooltip-place="top"
            className="btn bg-red-500 btn-xs"
          >
            <MdDelete />
          </button>
        </th>
      </tr>
    </>
  );
}

export default Group;
