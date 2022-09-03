//intialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

let saveEl=document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let count=0;

function increment(){
    count += 1;
    countEl.textContent = count;
}

function save(){
    let countStr = count + " - ";
    //2. Create a variable that contains both the count and the dash separator,
    //3. Render the variable in the saveEl using innerText
    //NB: Make sure to not delete the existing contnet of the paragraph
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count=0;

}