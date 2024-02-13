const navBtns = document.querySelectorAll(`.my-nav-link`);
const projectLinks = document.querySelectorAll(`.btnEvent`);
const porfolio = document.getElementById(`portfolio-container`);
const projectPreview = document.getElementById(`projectPreview`);

projectLinks.forEach((link) => {
    link.addEventListener('click', async (event) => {
        porfolio.style.display = `none`;
        projectPreview.style.display = `block`;
        projectPreview.style.display = `flex`
        const project = await getData();
        switch (event.target.title) {
            case `htmlP1`:
                displayPreview(project.htmlP1)
                break;
            case `htmlP2`:
                displayPreview(project.htmlP2)
                break;
            case `htmlP3`:
                displayPreview(project.htmlP3)
                break;
            case `htmlP4`:
                displayPreview(project.htmlP4)
                break;
            case `htmlP5`:
                displayPreview(project.htmlP5)
                break;
            case `htmlP6`:
                displayPreview(project.htmlP6)
                break;
            case `htmlP7`:
                displayPreview(project.htmlP7)
                break;
            case `htmlP8`:
                displayPreview(project.htmlP8)
                break;
            case `htmlP9`:
                displayPreview(project.htmlP9)
                break;
            case `clockApp`:
                displayPreview(project.clockApp)
                break;
            case `simon`:
                displayPreview(project.simon)
                break;
            case `hangman`:
                displayPreview(project.hangman)
                break;
            case `userManager`:
                displayPreview(project.userManager)
                break;
            case `screenBuilder`:
                displayPreview(project.screenBuilder)
                break;
        }
        document.location = `#projectPreview`;
    });
});

navBtns.forEach((navBtn) => {
    navBtn.addEventListener(`click`, () => {
        porfolio.style.display = `block`;
        projectPreview.style.display = `none`;

    })
})

function displayPreview(obj) {
    console.log(obj.image);
    document.getElementById(`previewImage`).src = `./images/${obj.image}`
    document.getElementById(`content-heading`).textContent = obj.title;
    document.getElementById(`paragraph`).textContent = obj.paragraph;
    document.getElementById(`download`).href = `./Downloads/zips/${obj.downloadLink}`
    document.getElementById(`view`).href = obj.viewLink;
    document.getElementById(`github`).href = obj.githubLink;
}

async function getData() {
    const response = await fetch(`./JSON files/projectObj.json`)
    if (response.ok) {
        const responseText = await response.json();
        return responseText
    } else {
        console.log(response.status);
    }
}