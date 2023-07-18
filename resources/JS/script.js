//menu elements
let about = document.getElementById('about');
let projects = document.getElementById('projects');
let links = document.getElementById('links');
let toggle = document.getElementById('toggle');
let cancle = document.getElementById('cancle');


//project elements
let project1 = document.getElementById('project1');
let project2 = document.getElementById('project2');
let project3 = document.getElementById('project3');
let link1 = document.getElementById('link1');
let link2 = document.getElementById('link2');
let link3 = document.getElementById('link3');
let remove1 = document.getElementById('remove1');
let remove2 = document.getElementById('remove2');
let remove3 = document.getElementById('remove3');

//menu functons
let menu = function() {
    about.style.display = 'block';
    projects.style.display = 'block';
    links.style.display = 'block';
    cancle.style.display = 'block';
    toggle.style.display = 'none';
}

let hide = function() {
    about.style.display = 'none';
    projects.style.display = 'none';
    links.style.display = 'none';
    cancle.style.display = 'none';
    toggle.style.display = 'block';
}

toggle.addEventListener('click', menu);
cancle.addEventListener('click', hide);

//project show functions
let showProject1 = function() {
    project1.style.display = 'block';
}

let showProject2 = function() {
    project2.style.display = 'block';
}

let showProject3 = function() {
    project3.style.display = 'block';
}

link1.addEventListener('click', showProject1);
link2.addEventListener('click', showProject2);
link3.addEventListener('click', showProject3);

//project hide functions
let hideProject1 = function() {
    project1.style.display = 'none'
}

let hideProject2 = function() {
    project2.style.display = 'none'
}

let hideProject3 = function() {
    project3.style.display = 'none'
}

remove1.addEventListener('click', hideProject1);
remove2.addEventListener('click', hideProject2);
remove3.addEventListener('click', hideProject3);