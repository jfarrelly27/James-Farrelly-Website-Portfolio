// Script for cookie consent popup
document.addEventListener('DOMContentLoaded', (event) => {
  const cookiePopup = document.getElementById('cookie-popup');
  
  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  if (!getCookie('cookieAccepted')) {
    cookiePopup.style.display = 'block';
  }

  const acceptButton = document.getElementById('accept-cookies');
  acceptButton.onclick = function() {
    setCookie('cookieAccepted', 'true', 365);
    cookiePopup.style.display = 'none';
  };
});
