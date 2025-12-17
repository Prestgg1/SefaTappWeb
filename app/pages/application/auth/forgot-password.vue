<template>
    <div>
        <!-- Başlıq -->
        <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name="mdi:lock-reset" class="w-8 h-8 text-primary" />
            </div>
            <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">
                Şifrəni Sıfırla
            </h1>
            <p class="mt-2 text-md text-gray-500">
                Email ünvanınızı daxil edin və şifrəni sıfırlamaq üçün təlimat göndərək.
            </p>
        </div>

        <!-- Uğurlu mesaj -->
        <div v-if="isSuccess" class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div class="flex items-start gap-3">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                    <h3 class="text-sm font-medium text-green-800">Email göndərildi!</h3>
                    <p class="mt-1 text-sm text-green-700">
                        Şifrəni sıfırlamaq üçün təlimatları email qutunuzdan yoxlayın.
                    </p>
                </div>
            </div>
        </div>

        <!-- Form -->
        <form v-if="!isSuccess" class="space-y-6" @submit.prevent="resetPassword">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2" for="email">
                    Email
                </label>
                <input id="email" v-model="email" type="email" placeholder="email@nümunə.com" required
                    class="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" />
            </div>

            <div>
                <button :disabled="isLoading" type="submit"
                    class="w-full bg-primary disabled:bg-primary/70 text-white text-base font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    <span v-if="!isLoading">Sıfırlama Linki Göndər</span>
                    <span v-else class="flex items-center justify-center gap-2">
                        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                        </svg>
                        Göndərilir...
                    </span>
                </button>
            </div>
        </form>

        <!-- Geri dön linki -->
        <div class="mt-6 text-center">
            <NuxtLink to="/application/login"
                class="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                <Icon name="mdi:arrow-left" class="w-4 h-4" />
                Girişə qayıt
            </NuxtLink>
        </div>

        <!-- Əlavə kömək -->
        <div v-if="isSuccess" class="mt-8 text-center">
            <p class="text-sm text-gray-600">
                Email almadınız?
                <button @click="resetPassword" :disabled="isLoading"
                    class="font-medium text-primary hover:underline disabled:opacity-50">
                    Yenidən göndər
                </button>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
const email = ref('')
const isLoading = ref(false)
const isSuccess = ref(false)
const toast = useToast()
const router = useRouter()
const resetPassword = async () => {
    try {
        isLoading.value = true
        console.log('Password reset request for:', email.value)

        const req = await client.POST('/auth/forgot_password', {
            body: { email: email.value }
        })


        if (req.data) {
            toast.add({
                title: 'Uğurlu',
                description: 'Otp kodu göndərilmişdir!',
                color: 'success',
                duration: 5000,
            })
            router.push(`/application/otp?email=${email.value}`)
            isSuccess.value = true
            isLoading.value = false
        }
    } catch (err) {
        console.error('Password reset failed:', err)
        isLoading.value = false
    }
}

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