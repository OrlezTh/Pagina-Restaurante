
function openModal(imageSrc, imageAlt) {
          const modal = document.getElementById('modal');
          const modalImg = document.getElementById('modal-image');
          const captionText = document.getElementById('caption');

          modal.style.display = 'block';
          modalImg.src = imageSrc;
          modalImg.alt = imageAlt;
          captionText.innerHTML = imageAlt;
          }

          function closeModal() {
          const modal = document.getElementById('modal');
          modal.style.display = 'none';
          }