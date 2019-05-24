addEventListener('load', () => {
    const code = document.querySelector('#code');
    const worker = new Worker('worker.js');
    worker.onmessage = (event) => { code.innerHTML = event.data; }
    worker.postMessage(code.textContent);
});