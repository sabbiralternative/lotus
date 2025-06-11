import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

const useGetSocialLink = () => {
  const { data: socialLink = {}, refetch } = useQuery({
    queryKey: ["whatsApp"],
    queryFn: async () => {
      const res = await AxiosSecure.post(API.whatsapp);
      const data = res.data;
      if (data?.success) {
        return data?.result;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { socialLink, refetch };
};

export default useGetSocialLink;
