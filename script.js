
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];
//sho new quote
function newQuote(){
	//pick a random quote from apiquotes array 
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	
	if(!quote.author){
		authorText.textContent= 'Unknown';
	}else{
		authorText.textContent = quote.author;
	}
	

	// check quote lengthto determine styling
	if(quote.text.length > 120){
		quoteText.classList.add('long-quote')
	}else{
		quote.classList.remove('long-quote')
	}
	quoteText.textContent = quote.text;
}

	
	


// get quotes from api

async function getQuotes(){
	const apiUrl ='https://type.fit/api/quotes';
	try{
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();

		newQuote();


	}catch(error){
		//handle error
	}
}


//Tweet quote

function tweetQuote(){
	const twitterUrl =`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
	window.open(twitterUrl, '_blank');
}

//event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote)


//on load
getQuotes();