const img = document.querySelector(".image img");
const nextLeft = document.querySelector(".left");
const nextRight = document.querySelector(".right");
const info = document.querySelector(".info-container p")
const myName = document.querySelector(".name")
const prof = document.querySelector(".prof")

const tanyaImg = './images/image-tanya.jpg';
const johnImg = './images/image-john.jpg';

const paraJohn = `” If you want to lay the best foundation possible I’d recommend
taking this course. The depth the instructors go into is
incredible. I now feel so confident about starting up as a
professional developer. ”`;
const paraTanya = `“ I’ve been interested in coding for a while but never taken the jump,
until now. I couldn’t recommend this course enough. I’m now in the job
of my dreams and so excited about the future. ”`;

const tanyaName = "Tanya Sinclair";
const johnName = "John Tarkpor Junior";


const tanyaProf = "UX Engineer";
const johnProf =  "Front-end Developer";

nextLeft.addEventListener('click', ()=>{
    if(nextLeft){
        img.src = johnImg;
        info.textContent = paraJohn;
        myName.textContent = johnName;
        prof.textContent = johnProf;
    }else{
        img.src = tanyaImg;
        info.textContent = paraTanya;
        myName.textContent = tanyaName;
        prof.textContent = tanyaProf;
    }
  

});
nextRight.addEventListener('click', ()=>{
    if(nextLeft){
        img.src = tanyaImg;
        info.textContent = paraTanya;
        myName.textContent = tanyaName;
        prof.textContent = tanyaProf;
    }else{
        img.src = johnImg;
        info.textContent = paraJohn;
        myName.textContent = tanyaName;
        prof.textContent = tanyaProf;
    }
});



