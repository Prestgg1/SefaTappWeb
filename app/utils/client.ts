import createClient from "openapi-fetch";
import type { components, paths } from "../types/schema"; 
/* 
   a
*/
const client = createClient<paths>({
    baseUrl: "http://api.safatapp.com/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    async fetch(input) {
        const token = useCookie("token");
        if (token.value) {
          input.headers.set('Authorization', `Bearer ${token.value}`)
        }
    
        const response = await fetch(input)
    
        if (response.status === 401) {
            token.value = undefined
            window.location.href = '/application/login'
        }
        return response
      },
});
export default client;
export type ServerClient = typeof client;
export type Doctors = paths['/doctors']['get']['responses']['200']['content']['application/json']
export type Categories = paths['/doctor-categories']['get']['responses']['200']['content']['application/json']
export type Reviews = paths['/reviews/{model}{model_id}']['get']['responses']['200']['content']['application/json']
export type User = components['schemas']['UserResource']
export type Chats = paths['/chats']['get']['responses']['200']['content']['application/json']

