const toggleBtn = document.getElementById("theme-toggle");
let savedTheme = localStorage.getItem("theme");
if(savedTheme){
  document.documentElement.setAttribute("data-theme", savedTheme);

}

toggleBtn.addEventListener("click",()=> {
  let currentTheme = document.documentElement.getAttribute("data-theme");
  if(currentTheme === "dark"){
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light")
  }
  else{
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});