
// toggles whether img is hidden or shown
function toggleHide(imgID, buttonID) {
    //image to be hidden / shown
    var togImg= document.getElementById(imgID);
    console.log(togImg.style.display);
    if( togImg.style.display == "none" || togImg.style.display == "") {
        togImg.style.display = "block";
    }
    else{
        togImg.style.display = "none";
    }
    changeText(buttonID);
}

// modifies button text
function changeText(pID) {
    var p = document.getElementById(pID);
    if(p.innerHTML == " Hide"){
        p.innerHTML = " Show";
    }
    else{
        p.innerHTML = " Hide"
    }
}