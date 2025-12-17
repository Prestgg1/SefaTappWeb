<template>
    <div>
        <!-- Başlıq -->
        <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name="mdi:lock-outline" class="w-8 h-8 text-primary" />
            </div>
            <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">
                Yeni Şifrə Təyin Edin
            </h1>
            <p class="mt-2 text-md text-gray-500">
                Hesabınız üçün yeni və güclü bir şifrə yaradın.
            </p>
        </div>

        <!-- Uğurlu mesaj -->
        <div v-if="isSuccess" class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div class="flex items-start gap-3">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                    <h3 class="text-sm font-medium text-green-800">Şifrə uğurla dəyişdirildi!</h3>
                    <p class="mt-1 text-sm text-green-700">
                        {{ countdown }} saniyə sonra giriş səhifəsinə yönləndiriləcəksiniz...
                    </p>
                </div>
            </div>
        </div>

        <!-- Error mesajı -->
        <div v-if="error" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div class="flex items-start gap-3">
                <Icon name="mdi:alert-circle" class="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                    <h3 class="text-sm font-medium text-red-800">Xəta baş verdi</h3>
                    <p class="mt-1 text-sm text-red-700">{{ error }}</p>
                </div>
            </div>
        </div>

        <!-- Form -->
        <form v-if="!isSuccess" class="space-y-6" @submit.prevent="resetPassword">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2" for="password">
                    Yeni Şifrə
                </label>
                <div class="relative">
                    <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'"
                        placeholder="••••••••" required minlength="8"
                        class="block w-full px-4 py-3 pr-12 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" />
                    <button type="button" @click="showPassword = !showPassword"
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
                        <Icon :name="showPassword ? 'mdi:eye-off' : 'mdi:eye'" class="w-5 h-5" />
                    </button>
                </div>
                <p class="mt-2 text-xs text-gray-500">
                    Şifrə ən azı 8 simvoldan ibarət olmalıdır
                </p>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2" for="password_confirmation">
                    Şifrəni Təsdiqlə
                </label>
                <div class="relative">
                    <input id="password_confirmation" v-model="passwordConfirmation"
                        :type="showPasswordConfirmation ? 'text' : 'password'" placeholder="••••••••" required
                        minlength="8"
                        class="block w-full px-4 py-3 pr-12 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        :class="{ 'border-red-500': passwordMismatch }" />
                    <button type="button" @click="showPasswordConfirmation = !showPasswordConfirmation"
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
                        <Icon :name="showPasswordConfirmation ? 'mdi:eye-off' : 'mdi:eye'" class="w-5 h-5" />
                    </button>
                </div>
                <p v-if="passwordMismatch" class="mt-2 text-xs text-red-600">
                    Şifrələr uyğun gəlmir
                </p>
            </div>

            <!-- Şifrə gücü göstəricisi -->
            <div v-if="password">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                    Şifrə Gücü
                </label>
                <div class="flex gap-1">
                    <div v-for="i in 4" :key="i" class="h-2 flex-1 rounded-full transition-colors"
                        :class="i <= passwordStrength ? strengthColor : 'bg-gray-200'" />
                </div>
                <p class="mt-1 text-xs" :class="strengthTextColor">
                    {{ strengthText }}
                </p>
            </div>

            <div>
                <button :disabled="isLoading || passwordMismatch || !password || !passwordConfirmation" type="submit"
                    class="w-full bg-primary disabled:bg-primary/70 text-white text-base font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    <span v-if="!isLoading">Şifrəni Dəyişdir</span>
                    <span v-else class="flex items-center justify-center gap-2">
                        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                        </svg>
                        Yadda saxlanılır...
                    </span>
                </button>
            </div>
        </form>

        <!-- Giriş linki -->
        <div v-if="isSuccess" class="mt-6 text-center">
            <NuxtLink to="/application/login"
                class="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                <Icon name="mdi:arrow-left" class="w-4 h-4" />
                İndi daxil ol
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const token = ref(route.query.token as string || '')
const password = ref('')
const passwordConfirmation = ref('')
const showPassword = ref(false)
const showPasswordConfirmation = ref(false)
const email = ref(route.query.email as string || '')
const isLoading = ref(false)
const isSuccess = ref(false)
const error = ref('')
const countdown = ref(5)

const passwordMismatch = computed(() => {
    return passwordConfirmation.value && password.value !== passwordConfirmation.value
})

const passwordStrength = computed(() => {
    const pwd = password.value
    let strength = 0

    if (pwd.length >= 8) strength++
    if (pwd.length >= 12) strength++
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++
    if (/\d/.test(pwd)) strength++
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++

    return Math.min(4, strength)
})

const strengthColor = computed(() => {
    const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500']
    return colors[passwordStrength.value - 1] || 'bg-gray-200'
})

const strengthTextColor = computed(() => {
    const colors = ['text-red-600', 'text-orange-600', 'text-yellow-600', 'text-green-600']
    return colors[passwordStrength.value - 1] || 'text-gray-600'
})

const strengthText = computed(() => {
    const texts = ['Zəif', 'Orta', 'Yaxşı', 'Güclü']
    return texts[passwordStrength.value - 1] || 'Çox zəif'
})

const resetPassword = async () => {
    if (passwordMismatch.value) return

    try {
        isLoading.value = true
        error.value = ''

        console.log('Resetting password with token:', token.value)

        const req = await client.POST('/auth/reset_password', {
            body: {
                email: email.value,
                reset_token: token.value,
                password: password.value,
                password_confirmation: passwordConfirmation.value
            }
        })

        console.log(req)

        isSuccess.value = true

        // Countdown başlat və yönləndir
        const timer = setInterval(() => {
            countdown.value--
            if (countdown.value <= 0) {
                clearInterval(timer)
                router.push('/application/login')
            }
        }, 1000)

        isLoading.value = false
    } catch (err: any) {
        console.error('Password reset failed:', err)
        error.value = err?.response?.data?.message || 'Şifrə dəyişdirilərkən xəta baş verdi'
        isLoading.value = false
    }
}

onMounted(() => {
    if (!token.value) {
        router.push('/auth/forgot-password')
    }
})

definePageMeta({
    layout: 'auth',
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