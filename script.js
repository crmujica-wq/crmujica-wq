document.getElementById('year').textContent = new Date().getFullYear();

const videoModal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');
const videoTrigger = document.querySelector('.video-trigger');
const videoClose = document.querySelector('.video-close');

videoTrigger?.addEventListener('click', () => {
  videoModal.showModal();
  modalVideo.play().catch(() => {});
});

const closeVideo = () => {
  modalVideo.pause();
  modalVideo.currentTime = 0;
  videoModal.close();
};

videoClose?.addEventListener('click', closeVideo);
videoModal?.addEventListener('click', (event) => {
  if (event.target === videoModal) closeVideo();
});
