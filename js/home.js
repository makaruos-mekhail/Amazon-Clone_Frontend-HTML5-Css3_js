// page Home
var i = 0;
var imagesInterval;
function nextslide() {
    if (i == 5) {
        i = 0;
    }
    i++;
    document.getElementsByTagName("img")[3].src = "./images/p" + i + ".jpg";
}
function prevslide() {
    if (i == 1) {
        i = 5;
    }
    i--;
    document.getElementsByTagName("img")[3].src = "./images/p" + i + ".jpg";
}
function startSlider() {

    imagesInterval = setInterval(function () {
        i++;
        document.getElementsByTagName("img")[3].src = "./images/p" + i + ".jpg";
        if (i == 5) {
            i = 0
        }
    }, 2000)
}
function stopslide() {
    clearInterval(imagesInterval);
}
 
/*---------------drop-down-menu-------------------*/
let profileMenu = document.getElementById("profileMenu")
function toggleMenu() {
    profileMenu.classList.toggle("open-menu");
}

let sidebarActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");
function toggleActivity() {
    sidebarActivity.classList.toggle("open-activity");
    if (sidebarActivity.classList.contains("open-activity")) {
        moreLink.innerHTML = "Show less <b>-</b>";
    } else {
        moreLink.innerHTML = "Show more <b>+</b>";
    }
}


// page Video
function PalyVideo() {
    var video = document.getElementById('Vid');
    if (video.paused) {
      video.play();
    }
    else {
      video.pause();
    }
  }
  ////////////name localstorage
  let UserName= document.getElementById("namelocalstorage"); 

  function GetUserName(){
      let user = JSON.parse(localStorage.getItem(localStorage.key(localStorage.length-1)));
      return user["name"];
  }
  UserName.innerHTML = GetUserName();

