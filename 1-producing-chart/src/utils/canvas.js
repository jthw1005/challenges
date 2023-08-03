export const createPiChart = (canvas, ctx, data, color) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const sum = Object.values(data).reduce((acc, cur) => acc + +cur, 0);

  let startAngle = (3 * Math.PI) / 2;

  const arr = Object.keys(data);
  let idx = 0;
  // Object.keys(data).forEach((studentName, idx) => {
  //   const sliceAngle = (2 * Math.PI * data[studentName]) / sum;
  //   ctx.fillStyle = color[idx];
  //   ctx.beginPath();
  //   ctx.moveTo(canvas.width / 2, canvas.height / 2);
  //   ctx.arc(
  //     canvas.width / 2,
  //     canvas.height / 2,
  //     Math.min(canvas.width / 2, canvas.height / 2),
  //     startAngle,
  //     startAngle + sliceAngle
  //   );
  //   ctx.closePath();
  //   ctx.fill();
  //   startAngle += sliceAngle;
  // });

  const sliceAngle = (2 * Math.PI * data[arr[idx]]) / sum;

  const renderChart = (startAngle) => {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.arc(
      canvas.width / 2,
      canvas.height / 2,
      Math.min(canvas.width / 2, canvas.height / 2),
      startAngle,
      startAngle + Math.PI / 36
    );
    ctx.closePath();
    ctx.fillStyle = color[idx];
    ctx.fill();
  };

  animatePiChart(5, startAngle, startAngle + sliceAngle, renderChart);
};

const animatePiChart = (animationFrame, startAngle, endAngle, renderFn) => {
  if (startAngle > endAngle) {
    return;
  }

  setTimeout(() => {
    renderFn(startAngle);
    animatePiChart(
      animationFrame,
      startAngle + Math.PI / 36,
      endAngle,
      renderFn
    );
  }, animationFrame);

  return;
};

export const createBarChart = (canvas, ctx, data, color) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const maxValue = Math.max(...Object.values(data).map(Number));
  const barWidth = canvas.width / Object.keys(data).length - 20;

  Object.keys(data).forEach((studentName, idx) => {
    const barHeight = (data[studentName] / maxValue) * canvas.height;

    const renderChart = (curVal) => {
      const x = idx * (barWidth + 20);
      const y = canvas.height - curVal;
      ctx.fillStyle = color[idx];
      ctx.fillRect(x, y, barWidth, y);
    };

    animateBarChart(5, 0, barHeight, renderChart);
  });
};

const animateBarChart = (animationFrame, startVal, endVal, renderFn) => {
  if (startVal > endVal) {
    return;
  }

  setTimeout(() => {
    renderFn(startVal);
    animateBarChart(animationFrame, startVal + 10, endVal, renderFn);
  }, animationFrame);

  return;
};
