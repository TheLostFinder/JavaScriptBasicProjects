let count = 0;

function increment() {
    count++;
    console.log(`Count: ${count}`);
    updateCount();
}
function del() {
    count = 0;
    console.log(`Count: ${count}`);
    updateCount()
}
function updateCount(){
    const countElement = document.getElementById('count');
    countElement.textContent = count;
}