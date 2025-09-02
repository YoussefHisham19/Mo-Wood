function toggleMenu(){
  const sidebar=document.getElementById('mysidebar')
  if(sidebar.style.width==="250px"){
    sidebar.style.width="0";
  }else{
    sidebar.style.width="250px";
  }
}
window.onclick=function (e){
  if(e.target===modal){
    modal.style.display="none "
  }
}
let closebtn=document.querySelector('.closebtn')
closebtn.onclick=function(){
 sidebar.style.display='none';
}

closebtn.onclick = function() {
  sidebar.style.display = "none";
}


window.addEventListener('click', function(e) {
  if (sidebar.style.display === "block" 
      && !sidebar.contains(e.target) 
      && !e.target.closest('.menubtn')) {
    sidebar.style.display = "none";
  }
}); 

/*const sidebar = document.getElementById('mysidebar');
const closebtn = document.querySelector('.closebtn');

function toggleMenu() {
  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "block";
  }
}

// زرار (×)
closebtn.onclick = function() {
  sidebar.style.display = "none";
}

// لو ضغطت برا القائمة → تتقفل
window.addEventListener('click', function(e) {
  if (sidebar.style.display === "block" 
      && !sidebar.contains(e.target) 
      && !e.target.closest('.menubtn')) {
    sidebar.style.display = "none";
  }
}); */