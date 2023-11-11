async  function copy(){
//   // // Get the text field
let copyText = document.getElementById("copy");
  
// also works

//   // Select the text field
//   copyText.select();
//   // copyText.setSelectionRange(0, 99999); // For mobile devices

//   // Copy the text inside the text field
//   navigator.clipboard.writeText(copyText.value);
  
//   // Alert the copied text
//   alert("Copied the text: " + copyText.value);

copyText.select();
document.execCommand("copy");
alert("copied: "+ copyText.value)

}