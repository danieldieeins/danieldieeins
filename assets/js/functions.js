window.addEventListener('resize', checkWindowSize);

function checkWindowSize() {
    checkURL();
    if(window.innerWidth > 600) {
        activateMenu()
    } else {
        deactivateMenu();
    }
}

function checkURL() {
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.get("s")!=null) {
        const s = urlParams.get('s');
        if(s === "404") {
            document.title = "a.nerotv.live (404)"
            open_("sub/e404.html");
        } else if(s === "start"||s === "home") {
            document.title = "a.nerotv.live (start)"
            open_("sub/start.html");
        } else if(s === "lawstuff"||s==="rechtliches") {
            document.title = "a.nerotv.live (impressum & datenschutzerklärung)"
            open_("sub/lawstuff.html");
        } else if(s === "discord") {
            document.title = "a.nerotv.live (discord)"
            open_("sub/discord.html");
        } else if(s === "creator") {
            document.title = "a.nerotv.live (andere creator)"
            open_("sub/creator.html");
        } else if(s === "zyneon") {
            document.title = "a.nerotv.live (zyneon)"
            open_("https://zyneonstudios.com");
        } else {
            document.title = "a.nerotv.live (custom link)"
            open_(s);
        }
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

function link(url) {
    window.open(url, "_self");
}

function link_(url) {
    window.open(url,'_blank');
}

function open_(url) {
    document.getElementById("content").src = url;
}