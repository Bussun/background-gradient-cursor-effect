const effect = document.querySelector('#effect');
const changeBack = document.querySelector('#backgroundChange');
const changeGrad = document.querySelector('#gradientChange');

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;
  effect.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 1000, fill: 'forwards' }
  );
};

changeBack.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

changeGrad.addEventListener('click', () => {
  let rgbValues = [];
  for (let i = 0; i < 6; i++) {
    rgbValues.push(Math.floor(Math.random() * 255));
  }
  effect.animate(
    {
      background: `linear-gradient(90deg, rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, 0.7) 0%, rgba(${rgbValues[3]}, ${rgbValues[4]}, ${rgbValues[5]}, 0.7) 100%)`,
    },
    { fill: 'forwards' }
  );
});
