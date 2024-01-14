const navBtns = document.querySelectorAll(`.my-nav-link`);
const projectLinks = document.querySelectorAll(`.btnEvent`);
const porfolio = document.getElementById(`portfolio-container`);
const projectPreview = document.getElementById(`projectPreview`);

projectLinks.forEach((link) => {
    link.addEventListener('click',async (event) => {
porfolio.style.display=`none`;
projectPreview.style.display=`block`;
projectPreview.style.display=`flex`
const project =await getData();
switch(event.target.title){
case `htmlP1`:
displayPreview(project.htmlP1)


}
    });
});

navBtns.forEach((navBtn)=>{
    navBtn.addEventListener(`click`,()=>{
        porfolio.style.display=`block`;
projectPreview.style.display=`none`;

    })
})

function displayPreview(obj) {
    document.getElementById(`previewImage`).src = `../images/${obj.image}`
    document.getElementById(`content-heading`).textContent = obj.title;
    document.getElementById(`paragraph`).textContent = obj.paragraph;
    document.getElementById(`download`).href = `../Downloads/zips/${obj.downloadLink}`
    document.getElementById(`view`).href = ``

}

async function  getData() {
    const response = await fetch(`../JSON files/projectObj.json`)
    if ( response.ok) {
        const responseText =await response.json();
        return responseText
    }else{
        console.log(response.status);
    }
}