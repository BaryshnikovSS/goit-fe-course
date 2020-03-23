/**
 * 1. ��� ������� �� ����� ��������� ������
 * 2. ��� ������� �� ���� ������������� ������
 * 3. ����� ����� ��� �������� ����� � ������� �������
 * 4. ����� start, stop � ���� timerId
 * 5. xx:xx.x
 */

/*
  1. ������ ����� ����� ������ �� ������� ���������
  2. ��������� ��������� ���������� ��� ���� � �������� ��� �������� ������
  3. ������� ���� � ���� �� ��������� ��� ��������� ����� ��� ��������� ������� ������
 */

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const clockface = document.querySelector('.clockface');

const timer = {
  id: null,
  startTime: null,
  deltaTime: 0,
  isActive: false,
  start() {
    if (this.isActive) return;

    this.isActive = true;
    this.startTime = Date.now();

    this.id = setInterval(() => {
      const currentTime = Date.now();
      this.deltaTime = currentTime - this.startTime;

      updateClockface(this.deltaTime);
    }, 100);
  },
  stop() {
    clearInterval(this.id);
    this.isActive = false;
  },
  reset() {
    this.stop();
    this.deltaTime = 0;
    updateClockface(this.deltaTime);
  },
};

startBtn.addEventListener('click', handleStartBtnClick);
stopBtn.addEventListener('click', handleStopBtnClick);

function handleStartBtnClick() {
  if (!timer.isActive) {
    timer.start();
    this.textContent = 'Pause';
  } else {
    timer.stop();
    this.textContent = 'Continue';
  }
}

function handleStopBtnClick() {
  timer.reset();
  startBtn.textContent = 'Start';
}

function updateClockface(time) {
  const formattedTime = formatTime(time);
  clockface.textContent = formattedTime;
}

function formatTime(ms) {
  const date = new Date(ms);

  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  let seconds = date.getSeconds();
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  const mseconds = String(date.getMilliseconds()).slice(0, 1);

  return `${minutes}:${seconds}.${mseconds}`;
}

new Modal({
  openBtnEl: document.querySelector('.open-modal'),
});