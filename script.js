$(document).ready(() => {
  let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome) {
    $('#iframeAudio').remove()
  }
});
