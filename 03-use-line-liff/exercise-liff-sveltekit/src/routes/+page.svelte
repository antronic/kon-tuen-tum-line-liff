<script>
import { onMount } from 'svelte'
import liff from '@line/liff'

let isLogin = false

// On mount, check if the user is logged in
onMount(async () => {
  // Initialize LIFF

  // Check if the user is logged in

  // If the user is logged in, set isLogin to true and profile

  // If the user is not logged in, login, show login button
})

</script>
<div class="h-screen flex justify-center items-center">
  {#if isLogin}
    <div class="">
      <h1 class="text-2xl">Profile:</h1>
      <div>
        <img src={profile.pictureUrl} alt="profile" class="w-20 h-20 rounded-full" />
        <p>{profile.displayName}</p>
        <p>{profile.userId}</p>
      </div>
    </div>
  {:else}
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={login}>
      Login
    </button>
  {/if}
</div>