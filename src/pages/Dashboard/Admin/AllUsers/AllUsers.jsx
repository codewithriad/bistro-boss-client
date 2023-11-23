import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return (
    <div className="flex justify-evenly">
      <h2>All Users</h2>
      <h2>All Users</h2>
      <h2>Total Users : {users.length}</h2>
    </div>
  );
};

export default AllUsers;
