function addingEventListener() {
 // Step 1: Select the element
 const input = document.getElementById('button');
  
 // Step 2: Define a callback function
 function clickAlert() {
   alert('I was clicked!');
 }
 
 // Step 3: Attach the event listener
 input.addEventListener('click', clickAlert);
}