export const createPiChart = (canvas, ctx, data, color) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const sum = Object.values(data).reduce((acc, cur) => acc + +cur, 0);
  let startAngle = 0;

  Object.keys(data).forEach((studentName, idx) => {
    let sliceAngle = (2 * Math.PI * data[studentName]) / sum;
    ctx.fillStyle = color[idx];
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.arc(
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2,
      startAngle,
      startAngle + sliceAngle
    );
    ctx.closePath();
    ctx.fill();
    startAngle += sliceAngle;
  });
};

export const createBarChart = (canvas, ctx, data, color) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const maxValue = Math.max(...Object.values(data).map(Number));
  const barWidth = canvas.width / Object.keys(data).length - 20;

  Object.keys(data).forEach((studentName, idx) => {
    ctx.fillStyle = color[idx];
    const barHeight = (data[studentName] / maxValue) * canvas.height;
    const x = idx * (barWidth + 20);
    const y = canvas.height - barHeight;

    ctx.fillRect(x, y, barWidth, barHeight);
  });
};
