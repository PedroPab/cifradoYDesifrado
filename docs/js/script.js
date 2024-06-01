function encryptText() {
  var text = document.getElementById('inputText').value;
  var key = document.getElementById('key').value;
  if (text && key) {
    var encrypted = CryptoJS.AES.encrypt(text, key).toString();
    document.getElementById('outputText').value = encrypted;
    estimateSecurity(key);
  } else {
    alert('Por favor, ingresa el texto y la clave.');
  }
}

function decryptText() {
  var text = document.getElementById('inputText').value;
  var key = document.getElementById('key').value;
  if (text && key) {
    try {
      var decrypted = CryptoJS.AES.decrypt(text, key);
      var originalText = decrypted.toString(CryptoJS.enc.Utf8);
      document.getElementById('outputText').value = originalText;
    } catch (e) {
      alert('Error al descifrar. Verifica que la clave sea correcta.');
    }
  } else {
    alert('Por favor, ingresa el texto y la clave.');
  }
}

function copyToClipboard() {
  const outputText = document.getElementById('outputText');
  outputText.select();
  document.execCommand('copy');
}