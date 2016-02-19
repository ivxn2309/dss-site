function setFocusTo(element){
    document.getElementById(element).focus();
}

function toggleSearchBox() {
	var area = document.getElementById("search-area");
	if (area.style.width != "30%") {
		area.style.width = "30%";
		setFocusTo("search-text");
	}
}

function hideSearchBox() {
	var area = document.getElementById("search-area");
	area.style.width = "0px";
}