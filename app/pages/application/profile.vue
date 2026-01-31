<template>
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">
          Hesab Məlumatları
        </h1>
  
        <div class="bg-card-light rounded-xl shadow-md p-6 sm:p-8">
          <!-- Header -->
          <div
            class="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 border-b border-gray-200 pb-8"
          >
            <div class="relative">
              <img
                v-if="!loading"
                :src="profile.image"
                alt="User Profile Picture"
                class="w-32 h-32 rounded-full object-cover ring-4 ring-primary/20"
              />
              <div v-else class="w-32 h-32 bg-gray-200 rounded-full animate-pulse"></div>
  
              <button
                v-if="isEditing"
                class="absolute bottom-1 right-1 bg-primary text-white p-1.5 rounded-full hover:bg-primary/90 transition-colors shadow-md"
                @click="changeProfileImage"
              >
                <Icon name="mdi:pencil-outline" class="text-sm" />
              </button>
            </div>
  
            <div class="text-center sm:text-left grow">
              <h2 class="text-2xl font-bold text-gray-900">
                {{ loading ? "Yüklənir..." : profile.name }}
              </h2>
              <p class="text-md text-gray-500 mt-1">{{ profile.email }}</p>
  
              <div
                class="mt-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3"
              >
                <button
                  v-if="!isEditing && !loading"
                  class="w-full sm:w-auto bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  @click="toggleEdit"
                >
                  <Icon name="mdi:pencil-outline" class="text-base" />
                  Profili Redaktə Et
                </button>
  
                <button
                  v-if="isEditing"
                  class="w-full sm:w-auto bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  @click="saveProfile"
                  :disabled="saving"
                >
                  <Icon
                    v-if="!saving"
                    name="mdi:content-save-outline"
                    class="text-base"
                  />
                  <span v-else class="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
                  Yadda Saxla
                </button>
              </div>
            </div>
          </div>
  
          <!-- Personal Information -->
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Şəxsi Məlumatlar
              </h3>
              <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <div
                  v-for="(value, key) in personalFields"
                  :key="key"
                  class="flex flex-col"
                >
                  <dt class="text-sm font-medium text-gray-500">{{ value.label }}</dt>
                  <dd class="mt-1 text-md font-semibold text-gray-800">
                    <input
                      v-if="isEditing && !value.readonly"
                      v-model="profile[key]"
                      class="border border-gray-300 rounded-lg px-2 py-1 w-full focus:ring-primary focus:border-primary outline-none"
                    />
                    <span v-else>{{ profile[key] || "—" }}</span>
                  </dd>
                </div>
              </dl>
            </div>
  
            <!-- Contact Information -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Əlaqə Məlumatları
              </h3>
              <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <div
                  v-for="(value, key) in contactFields"
                  :key="key"
                  class="flex flex-col"
                >
                  <dt class="text-sm font-medium text-gray-500">{{ value.label }}</dt>
                  <dd class="mt-1 text-md font-semibold text-gray-800">
                    <input
                      v-if="isEditing && !value.readonly"
                      v-model="profile[key]"
                      class="border border-gray-300 rounded-lg px-2 py-1 w-full focus:ring-primary focus:border-primary outline-none"
                    />
                    <span v-else>{{ profile[key] || "—" }}</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  
  definePageMeta({
    layout: "main",
  });
  
  const isEditing = ref(false);
  const loading = ref(true);
  const saving = ref(false);
  const profile = ref<any>({
    image: "",
    name: "",
    fin: "",
    gender: "",
    birthDate: "",
    email: "",
    phone: "",
    city: "",
    region: "",
    address: "",
  });
  
  const personalFields = {
    name: { label: "Ad", readonly: false },
    fin: { label: "FIN Kodu", readonly: true },
    gender: { label: "Cins", readonly: false },
    birthDate: { label: "Doğum tarixi", readonly: false },
  };
  
  const contactFields = {
    email: { label: "Email", readonly: true },
    phone: { label: "Telefon", readonly: true },
    city: { label: "Şəhər", readonly: false },
    region: { label: "Rayon/Qəsəbə", readonly: false },
    address: { label: "Ünvan", readonly: false },
  };
  
  function toggleEdit() {
    isEditing.value = true;
  }
  
  async function fetchProfile() {
    loading.value = true;
    try {
      /* BUG: Burasi tamamlanmasi lazim  */
      const res = await client().GET("/profile/customer");
      if (res.data && res.response.status === 200) {
        profile.value = {
          image: res.data.user.image,
          name: res.data.user.name,
          fin: res.data.profile?.fin_code,
          gender: res.data.profile?.gender,
          birthDate: res.data.profile?.birthday,
          email: res.data.user.email,
          phone: res.data.profile?.phone,
          city: res.data.profile?.city,
          region: res.data.profile?.region,
          address: res.data.profile?.address,
        };
      }
    } catch (err) {
      console.error("Failed to fetch profile", err);
    } finally {
      loading.value = false;
    }
  }
  
  async function saveProfile() {
    saving.value = true;
    try {
      const res = await client().PUT("/api/user/profile", {
        body: {
          address: profile.value.address,
          city: profile.value.city,
          region: profile.value.region,
          phone: profile.value.phone,
          image: profile.value.image,
        },
      });
      if (res.response.status === 200) {
        isEditing.value = false;
        console.log("Profile updated successfully");
      }
    } catch (err) {
      console.error("Failed to save profile", err);
    } finally {
      saving.value = false;
    }
  }
  
  function changeProfileImage() {
    alert("Profile image change dialog");
  }
  
  onMounted(fetchProfile);
  </script>
  