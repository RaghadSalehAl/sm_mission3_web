runSpeechRecog = () => {
    document.getElementById("output").innerHTML = "Loading text...";
    var output = document.getElementById('output');
    var action = document.getElementById('action');
    let recognization = new webkitSpeechRecognition();
    recognization.onstart = () => {
       action.innerHTML = "Listening...";
    }
    recognization.onspeechend = () => {
       action.innerHTML = "Done Listening";
    }
    recognization.onresult = (e) => {
       var transcript = e.results[0][0].transcript;
       output.innerHTML = transcript;
       action.innerHTML = "";
       saveText(transcript);
    }
    recognization.start();
 }

 function saveText(speechtext) {
    // Check if the speechtext is empty
    if (speechtext == '') {
        // If empty, return and do nothing
       return
    }
    else {
       // Send an AJAX request to save_speech.php
       $.ajax({
          url: "php/save_speech.php",
          method: "POST",
          data: {
             text: speechtext,
             action: "save"
          },
          success: function (result) {
             // Check if the result is 'success'
             if (result == 'success') {
                // If successful, display an alert indicating successful save
                alert('Speech has been successfully saved to the database');
             } else {
                // If failed, display an alert indicating failed save
                alert('Saving speech to the database failed');

             }

          }
       });

    }
 }
 