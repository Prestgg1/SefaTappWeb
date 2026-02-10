import createClient from "openapi-fetch";
import type { components, paths } from "../types/schema";
/* [nuxt] A composable that requires access to the Nuxt instance was called outside of a plugin, Nuxt hook, Nuxt middleware, or Vue setup function. This is probably not a Nuxt bug. Find out more at `https://nuxt.com/docs/4.x/guide/concepts/auto-imports#vue-and-nuxt-composables`. */

export const useApi = () => {
  const config = useRuntimeConfig()
  const token = useCookie("token")

  const client = createClient<paths>({
    baseUrl: config.public.API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    credentials: 'include'
  })


  return client
}

export default useApi;
export type ServerClient = typeof client;
export type Doctors = paths['/doctors']['get']['responses']['200']['content']['application/json']['data']
export type Categories = paths['/doctor-categories']['get']['responses']['200']['content']['application/json']
export type Reviews = paths['/reviews/{model}/{modelId}']['get']['responses']['200']['content']['application/json']
export type User = components['schemas']['UserResource']
export type Appointments = paths['/appointments/doctor']['get']['responses']['200']['content']['application/json']['data']
export type Chats = paths['/chats']['get']['responses']['200']['content']['application/json']['data']

