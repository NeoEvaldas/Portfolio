const toggler = document.querySelector(".menu__toggler");
const menu = document.querySelector(".menu");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  menu.classList.toggle("active");
})

function toggle(IDS) {
  var keisti = document.getElementById('container').getElementsByTagName('div');
  for (var i=0; i<keisti.length; i++) { 
    if (keisti[i].id != IDS) { keisti[i].style.display = 'none'; }
  }
  var status = document.getElementById(IDS).style.display;
  if (status == 'block') { document.getElementById(IDS).style.display = 'none'; }
                    else { document.getElementById(IDS).style.display = 'block'; }

  return false;
}