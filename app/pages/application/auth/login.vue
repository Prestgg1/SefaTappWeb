<template>
  <div class="grow flex items-center justify-center container mx-auto px-6 py-12">
    <div class="w-full max-w-md">
      <div class="bg-white rounded-xl shadow-md p-8">
        <!-- Başlıq -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">
            Hesabınıza Daxil Olun
          </h1>
          <p class="mt-2 text-md text-gray-500">
            ŞefaTapp dünyasına xoş gəlmisiniz.
          </p>
        </div>

        <!-- Form -->
        <form class="space-y-6" @submit.prevent="login">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2" for="email">
              Email
            </label>
            <input id="email" v-model="email" type="email" placeholder="email@nümunə.com" required
              class="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" />
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label class="block text-sm font-medium text-gray-700 mb-2" for="password">
                Şifrə
              </label>
              <NuxtLink to="/application/auth/forgot-password" class="text-sm text-primary hover:underline">
                Şifrəni unutmusunuz?
              </NuxtLink>
            </div>
            <input id="password" v-model="password" type="password" placeholder="••••••••" required
              class="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" />
          </div>

          <div>
            <button :disabled="isLoading" type="submit"
              class="w-full bg-primary disabled:bg-primary/70 text-white text-base font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              <span v-if="!isLoading">Daxil Ol</span>
              <span v-else class="flex items-center justify-center gap-2">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                </svg>
                Yüklənir...
              </span>
            </button>
          </div>
        </form>

        <!-- Separator -->
        <div class="mt-6 flex items-center">
          <div class="grow border-t border-gray-300"></div>
          <span class="mx-4 text-sm text-gray-500">və ya</span>
          <div class="grow border-t border-gray-300"></div>
        </div>

        <!-- Sosial Girişlər -->
        <div class="mt-6 space-y-4">
          <button type="button"
            class="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors">
            <Icon name="logos:google-icon" class="w-5 h-5" />
            <span class="text-sm font-medium text-gray-700">Google ilə daxil ol</span>
          </button>

          <button type="button"
            class="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors">
            <Icon name="logos:facebook" class="w-5 h-5 text-[#1877F2]" />
            <span class="text-sm font-medium text-gray-700">Facebook ilə daxil ol</span>
          </button>
        </div>

        <!-- Alt -->
        <div class="mt-8 text-center">
          <p class="text-sm text-gray-600">
            Hesabınız yoxdur?
            <NuxtLink to="/application/register" class="font-medium text-primary hover:underline">
              Qeydiyyatdan Keç
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const isLoading = ref(false)
const password = ref('')
const user = useState<User | null>('user', () => null)

const router = useRouter()
const toast = useToast()

const login = async () => {
  try {
    isLoading.value = true
    console.log('Login attempt:', email.value, password.value)

    const req = await client().POST('/auth/login', { body: { email: email.value, password: password.value } }) 
    if ( req.data ) {
     user.value = req.data.user
      router.replace('/application')
      toast.add({
        title: 'Daxil oldunuz',
        type: 'background',
        color: 'success'
      })
    }
    else{
      toast.add({
        title: req.error?.message,
        type: 'background',
        color: 'error'
      })
    } 
    isLoading.value = false
  } catch (err) {
    console.error('Login failed:', err)
    isLoading.value = false
  }
}

definePageMeta({
  layout: 'main', 
})
</script>

<style scoped>
.bg-primary {
  background-color: #226d63;
}

.text-primary {
  color: #226d63;
}
</style>