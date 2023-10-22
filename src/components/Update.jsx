import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };
  return (
    <div>
      {" "}
      <div className="container mx-auto flex w-96 justify-center items-center pt-32">
        <div className="w-96 border bg-base-300 text-slate-500 p-5">
          <h3>Update User</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control w-full mb-4">
              <h3 className="text-white">Update User</h3>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="enter name"
                className="input input-bordered w-full from-control"
                value={uname}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control w-full mb-4">
              <label htmlFor="name">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="enter email"
                className="input input-bordered w-full from-control"
                value={uemail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <button className="btn btn-secondary">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
