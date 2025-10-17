import createClient from "openapi-fetch";
import type { components, paths } from "../types/schema"; 

const client = createClient<paths>({
    baseUrl: "https://bimonet.com",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
});

export default client;

export type Doctors = paths['/api/doctors/']['get']['responses']['200']['content']['application/json']
export type Categories = paths['/api/doctor_category/']['get']['responses']['200']['content']['application/json']
export type Reviews = paths['/api/reviews/{model}/{model_id}']['get']['responses']['200']['content']['application/json']
export type User = components['schemas']['UserBase']