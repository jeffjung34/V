document.getElementById("noBtn").addEventListener("click", function() {
    if (this.textContent === "No") {
        this.textContent = "Pleaseee";
        document.getElementById("yesBtn").style.transform = "scale(1.5)";
    } else if (this.textContent === "Pleaseee") {
        this.textContent = "Last Chance";
        document.getElementById("yesBtn").style.transform = "scale(2.0)"; // Make the Yes button even bigger
    } else if (this.textContent === "Last Chance") {
        // Hide the No button
        this.style.display = "none";

        document.getElementById("yesBtn").textContent = "Yes";
    }
});




document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("question").style.display = "none";
    document.getElementById("response").style.display = "block";
    var audio = document.getElementById("celebrationMusic");
    audio.play();
});
