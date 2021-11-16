let content = "";
let expandIcon = "";
let condenseIcon = "";

const termsButton = document.querySelector(".terms-button");
const privButton = document.querySelector(".priv-button");
const discButton = document.querySelector(".disc-button");
const accessButton = document.querySelector(".access-button");

function toggleTerms() {
    content = document.querySelector(".terms-content");
    expandIcon = document.querySelector(".terms-expand");
    condenseIcon = document.querySelector(".terms-condense");
    toggleExpand();
}

function togglePriv() {
    content = document.querySelector(".priv-content");
    expandIcon = document.querySelector(".priv-expand");
    condenseIcon = document.querySelector(".priv-condense");
    toggleExpand();
}

function toggleDisc() {
    content = document.querySelector(".disc-content");
    expandIcon = document.querySelector(".disc-expand");
    condenseIcon = document.querySelector(".disc-condense");
    toggleExpand();
}

function toggleAccess() {
    content = document.querySelector(".access-content");
    expandIcon = document.querySelector(".access-expand");
    condenseIcon = document.querySelector(".access-condense");
    toggleExpand();
}

function toggleExpand() {
  if (content.classList.contains("expandContent")) {
        content.classList.remove("expandContent");
        condenseIcon.style.display = "none";
        expandIcon.style.display = "block";
    } else {
        content.classList.add("expandContent");
        condenseIcon.style.display = "block";
        expandIcon.style.display = "none";
    }
}

termsButton.addEventListener("click", toggleTerms);
privButton.addEventListener("click", togglePriv);
discButton.addEventListener("click", toggleDisc);
accessButton.addEventListener("click", toggleAccess);

function getAnchor() {
    return (document.URL.split('#').length > 1) ? document.URL.split('#')[1] : null;
}

function autoExpand() {
    const anchor = getAnchor();
    switch (anchor) {
        case 'termsconditions':
            toggleTerms();
            break;
        case 'privacypolicy':
            togglePriv();
            break;
        case 'disclaimer':
            toggleDisc();
            break;
        case 'accessibility':
            toggleAccess();
            break;
    }
}

window.addEventListener("load", autoExpand);