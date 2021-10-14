var myModal = document.getElementById('exampleModal')
var myInput = document.getElementById('Mic')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
  console.log("hola")
})