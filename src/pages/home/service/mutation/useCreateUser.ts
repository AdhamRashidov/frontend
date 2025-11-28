import { request } from "@/config/requests";
import { useMutation } from "@tanstack/react-query";

interface IUser {
  name: string;
  username: string;
  email: string;
}

export const UseCreateUser = () => {
  return useMutation({
    mutationFn: (data: IUser) =>
      request.post("/users", data).then((res) => res.data),
  });
};
