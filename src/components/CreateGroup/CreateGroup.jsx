import React from "react";
import { useUserContext } from "../contexts/FirebaseContext/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const CreateGroup = () => {
  const [user]=useUserContext()
  const navigate=useNavigate()
  const handleAddGroups = (e) => {
    e.preventDefault();
    const form = e.target;
    const getData = new FormData(form);
    const formData = Object.fromEntries(getData);

    fetch("http://localhost:2020/groups", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        navigate('/mygroups')
        toast.success('Group Created Successfully')
      })
      .catch((err) => console.log(err));
  };

  return (
      <div className="max-w-2xl mt-32 mx-auto p-6 bg-base-200 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Create a New Hobby Group
        </h2>
        <form onSubmit={handleAddGroups} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Group Name</label>
            <input
              type="text"
              name="groupName"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Hobby Category</label>
            <select
              name="hobbyCategory"
              className="select w-full"
              required
              defaultValue=""
            >
              <option value="" disabled selected>
                Select a category
              </option>
              <option>Drawing & Painting</option>
              <option>Photography</option>
              <option>Video Gaming</option>
              <option>Fishing</option>
              <option>Running</option>
              <option>Cooking</option>
              <option>Reading</option>
              <option>Outdoor Game</option>
              <option>Cycling</option>
              <option>Writing</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Description</label>
            <textarea
              name="description"
              rows="4"
              className="textarea textarea-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Meeting Location</label>
            <input
              type="text"
              name="location"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Max Members</label>
            <input
              type="number"
              name="maxMembers"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">End Date</label>
            <input
              type="date"
              name="endDate"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium">Your Name</label>
              <input
                type="text"
                value="John Doe"
                name="name"
                readOnly
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Your Email</label>
              <input
                type="email"
                name="email"
                value={user?.userData?.email}
                readOnly
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="text-center mt-6">
            <button type="submit" className="btn btn-primary">
              Create Group
            </button>
          </div>
        </form>
      </div>
  );
};

export default CreateGroup;
