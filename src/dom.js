const body = document.querySelector('body');

export const background = () => {
  body.style.background = 'orange';
};
export const setTitle = text => {
  const element = document.createElement('h1');
  element.textContent = text;
  body.appendChild(element);
};

background();
setTitle('welcome to webpack tutorial');
