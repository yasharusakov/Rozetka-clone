function observer() {
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
                change.target.querySelector('.element-target img').src = change.target.getAttribute('data-src');
            }
        });
    }
      
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
      
    for (let elm of elements) {
        observer.observe(elm);
    }
}

export default observer;