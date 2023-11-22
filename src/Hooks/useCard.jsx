import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useCard = () => {
  const axiosSecure = useAxiosPublic();
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cards?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCard;
