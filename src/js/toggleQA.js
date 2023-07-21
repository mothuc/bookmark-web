const questionEles = document.querySelectorAll('.question');
questionEles.forEach(questionEle => {
    questionEle.addEventListener('click', function (e) {
        e.target.classList.toggle('active');
    });
})