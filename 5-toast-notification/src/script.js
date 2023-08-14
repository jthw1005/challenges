const initToast = () => {
  const $toastContainer = document.getElementById('toast');
  const toastPositions = ['left', 'right'];

  toastPositions.forEach((toastPosition) => {
    const $ = document.createElement('div');
    $.id = `toast-${toastPosition}`;
    $toastContainer.appendChild($);
  });
};

initToast();

