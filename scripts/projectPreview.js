



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



let json=getJsonObj()