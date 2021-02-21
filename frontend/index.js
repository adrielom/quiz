window.addEventListener('load', () => {

    const question = document.querySelector('.image h1')
    const image = document.querySelector('.image img');
    let selectedOption = ''

    const options = document.querySelectorAll('.card p')
    const url = new URL('http://localhost:3300/')
    const query = 'questions'

    fetch(url + query).then(res => {
        return res.json()
    }).then(questions => { setInterface(questions) }).catch(error => console.log(error))

    options.forEach(o => o.addEventListener('click', (e) => {
        console.log(e.target.value)
    }));


    function setSelectedOption(e) {
        let option = e.getAttribute('option');
        console.log('hey')
    }

    function setInterface(list) {
        const quest = list[0]
        console.log(quest)
        let opt = list[0].options.split('·')

        question.textContent = quest.question
        for (let i = 0; i < opt.length; i++) {
            options[i].textContent = opt[i];
        }
        image.getAttribute('src') = list[0].image
    }
});