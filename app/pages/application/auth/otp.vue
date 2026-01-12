<template>
    <div>
        <!-- Başlıq -->
        <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name="mdi:shield-check" class="w-8 h-8 text-primary" />
            </div>
            <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">
                OTP Kodu Daxil Edin
            </h1>
            <p class="mt-2 text-md text-gray-500">
                Email ünvanınıza göndərilən 6 rəqəmli kodu daxil edin.
            </p>
            <p class="mt-1 text-sm text-gray-600">
                {{ email }}
            </p>
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

        <!-- OTP Form -->
        <form class="space-y-6" @submit.prevent="verifyOTP">
            <!-- OTP Input -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-3 text-center">
                    Təsdiq Kodu
                </label>
                <div class="flex gap-2 justify-center">
                    <input v-for="(digit, index) in otpDigits" :key="index" :ref="(el) => setInputRef(el, index)"
                        v-model="otpDigits[index]" type="text" inputmode="numeric" maxlength="1"
                        class="w-12 h-14 text-center text-2xl font-bold rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        @input="handleInput(index, $event)" @keydown="handleKeyDown(index, $event)"
                        @paste="handlePaste" />
                </div>
            </div>

            <div>
                <button :disabled="isLoading || !isOTPComplete" type="submit"
                    class="w-full bg-primary disabled:bg-primary/70 text-white text-base font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    <span v-if="!isLoading">Təsdiqlə</span>
                    <span v-else class="flex items-center justify-center gap-2">
                        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                        </svg>
                        Yoxlanılır...
                    </span>
                </button>
            </div>
        </form>

        <!-- Geri dön və yenidən göndər -->
        <div class="mt-6 space-y-3">
            <div class="text-center">
                <p class="text-sm text-gray-600">
                    Kod almadınız?
                    <button @click="resendOTP" :disabled="isResending || countdown > 0"
                        class="font-medium text-primary hover:underline disabled:opacity-50">
                        {{ countdown > 0 ? `Yenidən göndər (${countdown}s)` : 'Yenidən göndər' }}
                    </button>
                </p>
            </div>
            <div class="text-center">
                <NuxtLink to="/application/auth/forgot-password"
                    class="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                    <Icon name="mdi:arrow-left" class="w-4 h-4" />
                    Geriyə qayıt
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const email = ref(route.query.email as string || '')
const otpDigits = ref(['', '', '', '', '', ''])
const otpInputs = ref<(HTMLInputElement | null)[]>([])

const isLoading = ref(false)
const isResending = ref(false)
const error = ref('')
const countdown = ref(0)

const isOTPComplete = computed(() => {
    return otpDigits.value.every(digit => digit !== '')
})

// Function to set input refs properly
const setInputRef = (el: Element | ComponentPublicInstance | null, index: number) => {
    if (el instanceof HTMLInputElement) {
        otpInputs.value[index] = el
    }
}

const handleInput = (index: number, event: Event) => {
    const input = event.target as HTMLInputElement
    const value = input.value.replace(/[^0-9]/g, '')

    otpDigits.value[index] = value

    if (value && index < 5) {
        otpInputs.value[index + 1]?.focus()
    }
}

const handleKeyDown = (index: number, event: KeyboardEvent) => {
    if (event.key === 'Backspace' && !otpDigits.value[index] && index > 0) {
        otpInputs.value[index - 1]?.focus()
    }
}

const handlePaste = (event: ClipboardEvent) => {
    event.preventDefault()
    const pastedData = event.clipboardData?.getData('text').replace(/[^0-9]/g, '')

    if (pastedData) {
        const digits = pastedData.slice(0, 6).split('')
        digits.forEach((digit, index) => {
            if (index < 6) {
                otpDigits.value[index] = digit
            }
        })
        otpInputs.value[Math.min(digits.length, 5)]?.focus()
    }
}

const verifyOTP = async () => {
    try {
        isLoading.value = true
        error.value = ''

        const otp = otpDigits.value.join('')
        console.log('Verifying OTP:', otp, 'for email:', email.value)

        const req = await client().POST('/auth/check_otp', {
            body: {
                email: email.value,
                otp: otp
            }
        })

        console.log(req)

        router.push(`/application/auth/reset_password?token=${req.data?.reset_token}&email=${email.value}`)
    } catch (err: any) {
        console.error('OTP verification failed:', err)
        error.value = err?.response?.data?.message || 'OTP yanlışdır və ya vaxtı bitib'
        isLoading.value = false
    }
}

const resendOTP = async () => {
    try {
        isResending.value = true
        error.value = ''

        const req = await client().POST('/auth/forgot_password', {
            body: { email: email.value }
        })

        console.log('OTP resent:', req)

        // Countdown başlat
        countdown.value = 60
        const timer = setInterval(() => {
            countdown.value--
            if (countdown.value <= 0) {
                clearInterval(timer)
            }
        }, 1000)

        isResending.value = false
    } catch (err) {
        console.error('Resend OTP failed:', err)
        error.value = 'Yenidən göndərmə uğursuz oldu'
        isResending.value = false
    }
}

onMounted(() => {
    if (!email.value) {
        router.push('/application/auth/forgot-password')
    }
    otpInputs.value[0]?.focus()
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>