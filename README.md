Sample application to try and figure out how to use Pinia with Cypress.

The goal here is to have a cypress test that SETS something in the store so it can then be tested.

Our store has a "form" with pages on it. Our individual components rely on this form to display the pages in it.

If we pass it as a prop, then cypress displays it properly.

But how do you set a Pinia value within cypress so you don't have to do what we are doing when you click the button.
