const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
// const endpoint = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';

function getQuote() {
	fetch(endpoint)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		displayQuote(data.message);
		// console.log(data);
	})
	.catch(function(){
		console.log("Error");
	});
}

function displayQuote(quote) {
	const quoteText = document.querySelector('#text');
	quoteText.textContent = quote;

	const tweetButton = document.querySelector("#tweet-quote");
	tweetButton.setAttribute('href', `https://twitter.com/intent/tweet?text=${quote}`);
}

const newQuoteButton  = document.querySelector('#new-quote');
newQuoteButton.addEventListener('click', getQuote);

getQuote();