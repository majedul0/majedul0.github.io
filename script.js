(function () {
  const roles = [
    "a full stack web dev",
    "a software engineer",
    "an app developer",
    "a MERN specialist",
  ];

  const typedRole = document.getElementById('typed-role');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      typedRole.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      charIndex--;
      typedRole.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    const delay = deleting ? 40 : 70;
    setTimeout(typeLoop, delay);
  }

  // Start typing effect after DOM is ready
  if (typedRole) {
    setTimeout(typeLoop, 600);
  }
})();

