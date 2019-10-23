# Welcome to Marvel-App
A website that allows you to search for any Marvel Superhero or Villain and all comics as well as cross-over comic appearances for that hero/villain. Learn where to buy comics at a store near you or a digital copy.

## Live link

[Veronica's Marvel-App](https://veroelaine.github.io/marvel-app/)

##
**Veronica's Online** - [Portfolio]("")

## Technologies Used

*Javascript
*jQuery
*HTML
*CSS
*API

## Resources
[Marvel API]("https://developer.marvel.com/docs")

## Design Features
°Clicakble carousel that shows the first three comics with link to more info
°Second carousel that shows cross-over comics
°Links in a sidebar as a tribue to Stan Lee, get to know Stan and his Marvel-ous quotes
°Scroll option for over-flow over character description animation

## Design
**Javascript & jQuery**
°Starts with creating a function for three ajex urls so that I may call that function at begining load to have a set hero background
°On submit allows for user input to clear out current character information to show the user inputs hero/villain
°I call on three different urls where in the first url I store an ID that gets inputed to the next urls to gather the characters information on those urls.
°I create two functions to loop through every comic and cross-over comic that are in the ajax data as objects within arrays within objects
°Each hero/villain image are different sizes and extensions, so in my loops I specify a set image size and gather the correct extension per comic image
°click functions for the carousel are created here

**CSS**
°I create my newspaper animation to spin on load of page
°I create my two crousels here

**API**
°I had to use and MD5 hash generator in addition to my API key to have access to Marvels API
°The character, comic and cross-over comics each had different urls so I put multiple ajax requests to gather the API data per one search/submit event


## Future Improvments
°Add a quiz to show random hero/villain description where you guess the correct character
°Add more to the quiz that gives a story summary and you guess the correct comic of the character you currently searched
°responsive design that changes the carousel to show three comics in column vs row so images and links are more easily readable




