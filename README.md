# Project: Flashcard-o-matic

This project is from [Thinkful's](https://www.thinkful.com/bootcamp/web-development/) Software Engineering Bootcamp and is a capstone project. It demonstrates the student's skills of writing [React](https://reactjs.org/) function components, creating routes, and using [React Router](https://reactrouter.com/).


### Summary

Flashcard application that allows users to create, edit, delete, and study decks and cards.

### Highlights

* Full-stack application that uses CRUD operations
* Implementation of multiple screens using React function components and React Hooks
* Configuration of routes including nested routes using React Router

### Key Technologies 

* JavaScript
* React, React Hooks & React Router
* HTML
* CSS
* Bootstrap

### Installation

1. Fork / clone this repository
2. Run `npm install`
3. Run `npm start`

Set the `API_BASE_URL` environment variable to the base url for the API

If `API_BASE_URL` is not set, a default value of `http://localhost:5000` is used

### Screenshots 

<strong>1) Home Screen:</strong> This is the first screen the user will see

The Home screen is displayed at ```/decks``` and includes the following features: 
- A "Create Deck" button is shown and clicking it brings the user to the Create Deck screen
- Existing decks are each shown with the deck name, the number of cards, and a “Study,” “View,” and “Delete” button
- Clicking the “Study” button brings the user to the Study screen
- Clicking the “Edit” button brings the user to the Edit Deck screen
- Clicking the “Delete” button shows a warning message before deleting the deck
![alt Home](https://github.com/nsuami/Flashcard-o-matic/blob/main/src/img/Home.png) 

<strong>Delete Deck Prompt:</strong>

- When the user clicks the "Delete" button, a warning message is shown and the user can click "OK" or "Cancel" 
- If the user clicks "OK", the deck is deleted and the deleted deck is no longer visible on the Home screen
![alt Delete](https://github.com/nsuami/Flashcard-o-matic/blob/main/src/img/Delete.png) 


<strong>2) Study Screen:</strong> Where users can study a deck of flashcards

The Study screen is displayed at ```/decks/:deckId/study``` and includes the following features:
- There is a breadcrumb navigation bar with links to home /, followed by the name of the deck being studied and finally the text Study (e.g., Home/Rendering In React/Study)
- Cards are shown one at a time, front-side first and a button at the bottom of each card "flips" it to the other side
- After flipping the card, the screen shows a next button (see the "Next button" section below) to continue to the next card
- After the final card in the deck has been shown, a message (see the "Restart prompt" section below) is shown offering the user the opportunity to restart the deck
If the user does not restart the deck, they should return to the home screen
- Studying a deck with two or fewer cards should display a "Not enough cards" message (see the "Not enough cards" section below) and a button to add cards to the deck
![alt Study](https://github.com/nsuami/Flashcard-o-matic/blob/main/src/img/Study.png) 


<strong>3) Create Deck Screen</strong>: Allows user to create a new deck

The Home screen has a "Create Deck" button that brings the user to the Create Deck screen 

The Create Deck screen has the following features:
- There is a breadcrumb navigation bar with a link to home / followed by the text Create Deck (i.e., Home/Create Deck)
- A form is shown with the appropriate fields for creating a new deck
- If the user clicks "submit", the user is taken to the Deck screen
- If the user clicks "cancel", the user is taken to the Home screen
![alt CreatC](https://github.com/nsuami/Flashcard-o-matic/blob/main/src/img/CreatC.png)


<strong>4) Deck Screen:</strong> displays all of the information about a deck

The Deck screen has the following features:
- There is a breadcrumb navigation bar with a link to home / followed by the name of the deck (e.g., Home/React Router)
- The screen includes the deck name (e.g., "React Router") and deck description (e.g., "React Router is a collection of navigational components that compose declaratively in your application")
- The screen includes "Edit", "Study", "Add Cards", and "Delete" buttons. Each button takes the user to a different destination
![alt Deck](https://github.com/nsuami/Flashcard-o-matic/blob/main/src/img/Deck.png)


<strong>Delete Card Prompt:</strong>
- When the user clicks the "Delete" button associated with a card, a warning message is shown and the user can click "OK" or "Cancel"
- If the user clicks "OK", the card is deleted
![alt DeleteC](https://github.com/nsuami/Flashcard-o-matic/blob/main/src/img/DeleteC.png)


<strong>4) Edit Deck Screen:</strong> allows the user to modify information on an existing deck

The Edit Deck screen has the following features:
- There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck being edited, and finally the text Edit Deck (e.g., Home/Rendering in React/Edit Deck)
- It displays the same form as the Create Deck screen, except it is pre-filled with information for the existing deck
- The user can edit and update the form
- If the user clicks "Cancel", the user is taken to the Deck screen
![alt EditeD](https://github.com/nsuami/Flashcard-o-matic/blob/main/src/img/EditeD.png)


<strong>5) Add Card Screen</strong>: allows the user to add a new card to an existing deck and includes the following features:
- There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck to which the cards are being added, and finally the text Add Card (e.g., Home/React Router/Add Card)
- The screen displays the "React Router: Add Card" deck title
- A form is shown with the "front" and "back" fields for a new card where both fields use a <textarea> tag that can accommodate multiple lines of text.
- If the user clicks "Save", a new card is created and associated with the relevant deck. Then the form is cleared and the process for adding a card is restarted
- If the user clicks "Done", the user is taken to the Deck screen
 ![alt AddC](https://github.com/nsuami/Flashcard-o-matic/blob/main/src/img/AddC.png)

  
<strong>6) Edit Card Screen:</strong> allows the user to modify information on an existing card and has the following features:
- There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck of which the edited card is a member, and finally the text Edit Card :cardId (e.g., Home/Deck React Router/Edit Card 4)
- It displays the same form as the Add Card screen, except it is pre-filled with information for the existing card. It can be edited and updated
- If the user clicks on either "Save" or "Cancel", the user is taken to the Deck screen
 ![alt EditeC](https://github.com/nsuami/Flashcard-o-matic/blob/main/src/img/EditeC.png)

