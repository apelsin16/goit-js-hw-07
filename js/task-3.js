(function() {

  const input = document.querySelector('#name-input');
  const output = document.querySelector('#name-output');

  function changeInput(e) {
    output.innerHTML = e.target.value.trim();
  }

  input.addEventListener('input', changeInput);

  })();