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
