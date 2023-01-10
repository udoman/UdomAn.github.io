const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else    //added this bc we want to it to show many times
        {
            entry.target.classList.remove('show');
        }
    });
});

function scrollToSection(data) {
    let section = document.querySelector(`[data-section-name="${data}"]`);
    section.scrollIntoView();
  }

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
