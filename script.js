const quotes = [
  { text: "The quieter you become, the more you can hear.", author: "Ram Dass" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Elegance is when the inside is as beautiful as the outside.", author: "Coco Chanel" },
  { text: "Black and white create a strange dreamscape that color never can.", author: "Jack Antonoff" },
  { text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
  { text: "Style is a way to say who you are without having to speak.", author: "Rachel Zoe" },
  { text: "Calmness is the cradle of power.", author: "Josiah Gilbert Holland" },
  { text: "The details are not the details. They make the design.", author: "Charles Eames" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "What we think, we become.", author: "Buddha" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Less is more.", author: "Ludwig Mies van der Rohe" },
  { text: "Great design is invisible.", author: "Jony Ive" },
  { text: "There is no greatness where there is no simplicity.", author: "Leo Tolstoy" },
  { text: "Creativity is intelligence having fun.", author: "Albert Einstein" },
  { text: "Art is not what you see, but what you make others see.", author: "Edgar Degas" },
  { text: "Beauty is the harmony of purpose and form.", author: "Alvar Aalto" },
  { text: "Design adds value faster than it adds cost.", author: "Joel Spolsky" },
  { text: "Simplicity carried to an extreme becomes elegance.", author: "Jon Franklin" },
  { text: "The absence of color makes you focus on shape and texture.", author: "Ansel Adams" },
  { text: "The future belongs to those who prepare for it today.", author: "Malcolm X" },
  { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "The soul becomes dyed with the color of its thoughts.", author: "Marcus Aurelius" },
  { text: "Discipline equals freedom.", author: "Jocko Willink" },
  { text: "If you can’t explain it simply, you don’t understand it well enough.", author: "Albert Einstein" },
  { text: "Minimalism is not a lack of something. It’s simply the perfect amount of something.", author: "Nicholas Burroughs" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Do it with passion or not at all.", author: "Rosa Nouchette Carey" },
  { text: "Simplicity is the keynote of all true elegance.", author: "Coco Chanel" },
  { text: "Make it simple, but significant.", author: "Don Draper" },
  { text: "A room should never allow the eye to settle in one place.", author: "Billy Baldwin" },
  { text: "The more you know, the less you need.", author: "Yvon Chouinard" },
  { text: "Monochrome doesn’t mean boring.", author: "Unknown" },
  { text: "White space is not empty space. It’s breathing room.", author: "Unknown" },
  { text: "To be calm is the highest achievement of the self.", author: "Zen Proverb" },
  { text: "The most complicated skill is to be simple.", author: "Dejan Stojanovic" },
  { text: "Art is the elimination of the unnecessary.", author: "Pablo Picasso" },
  { text: "There is beauty in simplicity.", author: "Unknown" },
  { text: "A designer knows he has achieved perfection when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
  { text: "Be still. The quieter you become, the more you can hear.", author: "Ram Dass" },
  { text: "Color is everything, black and white is more.", author: "Dominic Rouse" },
  { text: "The essence of elegance is simplicity.", author: "Unknown" },
  { text: "Don’t be afraid to be different. Be afraid of being the same as everyone else.", author: "Unknown" },
  { text: "Silence is the most powerful scream.", author: "Unknown" },
  { text: "The less you reveal, the more people can wonder.", author: "Emma Watson" },
  { text: "Design is intelligence made visible.", author: "Alina Wheeler" },
  { text: "Good design is as little design as possible.", author: "Dieter Rams" },
];

const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const tweetBtn = document.getElementById('tweet-quote');

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { text, author } = quotes[randomIndex];

  quoteText.classList.remove('fade');
  setTimeout(() => {
    quoteText.textContent = `“${text}”`;
    authorText.textContent = `— ${author}`;
    quoteText.classList.add('fade');
  }, 150);
}

function tweetQuote() {
  const quote = quoteText.textContent;
  const author = authorText.textContent;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote} ${author}`)}`;
  window.open(tweetUrl, '_blank');
}

newQuoteBtn.addEventListener('click', getRandomQuote);
tweetBtn.addEventListener('click', tweetQuote);
window.addEventListener('load', getRandomQuote);