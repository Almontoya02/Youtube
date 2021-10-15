import bootstrap from "bootstrap"
var myModal = document.getElementById('exampleModal');
var myInput = document.getElementById('Mic');


myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()

})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

