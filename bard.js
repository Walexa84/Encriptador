function encode() {
    var text = document.getElementById("text").value;
    var encodedText = window.btoa(text);
    document.getElementById("text").value = encodedText;
  }
  
  function decode() {
    var text = document.getElementById("text").value;
    var decodedText = window.atob(text);
    document.getElementById("text").value = decodedText;
  }
  