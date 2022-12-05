const panels = document.querySelector('.panels');

const toggleOpenPanel = (e) => {
  const panel = e.target.closest('.panels__item');
  panel.classList.toggle('is-open');
};

panels.addEventListener('click', toggleOpenPanel);
