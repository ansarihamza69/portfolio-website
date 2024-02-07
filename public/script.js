consoleText([ 'WEB-DEVELOPER', 'AND', 'A','COMPUTER','PROGRAMMER'], 'text',['AND','I AM ','kHALIQ']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 500)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

// Start the animation.
// animate();

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxQ3epvPuXN6j6eEPL3OYqAASYwKT2j4repnFUJxa-QQSLJkQUcHcAqyrs5xuv9cmN6/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
		msg.innerHTML = "Message Sent Successfully"
		setTimeout(function(){
			msg.innerHTML  = ""
		},8000)
		form.reset()
	  })
      .catch(error => console.error('Error!', error.message))
  })




  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show');
      } 
      else {
        entry.target.classList.remove('show');
      }
    });
  });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


const trailer = document.getElementById("trailer");
window.onmousemove = e => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  const keyframes = {
    transform: `translate(${x}px , ${y}px)`
  }
  trailer.animate(keyframes,{
   duration:800,
   fill: "forwards"
});
}

// gsap.to("#nav",{
//   backgroundColor : "#ffffff",
//   height: "120px",
//   duration: 0.5,
//   scrollTrigger:{
//     trigger:"#nav",
//     scroller:"body",
//     // markers:true
//     start:"top -80%",
//     end:"top-100%",
//     scrub:2
//   }
// });

gsap.to("#main",{
  backgroundColor :"#86a8cf",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    // markers:true
    start:"top -30%",
    end:"top -80%",
    scrub:2
  }
});


var typed = new Typed(".auto-type",{
  strings: ["Coder","Web Developer", "UI/UX Designer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})


// 3-dbox
const angle = 20;
const rotateCard = window;

const lerp = (start, end, amount) => {
	return (1 - amount) * start + amount * end;
};

const remap = (value, oldMax, newMax) => {
	const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
	return Math.min(Math.max(newValue, -newMax), newMax);
};

window.addEventListener("DOMContentLoaded", (event) => {
	const cards = document.querySelectorAll(".card");
	cards.forEach((e) => {		
		e.addEventListener("mousemove", (event) => {
			const rect = e.getBoundingClientRect();
			const centerX = (rect.left + rect.right) / 2;
			const centerY = (rect.top + rect.bottom) / 2;
			const posX = event.pageX - centerX;
			const posY = event.pageY - centerY;
			const x = remap(posX, rect.width / 2, angle);
			const y = remap(posY, rect.height / 2, angle);
			e.dataset.rotateX = x;
			e.dataset.rotateY = -y;
		});
		
		e.addEventListener("mouseout", (event) => {
			e.dataset.rotateX = 0;
			e.dataset.rotateY = 0;
		});
	});
	
	const update = () => {
		cards.forEach((e) => {
			let currentX = parseFloat(e.style.getPropertyValue('--rotateY').slice(0, -1));
			let currentY = parseFloat(e.style.getPropertyValue('--rotateX').slice(0, -1));
			if (isNaN(currentX)) currentX = 0;
			if (isNaN(currentY)) currentY = 0;
			const x = lerp(currentX, e.dataset.rotateX, 0.05);
			const y = lerp(currentY, e.dataset.rotateY, 0.05);
			e.style.setProperty("--rotateY", x + "deg");
			e.style.setProperty("--rotateX", y + "deg");
		})
	}
	setInterval (update,1000/60)
});

// side progress bar 

let calCScrollValue = ()=>{
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;

  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100)/calcHeight);
  
  if(pos > 100){
      scrollProgress.style.display = "grid";
  }else{
      scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click",()=>{
      document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#000 ${scrollValue}%,#474747 ${scrollValue}%)`;
};

window.onscroll = calCScrollValue;
window.onload = calCScrollValue;