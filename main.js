
//  TOP ROW OF QUESTIONS
var questions = [
	{question: "QUESTION1", answer: "ANSWER", value: 100},
	{question: "QUESTION2", answer: "ANSWER", value: 100},
	{question: "QUESTION3", answer: "ANSWER", value: 100},
	{question: "QUESTION4", answer: "ANSWER", value: 100},
	{question: "QUESTION5", answer: "ANSWER", value: 100},

	{question: "QUESTION1", answer: "ANSWER", value: 200},
	{question: "QUESTION2", answer: "ANSWER", value: 200},
	{question: "QUESTION3", answer: "ANSWER", value: 200},
	{question: "QUESTION4", answer: "ANSWER", value: 200},
	{question: "QUESTION5", answer: "ANSWER", value: 200},

	{question: "QUESTION1", answer: "ANSWER", value: 300},
	{question: "QUESTION2", answer: "ANSWER", value: 300},
	{question: "QUESTION3", answer: "ANSWER", value: 300},
	{question: "QUESTION4", answer: "ANSWER", value: 300},
	{question: "QUESTION5", answer: "ANSWER", value: 300},

	{question: "QUESTION1", answer: "ANSWER", value: 400},
	{question: "QUESTION2", answer: "ANSWER", value: 400},
	{question: "QUESTION3", answer: "ANSWER", value: 400},
	{question: "QUESTION4", answer: "ANSWER", value: 400},
	{question: "QUESTION5", answer: "ANSWER", value: 400},

	{question: "QUESTION1", answer: "ANSWER", value: 500},
	{question: "QUESTION2", answer: "ANSWER", value: 500},
	{question: "QUESTION3", answer: "ANSWER", value: 500},
	{question: "QUESTION4", answer: "ANSWER", value: 500},
	{question: "QUESTION5", answer: "ANSWER", value: 500},
]


for ( i = 0; i<questions.length; i++) {
	var tiles = document.createElement('tiles');
	tiles.className = 'tiles';
	// creates; takes styles of said className

	tiles.innerHTML = questions[i].value;
	tiles.setAttribute("question", questions[i].question);


	document.body.appendChild(tiles);
}
