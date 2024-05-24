document.addEventListener('DOMContentLoaded', function() {
  // Get all containers
  var containers = document.querySelectorAll('.container');
  var particleImages = [
    'content/particle1.png',
    'content/particle2.png',
    'content/particle3.png'
  ];

  containers.forEach(function(container) {
    // Get the overlay image and additional content for this container
    var overlayImage = container.querySelector('.overlay-image');
    var additionalContent = container.querySelector('.additional-content');

    // Remove the unwanted text element
    var overlayText = container.querySelector('.overlay-text');
    if (overlayText) {
      overlayText.remove();
    }

    // Flag to track whether the additional content is displayed
    var isContentDisplayed = false;
    var isMouseOver = false;

    // Add event listeners for hover events on the container
    container.addEventListener('mouseover', function() {
      isMouseOver = true;
      // Only show the overlay image if the additional content is not displayed
      if (!isContentDisplayed) {
        overlayImage.classList.add('visible');
        startParticleSpawning(container);
      }
    });

    container.addEventListener('mouseout', function() {
      isMouseOver = false;
      // Hide the overlay image when the mouse leaves the container
      overlayImage.classList.remove('visible');
      stopParticleSpawning();
    });

    // Add click event listener for the container
    container.addEventListener('click', function() {
      // Toggle the display of the additional content
      isContentDisplayed = !isContentDisplayed;
      if (isContentDisplayed) {
        additionalContent.classList.add('visible');
        overlayImage.classList.remove('visible'); // Ensure overlay image is hidden
      } else {
        additionalContent.classList.remove('visible');
      }
    });

    let particleInterval;

    function startParticleSpawning(container) {
      particleInterval = setInterval(function() {
        if (isMouseOver) {
          spawnParticle(container);
        }
      }, 30); // Adjust the interval as needed for more frequent spawning
    }

    function stopParticleSpawning() {
      clearInterval(particleInterval);
    }

    function spawnParticle(container) {
      var particle = document.createElement('img');
      particle.src = particleImages[Math.floor(Math.random() * particleImages.length)];
      particle.classList.add('particle');
      container.appendChild(particle);

      // Randomize particle properties
      var size = Math.random() * 60 + 10; // Particle size between 10px and 70px
      var lifespan = Math.random() * 8000 + 1000; // Lifespan between 1000ms and 9000ms
      var direction = Math.random() * 360; // Random direction
      var speed = Math.random() * 20 + 10; // Speed between 10 and 30
      var fadeTime = lifespan / 4; // Fade in/out time is a fourth of lifespan
      var startX = Math.random() * container.offsetWidth;
      var startY = Math.random() * container.offsetHeight;

      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = startX + 'px';
      particle.style.top = startY + 'px';
      particle.style.animation = `particleMove ${lifespan}ms linear, particleFade ${fadeTime}ms linear`;

      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = startX + 'px';
      particle.style.top = startY + 'px';
      particle.style.animation = `particleMove ${lifespan}ms linear, particleFade ${fadeTime}ms linear`;

      // Remove particle after its lifespan
      setTimeout(function() {
        container.removeChild(particle);
      }, lifespan);
    }

    // Mouse move event to check if the mouse is within the container
    document.addEventListener('mousemove', function(event) {
      var rect = container.getBoundingClientRect();
      isMouseOver = (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      );
    });
  });
});

// Add CSS for particle animation
var style = document.createElement('style');
style.innerHTML = `
  .particle {
    position: absolute;
    opacity: 0;
  }
  @keyframes particleMove {
    0% { transform: translate(0, 0); }
    100% { transform: translate(calc(var(--moveX, 0) * 1px), calc(var(--moveY, 0) * 1px)); }
  }
  @keyframes particleFade {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
`;
document.head.appendChild(style);