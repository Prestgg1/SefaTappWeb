import { defineNuxtRouteMiddleware, navigateTo, useState } from "#app";

export default defineNuxtRouteMiddleware(async (to) => {
  const user = useState("user");
  
  if (user.value) return;

  try {
    const res = await client().GET("/auth/me");
    
    if (!res?.data?.data) {
      if (to.path === "/profile" || to.path === "/reservations") {
        return navigateTo("/");
      }
      return;
    }

    const { data } = res.data;

    user.value = {
      id: data.id,
      name: data.name,
      image: data.image,
      role: data.role,
    };

  } catch (error) {
    if (to.path === "/profile" || to.path === "/reservations") {
      return navigateTo("/");
    }
  }
});