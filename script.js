// Copy buttons on the command boxes.
document.querySelectorAll('.code .copy').forEach(function (button) {
  button.addEventListener('click', function () {
    var text = button.parentElement.querySelector('code').innerText;
    navigator.clipboard.writeText(text).then(function () {
      button.textContent = 'Copied';
      setTimeout(function () { button.textContent = 'Copy'; }, 1600);
    });
  });
});
