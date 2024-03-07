const sharedBuffer = new SharedArrayBuffer(4); // Размер достаточный для одного Int32
const sharedArray = new Int32Array(sharedBuffer);

const worker = new Worker('worker.js');
worker.postMessage({ sharedBuffer });

const countEl = document.getElementById('count');

// Слушаем сообщения от worker для обновления счётчика
worker.onmessage = function(e) {
    countEl.textContent = e.data;
};

document.getElementById('visitButton').addEventListener('click', function() {
    worker.postMessage('visit');
});
