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

// Debian / Fedora tabs: show the chosen system's commands in that card.
document.querySelectorAll('.own article').forEach(function (card) {
  var tabs = card.querySelectorAll('.tabs button');
  if (!tabs.length) return;
  function show(name) {
    tabs.forEach(function (tab) { tab.setAttribute('aria-selected', String(tab.dataset.tab === name)); });
    card.querySelectorAll('[data-panel]').forEach(function (panel) { panel.hidden = panel.dataset.panel !== name; });
  }
  tabs.forEach(function (tab) { tab.addEventListener('click', function () { show(tab.dataset.tab); }); });
  show('apt');
});
