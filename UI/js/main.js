// Get the modal
var modal = document.getElementById('id01');
var modal = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
 
function displayProductAddForm(){
    document.getElementById('id01').style.display='block'
    console.log( "product form clicked");
}

