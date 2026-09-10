document.getElementById('year').textContent = new Date().getFullYear();

const videoModal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');
const videoTrigger = document.querySelector('.video-trigger');
const videoClose = document.querySelector('.video-close');

videoTrigger?.addEventListener('click', () => {
  videoModal.classList.add('is-open');
  videoModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modalVideo.load();
});

const closeVideo = () => {
  modalVideo.pause();
  modalVideo.currentTime = 0;
  videoModal.classList.remove('is-open');
  videoModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
};

videoClose?.addEventListener('click', closeVideo);
videoModal?.addEventListener('click', (event) => {
  if (event.target === videoModal) closeVideo();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && videoModal?.classList.contains('is-open')) closeVideo();
});

const musicPlayer = document.getElementById('music-player');
const musicToggle = document.getElementById('music-toggle');
const portfolioAudio = document.getElementById('portfolio-audio');
const musicStatus = document.getElementById('music-status');
const musicIcon = document.getElementById('music-icon');
musicToggle?.addEventListener('click', async () => {
  if (!portfolioAudio?.querySelector('source')?.getAttribute('src')) {
    musicStatus.textContent = 'Falta el audio';
    return;
  }
  if (portfolioAudio.paused) await portfolioAudio.play(); else portfolioAudio.pause();
});
portfolioAudio?.addEventListener('play', () => { musicPlayer?.classList.add('is-playing'); musicToggle?.setAttribute('aria-pressed','true'); musicToggle?.setAttribute('aria-label','Pausar música'); musicIcon.textContent='Ⅱ'; musicStatus.textContent='Reproduciendo'; });
portfolioAudio?.addEventListener('pause', () => { musicPlayer?.classList.remove('is-playing'); musicToggle?.setAttribute('aria-pressed','false'); musicToggle?.setAttribute('aria-label','Reproducir música'); musicIcon.textContent='▶'; musicStatus.textContent='Audio pendiente'; });
