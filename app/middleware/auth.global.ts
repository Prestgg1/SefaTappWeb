import {
    defineNuxtRouteMiddleware,
    navigateTo,
    useState,
  } from "#app";
  
  export default defineNuxtRouteMiddleware(async (to) => {
    const user = useState<User | null | { error: string }>("user");
    if (user.value ) return;
    try {
      const res = await client().GET("/auth/me");
      console.log(res)
      const {data} = res.data!;

      console.log("Kullanıcı verisi:", data);
      user.value = {
        id: data.id,
        name: data.name,
        image: data.image,
        role: data.role,
      };
      if (!data && (to.path === "/profile" || to.path === "/reservations")) {
        return navigateTo("/");
      }
    } catch (error) {
      console.error("Kimlik doğrulama hatası:", error);
      if (to.path === "/profile") {
        return navigateTo("/");
      }
    }
  });