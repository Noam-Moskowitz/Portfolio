

function displayPreview(obj) {
    document.getElementById(`previewImage`).src = `../images/${obj.image}`
    document.getElementById(`content-heading`).textContent = obj.title;
    document.getElementById(`paragraph`).textContent = obj.paragraph;
    document.getElementById(`download`).href = `../Downloads/zips/${obj.downloadLink}`
    document.getElementById(`view`).href = ``

}

function getURLMessage() {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has('title')) {
    // Fix typo: 'tile' should be 'title'
    const projectTitle = urlParams.get('title');
    return projectTitle; // Return the extracted value
  } else {
    return null;
  }
}

// Call the function and store the result in a variable
const titleFromURL = getURLMessage();

async function  getJsonObj(objName) {
    const response = fetch(`../JSON files/projectObj.json`)
    if (response.ok) {
        let responseJson= (await response).json 
    }
}

let json=getJsonObj()