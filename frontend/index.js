window.addEventListener('load', () => {

    const question = document.querySelector('.image h1')
    const image = document.querySelector('.image img');
    let selectedOption = ''
    let correctAnswer = ''
    const sub = document.querySelector('.sub')

    const optionsParagraphs = document.querySelectorAll('.card p')
    const options = document.querySelectorAll('div.card')

    const url = new URL('http://localhost:3300/')
    const query = 'questions'

    options.forEach(o => o.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) return
        selectedOption = ''
        let option = e.target.querySelector('p')
        if (option !== null) {
            selectedOption = option.getAttribute('option')
        }
        console.log(selectedOption)
        options.forEach(op => {
            console.log(op.children[0])
            if (op.children[0].getAttribute('option') !== selectedOption) {
                if (op.classList.contains('active')) op.classList.remove('active')
            } else
                op.classList.add('active')
        })
    }));

    sub.addEventListener('click', send)

    fetch(url + query).then(res => {
        console.log('hey')
        return res.json()
    }).then(questions => { setInterface(questions) }).catch(error => console.log(error))


    function setSelectedOption(e) {
        let option = e.getAttribute('option');
        console.log('hey')
    }

    function setInterface(list) {
        const quest = list[0]
        console.log(quest)
        let opt = list[0].options.split('·')
        image.src = list[0].image
        correctAnswer = list[0].answer

        question.textContent = quest.question
        for (let i = 0; i < opt.length; i++) {
            optionsParagraphs[i].textContent = opt[i];
        }
    }

    function send() {
        console.log(`the correct answer is ${correctAnswer} and your answer was ${selectedOption}`)
        if (selectedOption === correctAnswer.toLowerCase() && selectedOption !== '') {
            console.log('CORRECT')
        } else console.log('WRONG')
    }
});