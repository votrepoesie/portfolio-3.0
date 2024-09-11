// scroll animations
fade();

function fade() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add('show-fade');
          } else {
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
          } else {
            entry.target.classList.remove('show');
          }
        });
      });
      
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(element => {
        observer.observe(element);
    });
}


