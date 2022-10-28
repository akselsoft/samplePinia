Sample application to try and figure out how to use Pinia with Cypress.

The goal here is to have a cypress test that SETS something in the store so it can then be tested.

Our store has a "form" with pages on it. Our individual components rely on this form to display the pages in it.

If we pass it as a prop, then cypress displays it properly.

But how do you set a Pinia value within cypress so you don't have to do what we are doing when you click the button.

To use:

- Clone
- yarn
- yarn cypress
- Try to run the App.cy.js

The component simply displays the pages on the form. Clicking the button will use the Store and set the value to a preset value.

The first two tests use a default and then also a prop to populate the form.
The THIRD test is the one that should use Pinia but I'm unsure how.

Within the test, I want to effectively call

setCurrentForm(object)

So that the fixture I pass will be treated as though it is part of the component, just as it will be within the application.

The AppTest.cy.js is attempting to use the implementation recommended from Pinia here:
https://pinia.vuejs.org/cookbook/testing.html#unit-testing-components

But that creates an error.

I'm missing something obvious but can't see it.
