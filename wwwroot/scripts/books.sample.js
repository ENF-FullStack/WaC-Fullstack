/*
1.  Post form to url /formdata

2.  Add submit-event hander for the form where you validate data, at first step you should
    just display an alert on error an cancel the submit.
    
    For the validation it is enough to make certain title and author fields are not empty.
	
3.  Remove the alerts, instead display all errors in a div above the input fields

4.  If the field is in error display a red exclamation mark after it.
    You might first experiment with styles and html-constructs on how to display
    the exclamation mark after the input field.

5.  If the field is in error change the label to red.  Define css-class .error for this

DOM-manipulation:

6.  Instead of posting the form data add the valid book to the listbox.

7.  When item is selected in the listbox bring data back to edit fields.
    Add data-book-property for the option-element that holds the book object to accomplish this.

8.  Again, replace the previous code in books.js with jQuery

REST and AJAX

You will also need to modify the server/server.js so that it provides
restful api. Create the services as they are needed by the client.

GET /api/books -> should return all books
GET /api/books/:id -> should return a book with specified id
POST /api/books -> saves the book from body and return the saved book
PUT /api/books/:id -> modifies the book and returns the same book
DELETE /api/books/:id -> deletes the book with id in question

For AJAX we will first use XMLHttpRequest. You may copy the makeTheCall-function
from ajaxclient.html and simplify it to your needs.

9.	At startup populate the listbox with server data 

10.	When item is clicked fetch it from the server and display in edit fields

11.	When save is clicked replace data to the server with put-method, repopulate the list

12.	Add ”Save as New”-button, when it is clicked new book should be added to the list

13.	Add ”Delete”-button, it should obviously….

*/
