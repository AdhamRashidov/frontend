import { request } from "@/config/requests";
import { useQuery } from "@tanstack/react-query";


interface IUserList {
	name: string;
	username?: string;
	email: string;
	id: number;
}

export const useGetUserList = () => {
	return useQuery({
		queryKey: ["user_list"],
		queryFn: () => request.get<IUserList[]>("/users").then((res) => res.data),
	});
}