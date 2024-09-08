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
      description: "How might we encourage high school students to make well-informed decisions regarding classes and career paths?",
      tags: ["ed-tech", "creativity"],
      redirectUrl: "future-frame.html",
    },

    {
      title: "BUMBLE: CHANCE ENCOUNTERS",
      description: "How might we encourage more organic interactions between Bumble users through a new geolocation feature?",
      tags: ["mobile", "interaction-design"],
      redirectUrl: "chance-encounters.html",
    },

    {
      title: "VR GAME FOR SELF-COMPASSION",
      description: "How might we empower young adults to manage stress and overcome feelings of inadequacy?",
      tags: ["rapid-prototyping", "mental-health"],
      redirectUrl: "vr-game.html",
    },
];

const caseStudiesContainer = document.querySelector('.case-studies');

caseStudies.forEach(caseStudy => {
  // Create the case study container
  const caseStudyDiv = document.createElement('div');
  caseStudyDiv.classList.add('case-study');
  
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
