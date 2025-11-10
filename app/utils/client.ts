import createClient from "openapi-fetch";
import type { components, paths } from "../types/schema"; 
/* ip_1:https://bimonet.com/
   ip_2: http://192.100.2.30:8000
*/
const client = createClient<paths>({
    baseUrl: "http://bimonet.com",
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
export type Doctors = paths['/api/doctors/']['get']['responses']['200']['content']['application/json']
export type Categories = paths['/api/doctor_category/']['get']['responses']['200']['content']['application/json']
export type Reviews = paths['/api/reviews/{model}/{model_id}']['get']['responses']['200']['content']['application/json']
export type User = components['schemas']['UserBase']
export type Chats = paths['/api/chats/']['get']['responses']['200']['content']['application/json']

