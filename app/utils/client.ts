import createClient from "openapi-fetch";
import type { components, paths } from "../types/schema"; 

const client = createClient<paths>({
    baseUrl: "http://192.168.1.69:8000",
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
            window.location.href = '/login'
        }
        return response
      },
});
export default client;
export type ServerClient = typeof client;
export type Doctors = paths['/api/doctors/']['get']['responses']['200']['content']['application/json']
export type Categories = paths['/api/doctor_category/']['get']['responses']['200']['content']['application/json']
export type Reviews = paths['/api/reviews/{model}/{model_id}']['get']['responses']['200']['content']['application/json']
export type User = components['schemas']['UserBase']
export type AiChats = paths['/api/chats/ai']['get']['responses']['200']['content']['application/json']
export type Chats = paths['/api/chats/']['get']['responses']['200']['content']['application/json']

