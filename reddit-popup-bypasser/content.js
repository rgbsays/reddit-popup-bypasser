const unlockScroll = () => {
  if (document.body.style.overflow === 'hidden') {
    document.body.style.setProperty('overflow', 'auto', 'important');
    document.body.style.setProperty('overflow-y', 'auto', 'important');
    document.body.style.setProperty('padding-right', '0px', 'important');
  }
  document.documentElement.style.setProperty('overflow', 'auto', 'important');
};

const removePopup = () => {
  // Target the specific shadow host we identified
  const host = document.getElementById('desktop-dynamic-upsell-dialog');
  if (host) {
    host.remove();
    unlockScroll();
  }

  // Fallback: Check for the dialog inside any shadow roots
  const allElements = document.querySelectorAll('*');
  for (const el of allElements) {
    if (el.shadowRoot) {
      const dialog = el.shadowRoot.querySelector('.dialog.dialog-open');
      if (dialog) {
        el.remove(); // Remove the host component
        unlockScroll();
      }
    }
  }
};

// Use MutationObserver to catch the popup the moment it's added
const observer = new MutationObserver((mutations) => {
  removePopup();
});

// Start observing the document
observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});

// Initial check
removePopup();
