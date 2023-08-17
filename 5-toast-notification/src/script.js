const ICONS = {
  success: '✅',
  error: '🚨',
  warning: '⚠️',
  information: 'ℹ️',
};

const initToast = () => {
  const toastContainer = document.getElementById('toast');
  const toastPositions = ['left', 'right'];

  toastPositions.forEach((toastPosition) => {
    const toastPositionDiv = document.createElement('div');
    toastPositionDiv.id = `toast-${toastPosition}`;
    toastContainer.appendChild(toastPositionDiv);
  });
};

const createToastElement = (toastType, message) => {
  const wrapper = document.createElement('div');
  const icon = document.createElement('span');
  const text = document.createElement('span');
  const button = document.createElement('button');
  const bar = document.createElement('div');

  icon.innerText = ICONS[toastType];
  icon.classList.add('toast-msg-icon');

  text.innerText = message;
  text.classList.add('toast-msg-text');

  button.innerText = '❌';
  button.classList.add('toast-close-btn');

  wrapper.classList.add('toast-content-wrapper');
  wrapper.appendChild(icon);
  wrapper.appendChild(text);
  wrapper.appendChild(button);

  bar.classList.add('progress-bar', toastType);

  const box = document.createElement('div');
  box.classList.add('toast-box');
  box.appendChild(wrapper);
  box.appendChild(bar);

  return { box, bar, button };
};

const toast = (options) => {
  const { toastType, message, position, durationTime } = options;
  const toastContainer = document.getElementById(`toast-${position}`);

  const { box, bar, button } = createToastElement(toastType, message);

  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width += 1 / durationTime;
      bar.style.width = width + '%';
    }
  }, 10);

  button.onclick = () => {
    box.remove();
    clearInterval(interval);
  };

  toastContainer.appendChild(box);

  setTimeout(() => {
    box.remove();
  }, durationTime * 1000);
};

initToast();

const toastTypes = ['success', 'error', 'warning', 'information'];

toastTypes.forEach((toastType, idx) => {
  const toastButton = document.getElementById(`${toastType}-btn`);
  toastButton.addEventListener('click', () => {
    toast({
      toastType,
      message: toastType,
      position: idx === 3 ? 'left' : 'right',
      durationTime: 4,
    });
  });
});
