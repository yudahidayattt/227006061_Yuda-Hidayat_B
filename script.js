function process() {
  var plaintext = document.getElementById('plaintext').value;
  var key = document.getElementById('key').value;
  var operation = document.getElementById('operation').value;
  var result = '';

  if (operation === 'encrypt') {
    result = CryptoJS.AES.encrypt(plaintext, key).toString();
  } else if (operation === 'decrypt') {
    var bytes = CryptoJS.AES.decrypt(plaintext, key);
    result = bytes.toString(CryptoJS.enc.Utf8);
  }

  document.getElementById('result').value = result;
}