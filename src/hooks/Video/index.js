import { useMutation } from "@tanstack/react-query";
import { API } from "../../api";
import { AxiosSecure } from "../../lib/AxiosSecure";

export const useGetSportsVideo = () => {
  return useMutation({
    mutationKey: ["GetSportsVideo"],
    mutationFn: async (payload) => {
      const { data } = await AxiosSecure.post(API.accessToken, payload);
      return data;
    },
  });
};
