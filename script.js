const carousel = document.querySelector('.carousel');

let sliders = [];

let slideIndex = 0;

const createSlide = () =>{
     if(slideIndex >= movies.length){
        slideIndex=0;
     }

    //  creating a element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');



    // attach the elements
     imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);


    // set up image
    imgElement.src= movies[slideIndex].image;
    slideIndex ++;


    // set el classname
    slide.className ='slider';
    content.className='slider-content';
    h1.className='movie-title';
    p.className='movie-des';
    sliders.push(slide);
    // add slide effect
    if(sliders.length){
        sliders[0].style.marginLeft = `calc( -${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}
createSlide();
createSlide();
createSlide();
createSlide();
createSlide();
setInterval(()=>{
    createSlide();
},3000);

// videocard section-------------------

const videocards=[...document.querySelectorAll('.video-card')];
videocards.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        let video=item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    })
})
// card listner
let cardcontainers=document.querySelectorAll('.card-container');
let prebtns=document.querySelectorAll('.pre-btn');
let nxtbtns= document.querySelectorAll('.nxt-btn');

cardcontainers.forEach((item,i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    nxtbtns[i].addEventListener('click',()=>{
        item.scrollLeft+=containerwidth -200;
    })
    prebtns[i].addEventListener('click',()=>{
        item.scrollLeft-=containerwidth +200;
    })
})