
//  TOP ROW OF QUESTIONS
var questions = [

	// THIS IS ROW 1
	{question: "This man created Javascript?\n\n a.) Who is Billy Jean \n b.) Who is Keith Richard \n c.) Who is Brendan Eich \n d.) Who is Marc 	", answer: 'c', points: 100},
	{question: "Director of 1992 film 'Resevoir Dogs'\n\n a.) Who is Phil Collins \n b.) Who is Quentin Tarentino \n c.) Who is Samuel Jackson \n d.) Who is Dan Riba", answer: "b", points: 100},
	{question: "This band made the movie 'Rock n' Roll High School'? \n\n a.) Who is The Beatles \n b.) Who is Ramones \n c.) Who is Motorhead \n d.) This movie doesn't exist", answer: "b", points: 100},
	{question: "This signififies the red stripes on the U.S. flag?\n\n a.) What is Bloodshed \n b.) What is Hardiness & Valour \n c.) What is Freedom  \n d.) What is Loved ones lost", answer: "b", points: 100},
	{question: "This Spice Girl is the only member of the group named after an actual spice?\n\n a.) Who is Scary \n b.) Who is Ginger \n c.) Who is Baby \n d.) Who is Posh", answer: "b", points: 100},

	// THIS IS ROW 2
	{question: "The year that the first Macintosh computer was created...\n\n a.) 1984 \n b.) 1978 \n c.) 2001 \n d.) 1994", answer: "a", points: 200},
	{question: "'You hit like a vegetarian' is a line taken from this movie.\n\n a.) Terminator \n b.) Escape Plan \n c.) Toy Story \n d.) The Road Warrior", answer: "b", points: 200},
	{question: "Which of these artists has the fewest full length album releases? \n\n a.) The Beatles \n b.) The Rolling Stones \n c.) Melvins \n d.) Led Zeppelin", answer: "d", points: 200},
	{question: "Which was NOT the name of one of the boats Christopher Columbas brought on his journey?\n\n a.) What is the Nina \n b.) What is the Pinta \n c.) What is the Torta \n d.) What is the Santa Maria", answer: "c", points: 200},
	{question: "Whose autobiography has the title 'A Long Walk To Freedom'?\n\n a.) Mikhail Gorbachev \n b.) Ranulph Fiennes \n c.) Mother Teresa \n d.) Nelson Mandela", answer: "d", points: 200},

	// THIS IS ROW 3
	{question: "This man wrote 'The Clean Coder' \n\n a.) Robert Martin \n b.) Douglas Crockford \n c.) David Flanagan \n d.) William Shatner", answer: "a", points: 300},
	{question: "Which is NOT one of the four houses at Hogwarts School of Witchcraft and Wizardry?\n\n a.) Gryffindor \n b.) Ravenclaw \n c.) Jigglypuff \n d.) Slytherin ", answer: "c", points: 300},
	{question: "This man replaced David Lee Roth as lead singer of the group Van Halen? \n\n a.) Who is George Fisher \n b.) Who is Chuck Schuldiner \n c.) Who is Sammy Hagar \n d.) Who is Edwin Sanchez ", answer: "c", points: 300},
	{question: "In what year did the  Titanic sink?\n\n a.) 1912 \n b.) 1885 \n c.) 1934 \n d.) 1951 ", answer: "a", points: 300},
	{question: "This is the middle color of a rainbow\n\n a.) What is orange \n b.) What is blue \n c.) What is green \n d.) What is yellow ", answer: "c", points: 300},
	
	// THIS IS ROW 4
	{question: "What year was the latest iteration of HTML released \n\n a.) 2016 \n b.) 2014 \n c.) 2007 \n d.) 2009", answer: "b", points: 400},
	{question: "Robin Williams 1997 recieved an Academy Award for best supporting actor for this film \n\n a.) Good Will Hunting \n b.) Flubber \n c.) Fathers' Day \n d.) Deconstructing Harry", answer: "a", points: 400},
	{question: "This is the year of the first air date of MVT.\n\n a.) 1979 \n b.) 1981 \n c.) 1989 \n d.) 1990", answer: "b", points: 400},
	{question: "This president was sworn in on an airplane\n\n a.) Lyndon B. Johnson \n b.) Richard Nixon \n c.) John F. Kennedy  \n d.) Gerald Ford ", answer: "a", points: 400},
	{question: "What is the world's second largest country?\n\n a.) China \n b.) Russia \n c.) U.S.A. \n d.) Canada ", answer: "d", points: 400},

	// THIS IS ROW 5
	{question: "Originally named by Marc Andreessen, this was the original name for Javascript? \n\n a.) ES1 \n b.) Java \n c.) Scripting \n d.) Mocha", answer: "d", points: 500},
	{question: "Michael J. Fox's middle name\n\n a.) What is Jean \n b.) What is Stewert \n c.) What is Andrew \n d.) What is Marcus", answer: "c", points: 500},
	{question: "This artist holds the record for most Grammy wins in history \n\n a.) Georg Solti \n b.) Keith Richard \n c.) Michael Jackson \n d.) Quincy Jones", answer: "a", points: 500},
	{question: "What year did Mother Teresa Die?\n\n a.) 1989 \n b.) 1995 \n c.) 1997 \n d.) Mother Teresa is still alive... ", answer: "c", points: 500},
	{question: "This country was formerly known as British Honduras\n\n a.) What is the Guatemala \n b.) What is the Belize \n c.) What is the Honduras \n d.) What is the Peru ", answer: "b", points: 500},
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

	// After click, disable
  	tile.addEventListener('click', function() {
  		this.style.backgroundColor = 'black';
  		this.style.color = 'black';
  	})

	// function to show objects of array
	tile.addEventListener ('click', function() {
	var input = prompt(this.getAttribute("question"));
	var answer = this.getAttribute("answer");
	var points = this.getAttribute("points");
		// Results correct or incorrect
		if (input === answer) {
			score += parseInt(points);
			alert("Correct! You now have " + score + " points!")
		}
		else {
			score -= parseInt(points);
			alert("Ouch! You have dropped to " + score + " points, bummer.");
		}
	// Displays score
	document.getElementById('counter').innerHTML = 'SCORE: ' + score;
});



document.body.appendChild(tile);
};
















































