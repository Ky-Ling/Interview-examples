// 1: Similarities:
//      (1): All of them are stored on the user's actual browser that they are using.

// 2: Difference:
//      (1): Cookies: it can store only a much smaller amount of information, it supports older browsers(HTML4), 
//      (2): Cookies and local storage are available for any window inside the browser, but session storage is only
//          available in the single tab.
//      (3): Expiration: session is for that one browsing session. It is removed as soon as the user closes 
//          the tab where that session was set. Local storage is around forever. Cookies storage we have to manually set.
//      (4): If we need to send a request to the server, we have to use cookie, or we just add extra head and cookie
//          are much harder to deal with it. So we should always use local storage or session storage unless
//          we need to send it to server.



localStorage.setItem("name", "Bob");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");

sessionStorage.setItem("age", 23);
console.log(sessionStorage.getItem("age"));
sessionStorage.removeItem("age");


// Set a new cookie
document.cookie = "name=Brian expires=" + new Date(2022, 1,  1) + toUTCString();

// Get the cookie
console.log(cookie);
