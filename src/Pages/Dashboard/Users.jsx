import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure/axiosSecure";
import Loader from "../../Components/Shared/Loader/Loader";
import { FaCaretDown } from "react-icons/fa";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const { data: usersArray, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res;
    },
  });
  const users = usersArray?.data;
  console.log(users);
  const handleDelete = (id) => {
    axiosSecure.delete(`/users/${id}`);
  };
  const handleUpdate = (data) => {
    const id = data?.id;
    const role= data?.role;
    axiosSecure.patch(`/users/${id}?role=${role}`);
  }
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-[50vh]">
          <Loader />{" "}
        </div>
      ) : (
        <div className="bg-gray-400 rounded-xl h-full ">
          <div className="overflow-x-auto min-h-[300px]">
            <table className="table text-center">
              {/* head */}
              <thead className="text-white text-base">
                <tr>
                  <th className="">User</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="bg-gray-200 ">
                {/* row 1 */}
                {users &&
                  users.map((user) => (
                    <tr key={user?.email}>
                      <td className="">
                        <div className="flex items-center gap-3 justify-start">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={user?.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <h2 className="text-base font-bold">
                              {user?.name}
                            </h2>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h3 className="bg-gray-300 inline-block px-2 rounded-full">
                          {user?.email}
                        </h3>
                      </td>
                      <td>
                        <div className="dropdown dropdown-end">
                          <div tabIndex={0} role="button" className=" m-1 ">
                            <h3 className="capitalize font-bold flex items-center gap-2">{user?.role}<FaCaretDown/></h3>
                          </div>
                          <div
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-4 shadow bg-gray-200 rounded-lg w-24 space-y-2"
                          >
                            <button onClick={() => handleUpdate({role:"user", id: user?._id})} className="bg-success rounded-xl text-white p-1">User</button>
                            <button onClick={() => handleUpdate({role:"admin", id: user?._id})} className="bg-warning rounded-xl text-white p-1">Admin</button>                          
                          </div>
                        </div>
                      </td>
                      <th>
                        <button onClick={() => handleDelete(user?._id)} className="btn btn-sm btn-error">Remove</button>
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Users;
