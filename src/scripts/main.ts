function isDesktopScreen() {
  // value based on desktop breakpoint
  return window.innerWidth < 1024;
}

const checkboxes = document.querySelectorAll('[data-mb-collaps="true"]');
const collapseObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target as HTMLInputElement;

    if (entry.isIntersecting && !target.checked && isDesktopScreen()) {
      target.checked = true;
      collapseObserver.unobserve(entry.target);
    };
    if (entry.isIntersecting && target.checked) {
      collapseObserver.unobserve(entry.target);
    }
  })
}, {
  rootMargin: '-40%',
});
checkboxes.forEach((checkbox) => collapseObserver.observe(checkbox));

const navbarElement = document.querySelector('[data-mb-hidden="true"]') as HTMLElement;
const homepageElement = document.querySelector('[data-mb-hidden-trigger="true"]') as HTMLElement;

const homepageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (isDesktopScreen()) {
      navbarElement.classList.toggle('fade-in', !entry.isIntersecting);
      navbarElement.classList.toggle('fade-out', entry.isIntersecting);

      if (!entry.isIntersecting) {
        navbarElement.classList.remove('hidden');
      }
    }
  });
})

homepageObserver.observe(homepageElement);

function adjustNavbarWidth() {
  const parentContainer = navbarElement.parentElement as Element;
  
  if (navbarElement && parentContainer) {
    const cssProperties = getComputedStyle(parentContainer);
    const parentMaxWidth = cssProperties.width;
    const padding = cssProperties.padding.split(' ')[1];

    navbarElement.style.width = `calc(${parentMaxWidth} - (${padding} + ${padding}))`;
    navbarElement.style.left = `calc(50% - (${navbarElement.style.width} / 2))`;
  }
}

// Adjust navbar width when the window resizes
window.addEventListener('resize', adjustNavbarWidth);

// Adjust navbar width on page load
document.addEventListener('DOMContentLoaded', adjustNavbarWidth);