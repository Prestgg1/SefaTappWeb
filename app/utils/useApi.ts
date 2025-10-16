import createClient from "openapi-fetch";
import type { paths } from "../types/schema"; 

const client = createClient<paths>({
    baseUrl: "https://bimonet.com",

});
const server = createClient<paths>({
    baseUrl: "https://bimonet.com",
})
export default client;
export { server };

export type Doctors = paths['/api/doctors/']['get']['responses']['200']['content']['application/json']
export type Categories = paths['/api/doctor_category/']['get']['responses']['200']['content']['application/json']
export type Reviews = paths['/api/reviews/{model}/{model_id}']['get']['responses']['200']['content']['application/json']