const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');

  if (e.target.matches('.next')) {
    // Move the first item to the end
    slider.append(items[0].cloneNode(true));
    items[0].remove();
  }

  if (e.target.matches('.prev')) {
    // Move the last item to the beginning
    slider.prepend(items[items.length - 1].cloneNode(true));
    items[items.length - 1].remove();
  }
}

document.addEventListener('click', activate, false);
