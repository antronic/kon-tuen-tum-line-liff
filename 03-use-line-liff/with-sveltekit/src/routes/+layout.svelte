<script>
  let { children } = $props();
  import "../app.css";

  import { onMount } from 'svelte'
  import liff from '@line/liff';

  let isLineLoggedIn = $state(false)
  /**
   * @type any | null}
   */
  let profile = $state(null)

  // Initialize LIFF
  async function initializeLiff() {
    await liff.init({ liffId: import.meta.env.VITE_LIFF_ID })
  }

  async function loadProfile() {
    if (liff.isLoggedIn()) {
      const _profile = await liff.getProfile()
        .catch(err => {
          console.error(err)
        })

      isLineLoggedIn = true
      profile = _profile
    }
  }

  // On page load, initialize LIFF
  onMount(() => {
    initializeLiff()

    // If liff is ready, check login status and load profile
    liff.ready
      .then(() => {
        loadProfile()
      })
  })
</script>

<nav class="bg-yellow-500 border-b border-yellow-400 text-white px-4 py-2 prompt-light fixed top-0 w-full z-10">
  <div class="flex justify-between items-center container mx-auto">
    <div></div>
    <div class="flex space-x-4 text-lg">
      <a href="/" class="">หน้าหลัก</a>
      <a href="#" class="">ติดต่อเรา</a>


      <!-- If logged in and profile loaded, show profileImage and name -->
      {#if isLineLoggedIn && profile}
        <div class="flex items-center space-x-2">
          <img src="{profile.pictureUrl}" alt="{profile.displayName}" class="w-8 h-8 rounded-full" />
          <span class="prompt-medium">{profile.displayName}</span>
        </div>
      {:else}
        <div>
          <a
            href="#"
            class="bg-white text-yellow-500 px-4 rounded-md"
            onclick="{() => {
              liff.login({ redirectUri: `${window.location.origin}/profile` })
            }}"
          >
            เข้าสู่ระบบ
          </a>
        </div>
      {/if}
    </div>
  </div>
</nav>
{@render children()}