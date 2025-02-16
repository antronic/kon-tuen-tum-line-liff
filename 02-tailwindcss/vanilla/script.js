// On DOM ready
document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('btn-submit-form')

  submitButton.addEventListener('click', function() {
    const form = document.getElementById('form')
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if (name && email && password) {
      alert(`ลงทะเบียนสำเร็จแล้วจ้า คุณ ${name} เรากำลังจัดส่งอีเมล์ยืนยันไปที่ ${email}`)
      form.reset()
    } else {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน')
    }
  })
})