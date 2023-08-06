const msgData = [
  `We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.`,
  `We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.`,
  `Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.`,
  `Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.`,
  `Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our product/service.`,
];

const starWrapper = document.querySelector('.star-wrapper');
const description = document.querySelector('.description');

let clickedStarIdx = null;

const getTargetStarIdx = (target) => {
  return [...starWrapper.children].indexOf(target);
};

const isHalfClicked = (clientX, target) => {
  return clientX - target.getBoundingClientRect().left < target.offsetWidth / 2;
};

const updateStarImages = (targetStarIdx, isHalf) => {
  starWrapper.children[targetStarIdx].src = `./assets/${
    isHalf ? 'halfstar' : 'fullstar'
  }.svg`;

  for (let i = 0; i < targetStarIdx; i++) {
    starWrapper.children[i].src = './assets/fullstar.svg';
  }
  for (let i = targetStarIdx + 1; i < starWrapper.children.length; i++) {
    starWrapper.children[i].src = './assets/emptystar.svg';
  }
};

const resetStar = () => {
  for (let img of starWrapper.children) {
    img.src = './assets/emptystar.svg';
  }
};

const handleStarWrapperClick = (event) => {
  if (event.target.tagName !== 'IMG') {
    return;
  }

  clickedStarIdx = getTargetStarIdx(event.target);

  const isHalf = isHalfClicked(event.clientX, event.target);
  updateStarImages(clickedStarIdx, isHalf);

  description.textContent = msgData[clickedStarIdx];
};

const handleStarWrapperMousemove = (event) => {
  if (clickedStarIdx || event.target.tagName !== 'IMG') {
    return;
  }

  const targetStarIdx = getTargetStarIdx(event.target);

  const isHalf = isHalfClicked(event.clientX, event.target);
  updateStarImages(targetStarIdx, isHalf);
};

const handleStarWrapperMouseout = (event) => {
  if (clickedStarIdx || event.target.tagName !== 'IMG') {
    return;
  }

  resetStar();
};

starWrapper.addEventListener('click', handleStarWrapperClick);
starWrapper.addEventListener('mousemove', handleStarWrapperMousemove);
starWrapper.addEventListener('mouseout', handleStarWrapperMouseout);
