// homepage / arrow animation
let arrow = document.querySelector('#arrow');
anime({
    targets: arrow,
    translateY: 8,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
    duration: 600
});

// homepage / arm animation
let arm = document.querySelector('#arm');
function wave() {
    anime({
        targets: arm,
        translateX: 54,
        rotate: 10,
        translateY: -114,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 800
    });
}

wave();

// homepage / laptop animation
let laptopTop = document.querySelector('#laptop-top');
let laptopBottom = document.querySelector('#laptop-bottom');

function lift() {
    anime({
        targets: [laptopTop, laptopBottom],
        translateY: -10,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 800,
        delay: 1000
    });
}

lift();

// homepage / case studies / populate 

const caseStudies = [
    {
      title: "FUTURE FRAME",
      description: "Helping high school students with future planning through visualization.",
      tags: ["ed-tech", "creativity"],
      redirectUrl: "future-frame.html",
      background: "url('images/ff-hp-cover-larger.png')",
    },

    {
      title: "BUMBLE: CHANCE ENCOUNTERS",
      description: "Creating organic interactions between BFF & BIZZ users through geolocation.",
      tags: ["mobile-app", "interaction-design"],
      redirectUrl: "chance-encounters.html",
      background: "url('images/b-hp-cover.png')",
    },

    {
      title: "VR GAME FOR SELF-COMPASSION",
      description: "Empowering young adults to manage stress and overcome feelings of inadequacy.",
      tags: ["rapid-prototyping", "mental-health"],
      redirectUrl: "vr-game.html",
      background: "url('images/vr-hero.gif')",
    },
];

const caseStudiesContainer = document.querySelector('.case-studies');

caseStudies.forEach(caseStudy => {
  // Create the case study container
  const caseStudyDiv = document.createElement('div');
  caseStudyDiv.classList.add('case-study');
  caseStudyDiv.classList.add('hidden');
  
  // Create the graphic div
  const graphicDiv = document.createElement('div');
  graphicDiv.classList.add('graphic');
  
  // Create the content div
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content');
  
  // Create the title
  const title = document.createElement('h4');
  title.textContent = caseStudy.title;
  
  // Create the description
  const description = document.createElement('p');
  description.textContent = caseStudy.description;
  
  // Create the tags container
  const tagsDiv = document.createElement('div');
  tagsDiv.classList.add('tags');
  
  // Create and append each tag
  caseStudy.tags.forEach(tag => {
    const tagDiv = document.createElement('div');
    tagDiv.classList.add('tag');
    tagDiv.textContent = tag;
    tagsDiv.appendChild(tagDiv);
  });

  // Add background image 
  graphicDiv.style.background = caseStudy.background;
  graphicDiv.style.backgroundSize = 'cover';
  
  // Append title, description, and tags to contentDiv
  contentDiv.appendChild(title);
  contentDiv.appendChild(description);
  contentDiv.appendChild(tagsDiv);
  
  // Append graphic and contentDiv to caseStudyDiv
  caseStudyDiv.appendChild(graphicDiv);
  caseStudyDiv.appendChild(contentDiv);
  
  // Add click event to redirect to the corresponding page
  caseStudyDiv.addEventListener('click', () => {
    window.location.href = caseStudy.redirectUrl;
  });
  
  // Append the caseStudyDiv to the case studies container
  caseStudiesContainer.appendChild(caseStudyDiv);
});


// blob that follows cursor 
let blob = document.querySelector('#blob');
let smallBlob = document.querySelector('#small-blob');

let mouseX = 0, mouseY = 0;
let blobX = 0, blobY = 0;
let delay = 0.1;  // Adjust this value for slower or faster delay

document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX - 200;  // Adjust for smaller blob to follow accurately
    mouseY = e.pageY - 200;

    // Move smallBlob directly with the mouse
    smallBlob.style.left = mouseX + 'px';
    smallBlob.style.top = mouseY + 'px';
});

function animate() {
    // Slowly interpolate blob's position towards the mouse
    blobX += (mouseX - 100 - blobX) * delay;
    blobY += (mouseY - 100 - blobY) * delay;

    blob.style.left = blobX + 'px';
    blob.style.top = blobY + 'px';

    requestAnimationFrame(animate);
}

animate();

document.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    anime({
      targets: [blob, smallBlob],
      opacity: 0,
      duration: 200,
      easing: 'linear'
    });
  } else {
    anime({
      targets: [blob, smallBlob],
      opacity: 1,
      duration: 200,
      easing: 'linear'
    });
  }
});

// fix the issue where blob goes below footer and creates extra negative space
let footer = document.querySelector('special-footer');

footer.addEventListener('mouseover', () => {
  console.log('hover');
  blob.style.display = 'none';
  smallBlob.style.display = 'none';
});

footer.addEventListener('mouseout', () => {
  blob.style.display = 'block';
  smallBlob.style.display = 'block';
});

// hides cursor animation on mobile
let screenSize = window.innerWidth;

if (screenSize < 600) {
  // cursor animation
  blob.style.display = 'none';
  smallBlob.style.display = 'none';
};



// scroll animations
fade();

function fade() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add('show-fade');
          } 
          else {
            entry.target.classList.remove('show-fade');
          }
        });
    });
      
    const hiddenElements = document.querySelectorAll('.hidden-fade');
    hiddenElements.forEach(element => {
        observer.observe(element);
    });
}

slide();

function slide() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } 
          else {
            entry.target.classList.remove('show');
          }
        });
      });
      
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(element => {
        observer.observe(element);
    });
}