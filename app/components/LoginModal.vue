<template>
    <div
      class="w-full mx-auto   rounded-2xl p-6 sm:p-8"
    >
      <h2
        class="text-2xl font-bold text-center text-gray-800  mb-6"
      >
        Daxil Ol
      </h2>
  
      <form @submit.prevent="submitLogin" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 "
            >Email</label
          >
          <input
            v-model="form.email"
            type="email"
            placeholder="email@nümunə.com"
            class="mt-1 w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-primary outline-none transition"
          />
        </div>
  
        <div>
          <label class="block text-sm font-medium text-gray-700 "
            >Şifrə</label
          >
          <input
            v-model="form.password"
            type="password"
            placeholder="••••••••"
            class="mt-1 w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-primary outline-none transition"
          />
        </div>
  
        <div class="flex flex-col sm:flex-row justify-end gap-3 pt-4">
          <button
            @click="$emit('close')"
            type="button"
            class="w-full sm:w-auto px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            Ləğv Et
          </button>
  
          <button
            type="submit"
            class="w-full sm:w-auto px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition disabled:opacity-75 disabled:cursor-not-allowed"
            :disabled="isLoading"
          >
            <span v-if="!isLoading">Daxil Ol</span>
            <span v-else class="flex items-center justify-center gap-2">
              <svg
                class="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"
                />
              </svg>
              Yüklənir...
            </span>
          </button>
        </div>
  
        <div class="text-right">
          <button type="button" class="text-sm text-primary hover:underline">
            Şifrəni unutdum?
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import client, { type User } from '~/utils/client'
  const token = useCookie('token')
  const emit = defineEmits(['close'])
  const isLoading = ref(false)
  const user = useState<User | null>('user', () => null)
  
  const form = reactive({
    email: '',
    password: '',
  })
  
  const submitLogin = async () => {
    isLoading.value = true
    try {
      const res = await client.POST('/auth/login', { body: form })
      token.value = res.data?.access_token
      user.value = res.data?.user ?? null
      emit('close')
    } catch (err) {
      console.error('Giriş xətası:', err)
    } finally {
      isLoading.value = false
    }
  }
  </script>
  