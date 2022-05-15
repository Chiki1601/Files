const Rail = document.getElementById('rail');
const Files = document.getElementById('Files');
const filesChildren = Files.childNodes;
const Cover = document.getElementById('cover');

var drawsOpen = true;

Cover.addEventListener('click', function() {
    openCloseDrawers();
});

filesChildren.forEach(file => {
    file.addEventListener('mouseenter', function() {
        bumpFile(file);
    });
    file.addEventListener('mouseleave', function() {
        reverseBumpFile(file);
    });
});

function openCloseDrawers() {
    if (drawsOpen == true) {
        gsap.to(Rail, {x: -550, y: -180, duration: 2});
        drawsOpen = false;
    } else {
        gsap.to(Rail, {x: 0, y: 0, duration: 2});
        drawsOpen = true;
    }
}

function bumpFile(file) {
    gsap.to(file, {y: -50, duration: 0.6});
}

function reverseBumpFile(file) {
    gsap.to(file, {y: 0, duration: 1});
}