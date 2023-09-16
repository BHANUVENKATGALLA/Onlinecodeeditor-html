const runButton = document.getElementById('run-button');
const codeEditor = document.getElementById('code-editor');
const outputFrame = document.getElementById('output');

runButton.addEventListener('click', () => {
    const code = codeEditor.value;
    const outputDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;
    outputDocument.open();
    outputDocument.write(code); 
    outputDocument.close();
});
