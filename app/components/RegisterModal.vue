<template>
  <div class=" overflow-y-auto bg-white  rounded-xl shadow-lg border border-gray-200 ">
    <!-- Başlıq -->
    <div class="text-center border-b border-gray-200 p-6">
      <h2 class="text-xl font-semibold text-gray-800 ">
        Qeydiyyatdan Keç
      </h2>
    </div>

    <!-- Form -->
    <Form @submit="submitForm" :validation-schema="schema" class="p-10 space-y-4 text-gray-800 ">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- Ad -->
        <div>
          <label class="block text-sm font-medium">Ad</label>
          <Field name="name" class="bg-gray-50" v-slot="{ field, errorMessage }">
            <input v-bind="field" type="text" placeholder="Adınız" class="input" />
            <span class="text-red-500 text-sm">{{ errorMessage }}</span>
          </Field>
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium">Email</label>
          <Field name="email" v-slot="{ field, errorMessage }">
            <input v-bind="field" type="email" placeholder="email@nümunə.com" class="input" />
            <span class="text-red-500 text-sm">{{ errorMessage }}</span>
          </Field>
        </div>

        <!-- Şifrə -->
        <div>
          <label class="block text-sm font-medium">Şifrə</label>
          <Field name="password" v-slot="{ field, errorMessage }">
            <input v-bind="field" type="password" placeholder="••••••••" class="input" />
            <span class="text-red-500 text-sm">{{ errorMessage }}</span>
          </Field>
        </div>

        <!-- Telefon -->
        <div>
          <label class="block text-sm font-medium">Telefon</label>
          <Field name="phone" v-slot="{ field, errorMessage }">
            <input v-bind="field" type="tel" placeholder="+994 (XX) XXX-XX-XX" class="input" />
            <span class="text-red-500 text-sm">{{ errorMessage }}</span>
          </Field>
        </div>

        <!-- FIN -->
        <div>
          <label class="block text-sm font-medium">FIN Kodu</label>
          <Field name="fin" v-slot="{ field, errorMessage }">
            <input v-bind="field" type="text" placeholder="1234567" class="input" />
            <span class="text-red-500 text-sm">{{ errorMessage }}</span>
          </Field>
        </div>

        <!-- Cins -->
        <div>
          <label class="block text-sm font-medium">Cins</label>
          <Field name="gender" v-slot="{ field, errorMessage }">
            <select v-bind="field" class="input">
              <option value="">Seçin</option>
              <option value="male">Kişi</option>
              <option value="female">Qadın</option>
            </select>
            <span class="text-red-500 text-sm">{{ errorMessage }}</span>
          </Field>
        </div>

        <!-- Doğum tarixi -->
        <div>
          <label class="block text-sm font-medium">Doğum tarixi</label>
          <Field name="birthdate" v-slot="{ field, errorMessage }">
            <input v-bind="field" type="date" class="input" />
            <span class="text-red-500 text-sm">{{ errorMessage }}</span>
          </Field>
        </div>

        <!-- Şəhər -->
        <div>
          <label class="block text-sm font-medium">Şəhər</label>
          <Field name="city" v-slot="{ field, errorMessage }">
            <input v-bind="field" type="text" placeholder="Bakı" class="input" />
            <span class="text-red-500 text-sm">{{ errorMessage }}</span>
          </Field>
        </div>

        <!-- Rayon -->
        <div>
          <label class="block text-sm font-medium">Rayon / Qəsəbə</label>
          <Field name="district" v-slot="{ field, errorMessage }">
            <input v-bind="field" type="text" placeholder="Nəsimi" class="input" />
            <span class="text-red-500 text-sm">{{ errorMessage }}</span>
          </Field>
        </div>

        <!-- Ünvan -->
        <div class="sm:col-span-2">
          <label class="block text-sm font-medium">Ünvan</label>
          <Field name="address" v-slot="{ field, errorMessage }">
            <textarea v-bind="field" rows="3" placeholder="Küçə, bina, mənzil" class="input"></textarea>
            <span class="text-red-500 text-sm">{{ errorMessage }}</span>
          </Field>
        </div>
      </div>

      <!-- Butonlar -->
      <div class="flex flex-col sm:flex-row justify-end gap-3 pt-6">
        <button type="button" @click="emit('close')"
          class="w-full sm:w-auto px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 transition">
          Ləğv Et
        </button>
        <button type="submit"
          class="w-full sm:w-auto px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition">
          Qeydiyyatdan Keç
        </button>
      </div>
    </Form>
  </div>
</template>
<script setup lang="ts">
import { Form, Field } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { object, email, string, enum as zEnum } from 'zod'
import client from '~/utils/client'

const toast = useToast()
const token = useCookie("token")
const user = useState<User | null>("user", () => null)
const emit = defineEmits(['close'])

const schema = toTypedSchema(
  object({
    name: string().min(2, 'Ad ən az 2 simvol olmalıdır'),
    email: email('Email formatı düzgün deyil'),
    password: string().min(6, 'Şifrə ən az 6 simvol olmalıdır'),
    phone: string().min(10, 'Telefon ən az 10 simvol olmalıdır'),
    fin: string().min(7, 'FIN kodu ən az 7 simvol olmalıdır'),
    gender: zEnum(['male', 'female']),
    birthdate: string(),
    city: string(),
    district: string(),
    address: string(),
  })
)

async function submitForm(values: any) {
  const req = await client.POST("/auth/register", {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: {
      name: values.name,
      email: values.email,
      password: values.password,
      fin_code: values.fin,
      gender: values.gender as "male" | "female",
      phone: values.phone,
      birthday: values.birthdate,
      city: values.city,
      address: values.address,
      region: values.district,
      street: values.address,
    },
  })

  if (req.error?.errors) {
    for (const error of Object.values(req.error.errors)) {
      toast.add({
        title: "Xəta",
        description: error[0],
        type: "background",
        color: "error",
      })
    }
  }

  if (req.data) {
    toast.add({
      title: "Məlumat",
      description: "Qeydiyyatdan keçdiniz.",
      type: "background",
      color: "success",
    })
    token.value = req.data.access_token
    user.value = req.data.user
    emit('close')
  }
}
</script>