window.addEventListener('resize', checkWindowSize);

function checkWindowSize() {
    if(window.innerWidth > 600) {
        activateMenu()
    } else {
        deactivateMenu();
    }
}

function activateMenu() {
    const isMobile = /iPhone|iPad|iPod|Android|Windows Phone/i.test(navigator.userAgent);
    if (!isMobile) {
        document.getElementById("head-menu").classList.add("active");
        document.getElementById("sub-menu").classList.add("active");
        document.getElementById("content").classList.add("active");
    }
}

function deactivateMenu() {
    document.getElementById("head-menu").classList.remove("active");
    document.getElementById("sub-menu").classList.remove("active");
    document.getElementById("content").classList.remove("active");
}