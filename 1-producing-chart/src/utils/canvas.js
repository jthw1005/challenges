export const createPiChart = (canvas, ctx, data, colors) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const values = Object.values(data);
  const sum = values.reduce((acc, cur) => acc + +cur, 0);
  let startAngle = (3 * Math.PI) / 2;
  let currentSegment = 0;
  let currentAngle = 0;

  const drawSegment = () => {
    if (currentSegment < values.length) {
      const sliceAngle = (2 * Math.PI * values[currentSegment]) / sum;

      if (currentAngle < sliceAngle) {
        ctx.fillStyle = colors[currentSegment];
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          Math.min(canvas.width / 2, canvas.height / 2),
          startAngle,
          startAngle + currentAngle
        );
        ctx.closePath();
        ctx.fill();
        currentAngle += (2 * Math.PI) / 90;
        requestAnimationFrame(drawSegment);
      } else {
        ctx.fillStyle = colors[currentSegment];
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          Math.min(canvas.width / 2, canvas.height / 2),
          startAngle,
          startAngle + sliceAngle
        );
        ctx.closePath();
        ctx.fill();
        startAngle += sliceAngle;
        currentSegment++;
        currentAngle = 0;
        drawSegment();
      }
    }
  };

  drawSegment();
};

export const createBarChart = (canvas, ctx, data, colors) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const maxValue = Math.max(...Object.values(data).map(Number));
  const barWidth = canvas.width / Object.keys(data).length - 20;
  const heightIncrement = 10;

  const drawBar = (idx) => {
    if (idx >= Object.keys(data).length) return;

    const studentName = Object.keys(data)[idx];
    const x = idx * (barWidth + 20);
    const targetHeight = (data[studentName] / maxValue) * canvas.height;
    let currentHeight = 0;

    const renderChart = () => {
      if (currentHeight < targetHeight) {
        ctx.fillStyle = colors[idx];
        ctx.fillRect(x, canvas.height - currentHeight, barWidth, currentHeight);
        currentHeight += heightIncrement;
        requestAnimationFrame(renderChart);
      } else {
        ctx.fillStyle = colors[idx];
        ctx.fillRect(x, canvas.height - targetHeight, barWidth, targetHeight);
        drawBar(idx + 1);
      }
    };

    renderChart();
  };

  drawBar(0);
};
