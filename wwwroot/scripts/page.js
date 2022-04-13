
window.onload=function(){

    //alert("Jep");
    console.log("Sivu on ladattu");
    //confirm("Oletko varma")
    
    document.getElementById('click1').onclick=function(ev){
        console.log("click1",ev.target,this);
    }

    document.getElementById('click2').addEventListener('click',function(ev){
        console.log('click2',ev.target,this);
    })

    document.getElementById('clickContainer').addEventListener('click',function(ev){
        console.log('container',ev.target,this);
        ev.stopPropagation();
    },true);

    document.getElementById('wc3').addEventListener('click',function(ev){
        let ok=confirm("Oletko varma");
        if (!ok) ev.preventDefault();
        //console.log(ok);
    })

    let h2=document.getElementById('styles');
    h2.style.color='red';
    h2.style.textDecoration='underline';

    let testElements=document.querySelectorAll('.test');
    for(let i=0;i<testElements.length;i++){
        testElements[i].style.fontStyle='italic';
    }

    document.getElementById('showNext').addEventListener('mouseover',function(){
        this.nextElementSibling.style.display='block';
    });

    document.getElementById('showNext').addEventListener('mouseout',function(){
        this.nextElementSibling.style.display='none';
    });

    let para=document.querySelector('aside section p');
    para.innerHTML="Muokattu";

    document.querySelector('aside section:nth-child(2)').innerHTML+="<p>Lisätty</p>";

    let p=document.createElement('p');
    let tx=document.createTextNode('Tässä sisältöä');
    p.appendChild(tx);
    document.querySelector('aside section:nth-child(2)').append(p);

    document.getElementById('addRow').addEventListener('click',function(){
        document.getElementById('priceBody').innerHTML+='<tr><td>Boat</td><td>6500€</td></tr>';
    });

    let headers=document.querySelectorAll('article section h2');
    for(let i=0;i<headers.length;i++){
        headers[i].addEventListener('click',function(ev){
            let parent=this.parentNode;
            //let children=parent.children;
            let child=parent.firstElementChild;
            while(child){
                if(child==this){
                    child=child.nextElementSibling;
                    continue;
                }
                child.classList.toggle('hidden');
                child=child.nextElementSibling;
            }
        });
    }
}


/*

$(document).ready(function(){
    $('#click1').click(function(ev){
        console.log("Paragraph clicked",ev.target)
    });
})
*/

/*
Events

1.	Create window.onload event-handler where you first just display an alert
    Register rest of the event handlers int the onload-handler.

2.	Attach onclick-handler for paragraph having id="click1"

3.  Use addEventListener-function to create click-handler for p id="click2"

4.  Add click-handler to the clickContainer. You should be able to see
    the event bubling.

5.  Add a click-handler for one of the links on the page, display confirm,
	and return true or false depending on user selection.
	
6.  Comment out the previous code and create the event-handlers with JQuery instead.

*/

/*
Dom Manipulation
Again primarily work with standard JavaScript. When you are finished you can also 
do the same steps with JQuery.

1. Change some style of the header having id "styles" as demonstrated in the material

2. Add css-class "test" for few paragraphs in the document
    - change some styles for each element having the test class
    - You don't need to specify .test into page.css, the css class is only used for javascript
      to mark several elements for specific behaviour

3. Set style="display: none" for one of the paragraphs, select another paragraph
   for whom you set mouseover-event handler where you show the hidden paragraph
   - you can also implement mouseout-handler to hide the paragraph again

4. Modify the innerHtml of the first paragraph with the first section of aside-element

5. Append a new paragraph to the second section of aside element
    - Two ways to accomplish this experiment with both


6. When the paragraph below the table is clicked a new table row should be created.

7. Then something more complex
    When h2 of a section within article is clicked all other content of that section
    should be hidden. When h2 is clicked again the other content should be revealed.
    So basically we are implementing an accordion....

    Hint: define a css-class .hidden{display:none}. When h2 is clicked you loop through
    the child elements of the parent of clicked h2 (skipping the h2 itself) and toggle
    .hidden class from the classlist of those children.
*/


/*
BOM

1. Create a click-handler where you open a new browser window

2. Create a click-handler where you navigate to a new page

3. Create a click-handler that starts a timer. Display a counter that increases
   on one second intervals in one of the paragraphs.

*/

