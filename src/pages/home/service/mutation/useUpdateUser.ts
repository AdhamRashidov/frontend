import { request } from "@/config/requests";
import { useMutation } from "@tanstack/react-query"

export const UseUpdateUser = (id: number) => {
	return useMutation({
		mutationFn: (data: { name: string; email: string; username: string }) =>
			request.patch(`/users/${id}`, data).then((res) => res.data),
	})
} 