function startListening() {
  // Check if SpeechRecognition is available
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    document.getElementById('output').innerHTML = 'Sorry, your browser does not support voice commands.';
    return;
  }


  // Create a new instance of SpeechRecognition
  var recognition = new SpeechRecognition();
  recognition.lang = 'en-US'; // Set the language

  // Start recognition
  recognition.start();

  // Event triggered when speech is recognized
recognition.onresult = function(event) {
  var transcript = event.results[0][0].transcript;
  document.getElementById('output').innerHTML = 'You said: ' + transcript;

  // Custom Commands
  if (transcript.toLowerCase().startsWith('open ')) {
    window.open('http://' + transcript.slice(5));
  } else if (transcript.toLowerCase().startsWith('change background to ')) {
    document.body.style.backgroundColor = transcript.slice(21);
  } else if (transcript.toLowerCase() === 'tell me a joke') {
    document.getElementById('output').innerHTML = 'Why don’t scientists trust atoms? Because they make up everything!';
  } else if (transcript.toLowerCase().startsWith('search for ')) {
    window.open('https://www.google.com/search?q=' + encodeURIComponent(transcript.slice(11)));
  } else if (transcript.toLowerCase().startsWith('what time is it')) {
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ipAddress = data.ip;
      const apiKey = '7cea445a507b81'; // Replace with your ipinfo.io API key
      return fetch(`https://ipinfo.io/${ipAddress}?token=${apiKey}`);
    })
    .then(response => response.json())
    .then(data => {
      const timeZone = data.timezone;

      // Step 3: Calculate the local time based on the time zone
      const localTime = moment.tz(timeZone);
      console.log('Local time:', localTime.format('YYYY-MM-DD HH:mm:ss'));
      document.getElementById('output').innerHTML = 'Local time: ' + localTime.format('YYYY-MM-DD HH:mm:ss');
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}

  // Add more custom commands as needed
};


  // Event triggered when an error occurs
  recognition.onerror = function(event) {
    document.getElementById('output').innerHTML = 'An error occurred: ' + event.error;
  };
}
