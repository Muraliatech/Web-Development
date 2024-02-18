function saveText() {
    var text = document.getElementById('textArea').value;
    localStorage.setItem('savedText', text);
    alert('Text saved successfully!');
}

function clearText() {
    document.getElementById('textArea').value = '';
    localStorage.removeItem('savedText');
    alert('Text cleared successfully!');
}

window.onload = function() {
    var savedText = localStorage.getItem('savedText');
    if (savedText !== null) {
        document.getElementById('textArea').value = savedText;
    }
}
