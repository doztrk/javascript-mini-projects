let notes = JSON.parse(localStorage.getItem("notes")) || ["Wake up"];

let listEl = document.querySelector(".liste");

let row = "";

//Cover array elements with <li>
for (let note of notes) {
  row += `<li>${note}</li>`;
}
//Add <li> elements to <ul>
listEl.innerHTML = row;

let inputEl = document.getElementById("newInput");

//Enter keydown
inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.getElementById("addBtn").click();
  }
});

document.getElementById("addBtn").addEventListener("click", () => {
  //Validation
  if (!inputEl.value) {
    inputEl.focus();
    return;
  }

  //Add input to list
  listEl.innerHTML += `<li>${inputEl.value}</li>`;
  //Add input to array
  notes.push(inputEl.value);

  //Local Storage adding
  localStorage.setItem("notes", JSON.stringify(notes));
  //Show notes in the card
  showResult(notes);

  //Reset input
  inputEl.value = "";
  inputEl.focus();
});

document.getElementById("removeBtn").addEventListener("click", () => {
  //Validation
  if (notes.length === 0) {
    return;
  } else {
    //Remove last element
    notes.pop();

    //Local Storage remove
    localStorage.removeItem("notes", JSON.stringify(notes));
    //Show notes in the card
    showResult(notes);
    //Remove last <li> element
    listEl.lastElementChild.remove();
  }
});

const showResult = (arr) => {
  //Validation
  if (arr.length === 0) {
    alert("List is empty");
    document.getElementById(
      "cardMenu"
    ).innerHTML = `<b>There is no note to be deleted</b>`;
  } else {
    document.getElementById("cardMenu").innerHTML = arr.join(" - ");
  }
};
