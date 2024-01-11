

function displayPreview(obj) {
    document.getElementById(`previewImage`).src = `../images/${obj.image}`
    document.getElementById(`content-heading`).textContent = obj.title;
    document.getElementById(`paragraph`).textContent = obj.paragraph;
    document.getElementById(`download`).href = `../Downloads/zips/${obj.downloadLink}`
    document.getElementById(`view`).href = ``

}
export {
    displayPreview
};
