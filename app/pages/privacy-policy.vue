<template>
  <main class="grow container mx-auto px-6 py-12 md:py-20 transition-colors duration-300 bg-white">
    <div class="max-w-4xl mx-auto space-y-10">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Məxfi Məlumat Siyasəti
        </h1>
        <p class="mt-4 text-lg text-gray-600">
          Son yenilənmə: 6 Oktyabr 2025
        </p>
      </div>

      <div class="prose prose-lg max-w-none text-gray-800 space-y-6">
        <p>
          ŞefaTapp olaraq, məxfi məlumatlarınızın qorunması bizim ən böyük
          prioritetimizdir. Bu siyasət, tətbiqimizdə məlumatlarınızın necə
          toplandığını, istifadə edildiyini və qorunduğunu izah edir.
        </p>

        <!-- Məlumat Toplama -->
        <section>
          <h2 class="text-2xl font-bold mb-4 border-l-4 border-teal-600 pl-4">Məlumat Toplama</h2>
          <p class="mb-4">Biz aşağıdakı məlumatları toplayırıq:</p>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <input type="checkbox" checked class="custom-checkbox mt-1 shrink-0 border-teal-600 bg-teal-600 text-white focus:ring-teal-500" />
              <span>Ad, soyad və əlaqə məlumatları (e-poçt, telefon nömrəsi)</span>
            </li>
            <li class="flex items-start gap-3">
              <input type="checkbox" checked class="custom-checkbox mt-1 shrink-0 border-teal-600 bg-teal-600 text-white focus:ring-teal-500" />
              <span>Tətbiqdəki fəaliyyətləriniz (məsələn, məşqlər, qidalanma planları)</span>
            </li>
            <li class="flex items-start gap-3">
              <input type="checkbox" checked class="custom-checkbox mt-1 shrink-0 border-teal-600 bg-teal-600 text-white focus:ring-teal-500" />
              <span>Texniki məlumatlar (IP ünvanı, cihaz məlumatları)</span>
            </li>
          </ul>
        </section>

        <!-- Məlumatın İstifadəsi -->
        <section>
          <h2 class="text-2xl font-bold mb-4 border-l-4 border-teal-600 pl-4">Məlumatın İstifadəsi</h2>
          <p class="mb-4">Topladığımız məlumatlar aşağıdakı məqsədlər üçün istifadə olunur:</p>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <input type="checkbox" checked class="custom-checkbox mt-1 shrink-0 border-teal-600 bg-teal-600 text-white focus:ring-teal-500" />
              <span>Tətbiqin funksionallığını təmin etmək və təkmilləşdirmək</span>
            </li>
            <li class="flex items-start gap-3">
              <input type="checkbox" checked class="custom-checkbox mt-1 shrink-0 border-teal-600 bg-teal-600 text-white focus:ring-teal-500" />
              <span>Fərdi təkliflər və məsləhətlər təqdim etmək</span>
            </li>
            <li class="flex items-start gap-3">
              <input type="checkbox" checked class="custom-checkbox mt-1 shrink-0 border-teal-600 bg-teal-600 text-white focus:ring-teal-500" />
              <span>Təhlükəsizliyi qorumaq və sui-istifadənin qarşısını almaq</span>
            </li>
          </ul>
        </section>

        <!-- Məlumatın Qorunması -->
        <section>
          <h2 class="text-2xl font-bold mb-4 border-l-4 border-teal-600 pl-4">Məlumatın Qorunması</h2>
          <p>
            Məlumatlarınızın təhlükəsizliyini təmin etmək üçün müasir təhlükəsizlik
            tədbirləri tətbiq edirik. Məlumatlarınızın icazəsiz ələ keçirilməsi,
            itirilməsi və ya sui-istifadəsi hallarının qarşısını almaq üçün bütün
            lazımi addımları atırıq.
          </p>
        </section>

        <!-- Məlumatın Paylaşılması -->
        <section>
          <h2 class="text-2xl font-bold mb-4 border-l-4 border-teal-600 pl-4">Məlumatın Paylaşılması</h2>
          <p class="mb-4">Məlumatlarınızı üçüncü tərəflərlə yalnız aşağıdakı hallarda paylaşırıq:</p>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <input type="checkbox" checked class="custom-checkbox mt-1 shrink-0 border-teal-600 bg-teal-600 text-white focus:ring-teal-500" />
              <span>Qanunvericilik tələbləri olduqda</span>
            </li>
            <li class="flex items-start gap-3">
              <input type="checkbox" checked class="custom-checkbox mt-1 shrink-0 border-teal-600 bg-teal-600 text-white focus:ring-teal-500" />
              <span>Xidmət təminatçıları (məsələn, bulud xidmətləri) ilə, məxfiliyin qorunması şərti ilə</span>
            </li>
          </ul>
        </section>

        <!-- Dəyişikliklər -->
        <section>
          <h2 class="text-2xl font-bold mb-4 border-l-4 border-teal-600 pl-4 dark:text-white">Dəyişikliklər</h2>
          <p>
            Bu məxfi məlumat siyasətini zaman-zaman dəyişdirmə haqqımızı saxlayırıq.
            Dəyişikliklər tətbiqdə və ya veb saytımızda elan ediləcək.
          </p>
        </section>

        <!-- Əlaqə -->
        <section>
          <h2 class="text-2xl font-bold mb-4 border-l-4 border-teal-600 pl-4 dark:text-white">Əlaqə</h2>
          <p>
            Məxfi məlumat siyasəti ilə bağlı suallarınız olduqda, bizimlə əlaqə saxlaya
            bilərsiniz:
            <a href="mailto:prestgg56@gmail.com" class="text-teal-600 dark:text-teal-400 hover:underline">
              prestgg56@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped>
.custom-checkbox {
  appearance: none;
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  border-width: 2px;
  transition: all 0.2s;
}
.custom-checkbox:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
