
//  TOP ROW OF QUESTIONS
var questions = [
	{question: "Is this the first question?\n\n a.) a \n b.) b", answer: 'a', points: 100},
	{question: "QUESTION2", answer: "ANSWER", points: 100},
	{question: "QUESTION3", answer: "ANSWER", points: 100},
	{question: "QUESTION4", answer: "ANSWER", points: 100},
	{question: "QUESTION5", answer: "ANSWER", points: 100},

	{question: "QUESTION1", answer: "ANSWER", points: 200},
	{question: "QUESTION2", answer: "ANSWER", points: 200},
	{question: "QUESTION3", answer: "ANSWER", points: 200},
	{question: "QUESTION4", answer: "ANSWER", points: 200},
	{question: "QUESTION5", answer: "ANSWER", points: 200},

	{question: "QUESTION1", answer: "ANSWER", points: 300},
	{question: "QUESTION2", answer: "ANSWER", points: 300},
	{question: "QUESTION3", answer: "ANSWER", points: 300},
	{question: "QUESTION4", answer: "ANSWER", points: 300},
	{question: "QUESTION5", answer: "ANSWER", points: 300},

	{question: "QUESTION1", answer: "ANSWER", points: 400},
	{question: "QUESTION2", answer: "ANSWER", points: 400},
	{question: "QUESTION3", answer: "ANSWER", points: 400},
	{question: "QUESTION4", answer: "ANSWER", points: 400},
	{question: "QUESTION5", answer: "ANSWER", points: 400},

	{question: "QUESTION1", answer: "ANSWER", points: 500},
	{question: "QUESTION2", answer: "ANSWER", points: 500},
	{question: "QUESTION3", answer: "ANSWER", points: 500},
	{question: "QUESTION4", answer: "ANSWER", points: 500},
	{question: "QUESTION5", answer: "ANSWER", points: 500},
];


var score = 0;


for ( i = 0; i<questions.length; i++) {
	var tile = document.createElement('tiles');
	tile.className = 'tiles';
	// ^^^creates; takes styles of said className
	tile.innerHTML = questions[i].points;
	tile.setAttribute("question", questions[i].question);
	tile.setAttribute("answer", questions[i].answer);
	tile.setAttribute("points", questions[i].points);


	// function
	tile.addEventListener ('click', function() {

	var input = prompt(this.getAttribute("question"));
	var answer = this.getAttribute("answer");
	var points = this.getAttribute("points");




	if (input === answer) {
		score += parseInt(points);
		alert("Correct! You now have " + score + " points!")
	}
	else {
		score -= parseInt(points);
		alert("Ouch! You have dropped to " + score + " points, bummer.");
	}
	document.getElementById('counter').innerHTML = score;
});



// Mouse over/out
tile.addEventListener("mouseover", changeText);
	function changeText (){
	  this.innerHTML = "category";
}

tile.addEventListener("mouseout", revertText);
	function revertText (){
	  this.innerHTML = questions[i].points;
}







document.body.appendChild(tile);


};

















































