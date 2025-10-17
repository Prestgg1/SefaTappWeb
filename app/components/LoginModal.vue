<template>
      <div class="mt-2 max-h-[60vh] overflow-y-auto pr-2">
        <form @submit.prevent="submitLogin" class="space-y-4">
          <div class="grid grid-cols-1 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                v-model="form.email"
                type="text"
                placeholder="email@nümunə.com"
                class="mt-1 block w-full p-2 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
  
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Şifrə
              </label>
              <input
                v-model="form.password"
                type="password"
                placeholder="••••••••"
                class="mt-1 block w-full p-2 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
  
          <div class="flex flex-col sm:flex-row justify-end gap-3 pt-4">
            <button
              @click="console.log('Clicked'); $emit('close')"
              type="button"
              class="w-full sm:w-auto px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              Ləğv Et
            </button>
            <button
              type="submit"
              class="w-full sm:w-auto px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition"
              :class="{ 'opacity-75 cursor-not-allowed': isLoading }"
              :disabled="isLoading"
            >
              <span v-if="!isLoading">Daxil Ol</span>
              <span v-else>
                <svg
                  class="animate-spin h-5 w-5 mr-3"
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
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm10 0l3 2.647A7.962 7.962 0 0120 12h-4z"
                  ></path>
                </svg>
                Yüklənir...
              </span>
            </button>
          </div>
  
          <div class="mt-2 text-right">
            <button type="button" class="text-sm text-primary hover:underline">
              Şifrəni unutdum?
            </button>
          </div>
        </form>
      </div>
  </template>
  
  <script setup lang="ts">
import client, { type User } from '~/utils/useApi'
const token = useCookie("token")
const isLoading = ref(false)
const emit = defineEmits(['close'])
  const user = useState<User | null>("user", () => null)

  const form = reactive({
    email: '',
    password: '',
  })
  
  const submitLogin = async () => {
    try {
      isLoading.value = true
      const response = await client.POST('/api/auth/login', {
        method: 'POST',
        body: form,
      })
      console.log(response)
      token.value = response.data?.token
      user.value = response.data?.user ?? null 
      emit('close')
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }
  </script>
  