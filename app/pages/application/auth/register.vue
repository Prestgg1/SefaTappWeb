<template>
  <div class="grow flex items-center justify-center container mx-auto px-6 py-12">
    <div class="w-full max-w-3xl">
      <div class="bg-white rounded-xl shadow-md p-8">
        <!-- Başlıq -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">
            Yeni hesab yaradın
          </h1>
          <p class="mt-2 text-md text-gray-500">
            Xoş gəlmisiniz.
          </p>
        </div>

        <!-- Form -->
        <Form class="space-y-6" @submit="register" :validation-schema="schema">
          <div class="flex gap-2">
            <div class="flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-2" for="name">
                Ad Soyad
              </label>
              <Field name="name" type="text" placeholder="Ad Soyad" required
                class="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" />
              <ErrorMessage name="name" class="text-red-500 text-sm" />
            </div>
            <div class="flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-2" for="email">
                Email
              </label>
              <Field name="email" type="email" placeholder="email@nümunə.com" required
                class="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" />
              <ErrorMessage name="email" class="text-red-500 text-sm" />
            </div>
          </div>






          <div>
            <div class="flex items-center justify-between">
              <label class="block text-sm font-medium text-gray-700 mb-2" for="password">
                Şifrə
              </label>
            </div>
            <Field name="password" type="password" placeholder="••••••••" required
              class="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" />
            <ErrorMessage name="password" class="text-red-500 text-sm" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2" for="phone">
              Telefon
            </label>
            <Field name="phone" type="tel" placeholder="+994 (XX) XXX-XX-XX" required
              class="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2" for="fin">
              Fin Kodu
            </label>
            <Field name="fin" type="tel" placeholder="1234567" required maxlength="7"
              class="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2" for="gender">
              Cins
            </label>
            <Field name="gender" v-slot="{ field, errorMessage }">
              <select v-bind="field" class="input">
                <option value="">Seçin</option>
                <option value="male">Kişi</option>
                <option value="female">Qadın</option>
              </select>
              <span class="text-red-500 text-sm">{{ errorMessage }}</span>
            </Field>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2" for="birthdate">
              Doğum Tarixi
            </label>
            <Field name="birthdate" v-slot="{ field, errorMessage }">
              <input v-bind="field" type="date" class="input" />
              <span class="text-red-500 text-sm">{{ errorMessage }}</span>
            </Field>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2" for="city">
              Şəhər
            </label>
            <Field name="city" v-slot="{ field, errorMessage }">
              <input v-bind="field" type="text" class="input" />
              <span class="text-red-500 text-sm">{{ errorMessage }}</span>
            </Field>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2" for="district">
              Rayon / Qəsəbə
            </label>
            <Field name="district" v-slot="{ field, errorMessage }">
              <input v-bind="field" type="text" class="input" />
              <span class="text-red-500 text-sm">{{ errorMessage }}</span>
            </Field>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2" for="address">
              Ünvan
            </label>
            <Field name="address" v-slot="{ field, errorMessage }">
              <textarea v-bind="field" rows="3" class="input"></textarea>
              <span class="text-red-500 text-sm">{{ errorMessage }}</span>
            </Field>
          </div>
          <div>
            <button :disabled="isLoading" type="submit"
              class="w-full bg-primary disabled:bg-primary/70 text-white text-base font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              <span v-if="!isLoading">Qeydiyyatdan Keç</span>
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
            Artıq hesabınız var?
            <NuxtLink to="/application/login" class="font-medium text-primary hover:underline">
              Daxil ol
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isLoading = ref(false)
const user = useState<User | null>('user', () => null)
const token = useCookie('token')
const router = useRouter()
import { object, email, string, enum as zEnum } from 'zod'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
const toast = useToast()


const schema = toTypedSchema(
  object({
    name: string("Ad soyad boş olmamalıdır").min(2, 'Ad ən az 2 simvol olmalıdır'),
    email: email('Email formatı düzgün deyil'),
    password: string("Şifrə boş olmamalıdır").min(6, 'Şifrə ən az 6 simvol olmalıdır'),
    phone: string("Telefon boş olmamalıdır").min(10, 'Telefon ən az 10 simvol olmalıdır'),
    fin: string("FIN kodu boş olmamalıdır").min(7, 'FIN kodu ən az 7 simvol olmalıdır'),
    gender: zEnum(['male', 'female']),
    birthdate: string("Doğum tarixi boş olmamalıdır"),
    city: string("Şəhər boş olmamalıdır"),
    district: string("Rayon boş olmamalıdır"),
    address: string("Ünvan boş olmamalıdır"),
  })
)



const register = async (values: any) => {
  try {
    isLoading.value = true
    const req = await client().POST('/auth/register', {
      body: {
        name: values.name, email: values.email, password: values.password,
        fin_code: values.fin, gender: values.gender, phone: values.phone, birthday: values.birthdate, city: values.city, region: values.district, street: values.address, address: values.address
      }
    })
    console.log(req)
    if (req.error) {
      for (const [key, value] of Object.entries(req.error.errors)) {
        console.log(value[0])
        toast.add({
          title: value[0],
          color: "error"
        })
      }
    }
    else {
      toast.add({
        title: "Qeydiyyatdan keçildiniz",
        type: "background",
        color: "success"
      })
      router.replace('/application')
    }


    isLoading.value = false
  } catch (err) {
    toast.add({
      title: "Bilinməyən bir xəta baş verdi. Yeniden Yoxlayın",
      type: "background",

      color: "error"
    })
    console.error('Login failed:', err)
    isLoading.value = false
  }
}

definePageMeta({
  layout: 'main',
})
</script>
