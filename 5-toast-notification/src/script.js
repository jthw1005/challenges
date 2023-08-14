const initToast = () => {
  const $toastContainer = document.getElementById('toast');
  const toastPositions = ['left', 'right'];

  toastPositions.forEach((toastPosition) => {
    const $ = document.createElement('div');
    $.id = `toast-${toastPosition}`;
    $toastContainer.appendChild($);
  });
};

const ICONS = {
  success: '✅',
  error: '🚨',
  warning: '⚠️',
  information: 'ℹ️',
};

const toast = ({
  toastType = 'success',
  message = 'success',
  position = 'left',
  durationTime = 4,
}) => {
  const $toastContainer =
    position === 'left'
      ? document.getElementById('toast-left')
      : document.getElementById('toast-right');

  const $box = document.createElement('div');
  const $wrapper = document.createElement('div');
  const $icon = document.createElement('span');
  const $text = document.createElement('span');
  const $button = document.createElement('button');
  const $bar = document.createElement('div');

  $icon.innerText = ICONS[toastType];
  $icon.classList.add('toast-msg-icon');

  $text.innerText = message;
  $text.classList.add('toast-msg-text');

  $button.innerText = '❌';
  $button.classList.add('toast-close-btn');
  $button.onclick = () => {
    $box.remove();
  };

  $wrapper.classList.add('toast-content-wrapper');
  $wrapper.appendChild($icon);
  $wrapper.appendChild($text);
  $wrapper.appendChild($button);

  $bar.classList.add('progress-bar', `${toastType}`);

  $box.classList.add('toast-box');
  $box.appendChild($wrapper);
  $box.appendChild($bar);

  $toastContainer.appendChild($box);

  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width += 1 / durationTime;
      $bar.style.width = width + '%';
    }
  }, 10);

  setTimeout(() => {
    $box.remove();
  }, durationTime * 1000);
};

initToast();

const toastTypes = ['success', 'error', 'warning', 'information'];

toastTypes.forEach((toastType, idx) => {
  const $ = document.getElementById(`${toastType}-btn`);
  $.addEventListener('click', () => {
    const toastOption = {
      toastType: toastType,
      message: toastType,
      position: idx === 3 ? 'left' : 'right',
      durationTime: 4,
    };
    toast(toastOption);
  });
});
