(() => {
  const button = document.getElementById('return-to-app');
  const status = document.getElementById('return-status');
  // Chrome may require a tap. The visible package-pinned link remains available.
  // Ignore the URL query/fragment; this page has no payment or license authority.
  if (/Android/i.test(navigator.userAgent)) {
    try { window.location.replace(button.href); } catch { /* Keep the tap fallback. */ }
    status.textContent = 'If VCamSX did not open, tap Return to VCamSX below.';
  } else {
    status.textContent = 'Reopen VCamSX on the Android phone where you started this order, then tap I paid · Check.';
  }
})();
