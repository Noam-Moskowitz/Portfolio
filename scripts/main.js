const projectLinks = document.querySelectorAll(`.btnEvent`);


projectLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
       sendToURL(event.target.title,event.target.href);
    });
});

function sendToURL(data,href) {
    const dataToSend =encodeURIComponent(data);
    const newURL = `${href}?title=${dataToSend}`;
    window.location.href=newURL
}