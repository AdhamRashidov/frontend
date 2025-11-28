import { request } from "@/config/requests";
import { useQuery } from "@tanstack/react-query";

interface IUser {
	name: string;
	email: string;
	username?: string;
	id: number;
}

export const useUser = (id: string) => {
	return useQuery({
		queryKey: ["user", id],
		queryFn: () => request.get<IUser>(`/users/${id}`).then((res) => res.data),
	});
}