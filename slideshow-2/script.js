// automatic slideshow
function autoSlide() {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').appendChild(lists[0]); 
}

let autoSlideInterval = setInterval(autoSlide, 4000);

function resetSlideInterval(){
    clearInterval(autoSlideInterval)
    autoSlideInterval = setInterval(autoSlide, 4000);
}

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
    resetSlideInterval();
}

document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
    resetSlideInterval();
}

