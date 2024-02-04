function checkDevice() {
    const isMobile = /iPhone|iPad|iPod|Android|Windows Phone/i.test(navigator.userAgent);
    if (isMobile) {
        document.getElementById("head-menu").classList.remove("active");
    } else {
        document.getElementById("head-menu").classList.add("active");
    }
}