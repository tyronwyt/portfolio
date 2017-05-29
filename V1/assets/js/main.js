// Collapsable menu;

var menuToggle = document.getElementById('menu-toggle');
  menuToggle.onclick = function(){
    if (this.getAttribute("data-state") == "open"){
      this.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
      this.setAttribute("data-state", "closed");
    } else {
      this.innerHTML = '<i class="fa fa-chevron-left" aria-hidden="true"></i>';
      this.setAttribute("data-state", "open");
    }
  this.classList.toggle('menu-toggle-hidden');
  document.getElementById('sidebar').classList.toggle('sidebar-hidden');
  document.getElementById('content').classList.toggle('closed-menu');

};
