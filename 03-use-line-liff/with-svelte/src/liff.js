import liff from '@line/liff'

export async function initializeLiff() {
  await liff.init({ liffId: import.meta.env.LIFF_ID })
  if (!liff.isLoggedIn()) {
    liff.login()
  }
}