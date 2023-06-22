var menuIcon = document.querySelector(".menu-icon");
var smallsidebar = document.querySelector(".small-sidebar");

menuIcon.onclick = function(){
  smallsidebar.classList.toggle("sidebar")
}

// ----------------comment section--------------------//
function toggleBox() {
  var box = document.getElementById("box");
  box.classList.toggle("hidden");
}




// -------------video box--------------

const videoContainer = document.getElementById('videoContainer');


function fetchUploadedVideos() {
  fetch('/videos') 
    .then(response => response.json())
    .then(data => {
      data.forEach(video => {
        const videoElement = createVideoElement(video);
        videoContainer.appendChild(videoElement);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


function createVideoElement(video) {
  const videoElement = document.createElement('div');
  videoElement.classList.add('video');
  

  videoElement.innerHTML = `
    <h2>${video.title}</h2>
    <video src="${video.url}" controls></video>
  `;

  return videoElement;
}


fetchUploadedVideos();

// -----------infinte video scroller-----------//






// -------Uploadable Banner-------




/* <!-- -------uploadable profile------- --> */






