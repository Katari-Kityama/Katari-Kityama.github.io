// Define your particle images array here
const particleImages = ['content/particle1.png', 'content/particle2.png', 'content/particle3.png']; // Replace with your image paths

// Function to generate a random number within a range
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to create a particle
function createParticle(container) {
  const particle = document.createElement('div');
  particle.className = 'particle-effect';
  const particleImage = particleImages[Math.floor(randomInRange(0, particleImages.length))];
  particle.style.backgroundImage = `url(${particleImage})`;

  // Randomize particle size
  const size = randomInRange(10, 50); // Size in pixels
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  // Randomize particle position
  const posX = randomInRange(0, container.offsetWidth - size);
  const posY = randomInRange(0, container.offsetHeight - size);
  particle.style.left = `${posX}px`;
  particle.style.top = `${posY}px`;

  // Append particle to the container
  container.appendChild(particle);

  // Randomize particle lifespan and fade times
  const fadeInTime = randomInRange(500, 1500); // Fade in time in milliseconds
  const fadeOutTime = randomInRange(500, 1500); // Fade out time in milliseconds
  const lifespan = fadeInTime + fadeOutTime + randomInRange(1000, 5000); // Total lifespan in milliseconds

  // Fade in particle
  setTimeout(() => {
    particle.style.opacity = 1;
    particle.style.transform = 'scale(1)';
  }, 0);

  // Fade out particle
  setTimeout(() => {
    particle.style.opacity = 0;
    particle.style.transform = 'scale(0)';
  }, lifespan - fadeOutTime);

  // Remove particle after lifespan
  setTimeout(() => {
    container.removeChild(particle);
  }, lifespan);
}

// Function to start the particle effect
function startParticleEffect(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error('Container not found');
    return;
  }

  // Spawn particles at random intervals
  setInterval(() => {
    createParticle(container);
  }, randomInRange(500, 2000)); // Interval in milliseconds
}

// Export the startParticleEffect function to be used in other scripts
export { startParticleEffect };
