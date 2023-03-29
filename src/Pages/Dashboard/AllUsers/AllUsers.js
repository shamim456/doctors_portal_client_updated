import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";

const AllUsers = () => {
  const {
    data: allUsers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allUsers`);
      const data = await res.json();
      return data.result;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/user/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  const handleDeleteUser = (id) => {
    const url = `http://localhost:5000/allUsers/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.result);
        refetch();
      });
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-primary mb-8">My Appointment</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allUsers.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      className="btn btn-sm"
                      onClick={() => handleMakeAdmin(user._id)}
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-sm bg-denger"
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    // <div className="w-full">
    //   <h1 className="font-bold text-3xl text-primary mb-8">My Appointment</h1>
    //   <div className="overflow-x-auto">
    //     <table className="table-auto w-full">
    //       {/* head */}
    //       <thead>
    //         <tr>
    //           <th className="py-4"></th>
    //           <th className="py-4">Name</th>
    //           <th className="py-4">Email</th>
    //           <th className="py-4">Admin</th>
    //           <th className="py-4">DELETE</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {/* row 1 */}
    //         {allUsers.map((user, i) => (
    //           <tr key={user._id}>
    //             <td className="border px-4 py-2">{i + 1}</td>
    //             <td className="border px-4 py-2">{user.name}</td>
    //             <td className="border px-4 py-2">{user.email}</td>
    //             <td className="border px-4 py-2">
    //               {user?.role !== "admin" && (
    //                 <button
    //                   className="btn btn-sm"
    //                   onClick={() => handleMakeAdmin(user._id)}
    //                 >
    //                   Make Admin
    //                 </button>
    //               )}
    //             </td>
    //             <td className="border px-4 py-2">
    //               <button className="btn btn-sm bg-danger text-white">
    //                 Delete
    //               </button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};

export default AllUsers;
// http://localhost:5000/allUsers
