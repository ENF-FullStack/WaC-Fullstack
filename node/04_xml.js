/*
1.	Experiment with producing a XML-representation of the book object. 
	- Also create a book object from XML-representation
    - Uses xml2js for this exercise
*/

let x={title:'Hobbit',author:'Tolkien',price:12.4}


/*
2.	Go to the server.js, implement simple api to query a book (GET /api/book)
	- Pay respect to accept-header,
	  if it is application/xml return book represented in XML
	- How about POST /api/book?
*/

/*
3.	Study service.wsdl.
	Create soapservice.js and implement the service described by the wsdl.
	- calculate
	- getPerson (may be dummy, always return the same object)
	The module should export a single function that calls soap.listen
	
    Implement this as a standalon http-server.
*/

/*
4.	Create a client against the web service soapclient.js in your working directory
*/

/*
5.	To the server.js implement GET /api/person that calls the web service implemented
    in step 3 and returns the person it returns
*/