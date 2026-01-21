const image = document.querySelector('.story-image img');
const caption = document.querySelector('#story-caption');
const dots = document.querySelectorAll('.dot');

const captions = [
  "Two strangers mind their own business on the subway.",
  "Something unlikely happens when one of the strangers disconnects his bluetooth and accidentally plays his music out loud.",
  "The stranger across from him lights up when she recognizes the song.",
  "Their shared interest in music brings them together and they go to lots of concerts.",
  "The end."
];


let currentStep = 0;


image.addEventListener('click', () => {
  if (currentStep < captions.length - 1) {
    currentStep++;

    caption.textContent = captions[currentStep];
    image.src = `assets/images/image-${currentStep + 1}.png`;
    updateProgress(currentStep);
  }
});

function updateProgress(step) {
  dots.forEach((dot, index) => {
    if (index <= step) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}
