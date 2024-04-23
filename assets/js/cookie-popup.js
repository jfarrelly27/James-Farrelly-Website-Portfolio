document.addEventListener('DOMContentLoaded', (event) => {
  const cookiePopup = document.getElementById('cookie-popup');
  const acceptCookies = document.getElementById('accept-cookies');
  
  // Check if the cookie exists
  if (!getCookie('cookieAccepted')) {
    cookiePopup.style.display = 'block';
  }

  // Set the cookie
  acceptCookies.addEventListener('click', function () {
    setCookie('cookieAccepted', 'true', 30);
    cookiePopup.style.display = 'none';
  });

  // Set a cookie function
  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // Get a cookie function
  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
});
