const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelector('.progress-bar');

        if (entry.isIntersecting) {
        square.classList.add('progress-animation');
        return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        /* square.classList.remove('progress-animation'); */ 
    });
});
observer.observe(document.querySelectorAll('.progress').forEach(el => observer.observe(el)));