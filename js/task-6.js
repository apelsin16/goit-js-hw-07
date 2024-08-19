(function() {
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`;
      }

    const controls = document.querySelector('#controls');
    const input = controls.querySelector('input');

    const createButton = document.querySelector('button[data-create]');
    const destroyButton = document.querySelector('button[data-destroy]');

    const boxes = document.querySelector('#boxes');

    function destroyBoxes() {
        boxes.innerHTML = '';
        input.value = 0;
    }

    function createBoxes(amount) {
        if(amount > 100 || amount < 1) return;
        destroyBoxes();
        for(let i = 0; i < amount; i++) {
            const box = document.createElement('div');
            box.style.width = 30 + 10 * i + 'px';
            box.style.height = 30 + 10 * i + 'px';
            box.style.backgroundColor = getRandomHexColor();
            
            boxes.append(box);
        }
    }

    destroyButton.addEventListener('click', destroyBoxes);
    createButton.addEventListener('click', () => createBoxes(input.value));

})();