<script>
  import {goto} from '$app/navigation';
  import liff from '@line/liff'
  import {onMount} from 'svelte'

  let isLoading = $state(true)
  /**
   * @type any | null}
   */
  let profile = $state(null)

  async function getProfile() {
    return liff.getProfile()
      .catch(err => {
        console.error(err)
      })
  }

  // Load profile
  async function loadProfile() {
    if (liff.isLoggedIn()) {
      const _profile = await getProfile()

      if (_profile) {
        profile = _profile
        isLoading = false
      }
      return
    }

    // Fall back to main page
    goto('/')
  }

  onMount(() => {
    // Check if LIFF is ready
    liff.ready.then(() => {
      loadProfile()
    })
  })
</script>

<div class="container mx-auto h-screen flex flex-col items-center justify-center">

  <!-- If isLoading -->
  {#if isLoading}
    <div class="mx-auto text-center">
      <img src="/rat_dance_loading.gif" alt="Loading..." class="w-24 h-24 mx-auto" />
      <p class="prompt-medium">กำลังโหลดข้อมูล...</p>
    </div>

  {:else}
    <div class="">
      <h2 class="prompt-medium">อะ จ๊ะเอ๋ ตัวเอง!~<br/>สวัสดีท่านผู้เจริญมากไปด้วยปัญญา</h2>
      <p>ยินดีด้วย คุณ {profile.displayName} ได้ทำการเข้าสู่ระบบมาแล้ว ✨</p>
    </div>

    <div class="w-3/4">
      <p>Data:</p>
      <code class="block bg-gray-100 p-4 rounded-md overflow-auto">
        {JSON.stringify(profile)}
      </code>
    </div>
  {/if}

</div>