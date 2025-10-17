// middleware/auth.ts (isteğe bağlı bir isim)
import {
    defineNuxtRouteMiddleware,
    navigateTo,
    useCookie,
    useState,
  } from "#app";
  import useServer from "~/composables/useServer"; 
  
  export default defineNuxtRouteMiddleware(async (to) => {
    const user = useState<User | null | { error: string }>("user");
  
    const token = useCookie("token");
    const serverClient = useServer();
    console.log(token.value)
    if (user.value) {
      return;
    } else {
      if (token.value) {
        try {
          const res = await serverClient.GET("/api/auth/me", {
            headers: {
              Authorization: `Bearer ${token.value}`,
            },
          });
          console.log(res)
          const data = res.data!;
  
          console.log("Kullanıcı verisi:", data);
          user.value = {
            id: data.id,
            name: data.name,
            email: data.email,
            image: data.image,
            status: data.status,
            role: data.role,
          };
          if (!data && to.path === "/profile") {
            return navigateTo("/");
          }
        } catch (error) {
          console.error("Kimlik doğrulama hatası:", error);
          token.value = null;
          if (to.path === "/profile") {
            return navigateTo("/");
          }
        }
      } else {
        if (to.path === "/profile") {
          return navigateTo("/");
        }
      }
    }
  });