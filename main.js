
function navClick(text) {
    window.location.href = (window.location.href).split("#")[0] + '#' + text;
}

function replaceLink(link) {
    window.location.href = link;
}
