'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;

const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 15;
const BAR_GAP = 50;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#ffffff`);

  ctx.font = `16px PT Mono`;
  ctx.fillStyle = `#000`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText(`Список результатов: `, CLOUD_X + GAP, CLOUD_Y + 2 * (GAP + FONT_GAP));

  const maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    ctx.fillStyle = `#000`;
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_HEIGHT + CLOUD_Y - 2 * (FONT_GAP + GAP) - (BAR_HEIGHT * times[i]) / maxTime
    );
    ctx.fillText(
        names[i],
        CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_HEIGHT + CLOUD_Y - FONT_GAP
    );
    ctx.fillStyle = `hsl(` + 240 + `,` + (100 * Math.random()) + `%,` + 50 + `%)`;
    if (names[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    }
    ctx.fillRect(
        CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_HEIGHT + CLOUD_Y - FONT_GAP - (FONT_GAP + GAP) - (BAR_HEIGHT * times[i]) / maxTime,
        BAR_WIDTH,
        (BAR_HEIGHT * times[i]) / maxTime
    );
  }
};
