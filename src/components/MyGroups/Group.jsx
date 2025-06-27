import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router";
import Swal from "sweetalert2";

function Group({ item, index, setGroups }) {
  const handleDelete = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      // Perform the DELETE request
      fetch(`https://backend-opal-delta-19.vercel.app/groups/${item._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          // Update local state
          setGroups((prev) => prev.filter((ele) => ele._id !== item._id));

          Swal.fire({
            title: "Deleted!",
            text: "The group has been deleted.",
            icon: "success"
          });
        })
        .catch((error) => {
          console.error("Error deleting item:", error);
          Swal.fire("Error", "Something went wrong while deleting.", "error");
        });
    }
  });
};
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
            to={`/dashboard/update/${item._id}`}
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
