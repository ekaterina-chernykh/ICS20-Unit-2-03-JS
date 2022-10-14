// This file contains the JS functions for index.html

/**
* This function gets users street number and name back to user.
    */
function enterClicked() {
    // input
    const streetnumber = parseInt(document.getElementById("street-number").value)
    const streetname = document.getElementById("street-name").value

    // output
    document.getElementById("address").innerHTML = 
        "Your street is: " + streetnumber + ", " + streetname + "."
}