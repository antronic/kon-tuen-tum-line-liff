<script>
  import Icon from '@iconify/svelte'
  import { onMount } from 'svelte'
  import liff from '@line/liff';

  // State to check if user is logged in
  let isLineLoggedIn = $state(false)
  let isCheckingLogin = $state(true)

  // Initialize LIFF
  function checkLogin() {
    isLineLoggedIn = liff.isLoggedIn()
    isCheckingLogin = false
  }

  // On page load, initialize LIFF
  onMount(() => {
    // If liff is ready, check login status
    liff.ready
      .then(() => {
        checkLogin()
      })
  })
</script>

<main class="bg-amber-100">

  <div class="bg-gradient-to-br from-yellow-500 to-amber-400 flex md:flex-row flex-col py-16 lg:py-32">
    <div class="container mx-auto flex flex-col md:flex-row md:items-center">
      <div class="pl-8 flex-1">
        <h1 class="text-yellow-700 prompt-medium">สวัสดีทุกท่าน<br/>ผู้รักในการหาทำ</h1>
        <p class="text-yellow-600 text-lg py-2">อยู่บ้านเฉย ๆ อาจน่าเบื่อ ออกหาทำกันดีกว่า<br/>ตรงนี้เขียนอะไรดีอะ...อะ ปิ่ว ปิ้ว ปิ๊ว</p>

        {#if isCheckingLogin}
          <div class="mt-4">
            <p class="text-slate-600">กำลังตรวจสอบสถานะการเข้าสู่ระบบ...</p>
          </div>
        {:else}
          {#if isLineLoggedIn}
            <div>
              <p class="text-slate-600">คุณได้เข้าสู่ระบบด้วย LINE แล้ว</p>
              <a href="/profile" class="inline-flex items-center group mt-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-800 active:scale-95 active:shadow-sm transition-all shadow-md text-amber-100 px-4 py-2 text-lg rounded-md prompt-medium">
                ดูโปรไฟล์ของคุณ <Icon icon="carbon:user-avatar-filled" class="ml-2 group-hover:translate-x-1 group-active:translate-x-3 transition-transform inline-block" width="24" />
              </a>
            </div>
            <div>
              <a href="#" onclick="{() => {liff.logout(); window.location.reload() }}" class="text-slate-600 text-sm mt-2">
                ออกจากระบบ
              </a>
            </div>
          {/if}
          {#if !isLineLoggedIn}
            <a
              href="#"
              class="inline-flex items-center group mt-4 bg-green-500 hover:bg-green-600 active:bg-green-800 active:scale-95 active:shadow-sm transition-all shadow-md text-amber-100 px-4 py-2 text-lg rounded-md prompt-medium"
              onclick="{() => {
                liff.login({ redirectUri: `${window.location.href}/profile` })
              }}"
            >
              เข้าสู่ระบบด้วย LINE <Icon icon="mingcute:arrows-right-fill" class="group-hover:translate-x-1 group-active:translate-x-3 transition-transform inline-block" width="24" />
            </a>
          {/if}
        {/if}

      </div>

      <!-- Right container - with Elements -->
      <div class="relative w-full h-96 mb-8 cursor-pointer md:flex-1">
        <div class="bg-yellow-200/50 text-yellow-400 absolute transition-transform hover:scale-125 active:scale-90 right-28 bottom-4 p-8 w-1/3 rounded animate-pulse">
          <p>ใส่รูปตรงนี้นะ</p>
          <p class="text-sm">รูปอะไรนะ</p>
        </div>

        <div class="bg-cyan-200/60 text-yellow-400 absolute transition-transform hover:scale-125 active:scale-90 right-54 bottom-12 p-4 w-48 h-48 rounded-full animate-bounce"></div>
        <div class="bg-rose-200/75 text-yellow-400 absolute transition-transform hover:scale-150 active:scale-90 right-72 bottom-2 p-4 w-32 h-32 rounded-xl animate-spin"></div>
      </div>
    </div>
  </div>

  <div class="px-4 py-8">
    <div class="text-center">
      <h2 class="text-amber-700 prompt-medium text-4xl!">วางแผนกิจกรรมแสนสุขสำหรับวันหยุด</h2>
      <p class="text-slate-700">คำโปรย คำโปรย คำโปรย คำโปรย <span class="animate-pulse">✨✨</span></p>
    </div>
  </div>

  <div class="grid grid-cols-12 gap-x-8 gap-y-8 px-8 container mx-auto pt-4 pb-16">
    <!-- Start region - Card -->
    <div class="group col-span-12 md:col-span-6 lg:col-span-4 bg-amber-50 rounded-lg overflow-clip hover:shadow-xl shadow-md transition-shadow">
      <div class="bg-red-900 overflow-clip relative aspect-square">
        <img width="100%" src="/img01.png" class="group-hover:scale-110 transition-transform" alt="">
      </div>
      <div class="p-4">
        <h3 class="text-amber-700 prompt-medium">กิจกรรม ปีนต้นงิ้ว</h3>
        <p class="break-words text-slate-800">นานแค่ไหนแล้วนะ ที่ไม่ได้ออกกำลัง จริง ๆ จัง และดูเหมือนว่า...</p>
      </div>
    </div>
    <!-- End region - Card -->
    <!-- Start region - Card -->
    <div class="group col-span-12 md:col-span-6 lg:col-span-4 bg-amber-50 rounded-lg overflow-clip hover:shadow-xl shadow-md transition-shadow">
      <div class="bg-red-900 overflow-clip relative aspect-square">
        <img width="100%" src="/img02.png" class="group-hover:scale-110 transition-transform" alt="">
      </div>
        <div class="p-4">
          <h3 class="text-amber-700 prompt-medium text-2xl">กิจกรรม แช่น้ำร้อนทองแดง</h3>
          <p class="break-words text-slate-800">ร่างกายอันเหนื่อยล้าที่เกิดจากใช้ชีวิตอย่างหักโหม มันช่างอึดอัดเหลือเกิน...</p>
        </div>
    </div>
    <!-- End region - Card -->
    <!-- Start region - Card -->
    <div class="col-span-12 md:col-span-6 lg:col-span-4 bg-amber-50 rounded-lg overflow-clip hover:shadow-xl shadow-md transition-shadow flex items-center">
      <div class="">
        <div class="p-4">
          <h3 class="text-amber-700 prompt-medium text-2xl">และกิจกรรม อีกมากมาย</h3>
          <p class="break-words text-slate-600">รอให้ท่านมาร่วมสนุกด้วยกัน~</p>
        </div>
      </div>
    </div>
    <!-- End region - Card -->
  </div>
</main>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
</style>

