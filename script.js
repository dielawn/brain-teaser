const containerDiv = document.getElementById('container')
const answerDiv = document.getElementById('answerDiv')

const testSize = 1000


const getPercentage = (part, whole) => (part / whole) * 100

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min 

const pickAnswers = () => {

    const randomAnswers = []    
    
    for (let i = 0; i < testSize; i++) {
        let answer = getRandomNum(0, 3)
      randomAnswers.push(answer)
    }
    return randomAnswers
}

console.log(pickAnswers())

const getAnswerPercent = () => {
    
    const randomAnswers = pickAnswers()

    const answer0 = []
    const answer1 = []
    const answer2 = []
    const answer3 = []

    for (const answer of randomAnswers) {
        if (answer === 0) answer0.push(answer)
        else if (answer === 1) answer1.push(answer)
        else if (answer === 2)  answer2.push(answer)
        else answer3.push(answer)
    }

    console.log(`25% = ${getPercentage(answer0.length, testSize)}%`)
    console.log(`50% = ${getPercentage(answer1.length, testSize)}%`)
    console.log(`0% = ${getPercentage(answer2.length, testSize)}%`)
    console.log(`25% = ${getPercentage(answer3.length, testSize)}%`)

    const answerObj = {
        textAnswerA: `25% = ${getPercentage(answer0.length, testSize)}%`,
        textAnswerB: `0% = ${getPercentage(answer1.length, testSize)}%`,
        textAnswerC: `50% = ${getPercentage(answer2.length, testSize)}%`,
        textAnswerD: `25% = ${getPercentage(answer3.length, testSize)}%`
    }
    return answerObj    
}

console.log(getAnswerPercent())

const renderStats = () => {

    const statsDiv = document.createElement('div')
    const results = getAnswerPercent()
    statsDiv.innerHTML = 
        `Every Time the page is refreshed the above answers are choosen randomly 1000 times.
        <br> The results: 
        <br>${results.textAnswerA}
        <br>${results.textAnswerB}
        <br>${results.textAnswerC} 
        <br>${results.textAnswerD}`
    answerDiv.appendChild(statsDiv)
}



const answerBtn = document.getElementById('answerBtn')

const showResult = () => {

   const textElements = document.querySelectorAll('p')   
   for (text of textElements) {
    text.classList.toggle('hide')
   } 
   answerDiv.classList.toggle('hide')
}

renderStats()
showResult()

answerBtn.addEventListener('click', () => {
    showResult()
    answerBtn.remove()
})