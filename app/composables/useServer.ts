import { useCookie } from "#app";
import createClient from "openapi-fetch";
import type { paths } from "../types/schema"; 

const useServer = () => {
  const token = useCookie("token");

  return createClient<paths>({
    baseUrl: "https://bimonet.com",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });
};
export default useServer;

export type ServerClient = ReturnType<typeof useServer>;