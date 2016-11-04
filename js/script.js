var pageWidth = document.documentElement.clientWidth,
	pageHeight = document.body.clientHeight,
	screenHeight = document.documentElement.clientHeight,
	nav = document.getElementById('side-panel'),
    mainContent = document.getElementById('main'),
    nav = document.getElementById('side-panel'),
    toggleBar = document.getElementById('sidebar-toggle');;

	nav.style.height = pageHeight-100+'px';
	popup.style.height = screenHeight+'px';
function openNav(){
    nav.style.width = '240px';
    mainContent.style.width = (pageWidth-240)+'px';
    mainContent.style.marginLeft = "240px";
	toggleBar.onclick = closeNav;

}
function closeNav(){
    nav.style.width = '0px';
    mainContent.style.width = pageWidth+'px';
    mainContent.style.marginLeft = "0px";
    toggleBar.onclick = openNav;
}
function closePpp(){
    popup.style.display = 'none';
};
function openPpp(){
    popup.style.display = 'block';
};
console.log('wdwd');
document.getElementById("tab-filter").addEventListener("click", openPpp);
cross.addEventListener("click", closePpp);
save.addEventListener("click", closePpp);