document.getElementById('startButton').onclick = function() {
    document.getElementById('modal').style.display = 'block';
}

document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

const numBulbsInput = document.getElementById('numBulbs');
const bulbCountDisplay = document.getElementById('bulbCount');

numBulbsInput.oninput = function() {
    bulbCountDisplay.textContent = numBulbsInput.value;
}
document.getElementById('doneButton').onclick = function() {
    const numBulbs = numBulbsInput.value;
    const bulbContainer = document.getElementById('bulbContainer');
    bulbContainer.innerHTML = '';

    for (let i = 0; i < numBulbs; i++) {
        const bulbDiv = document.createElement('div');
        bulbDiv.className = 'bulb';
        bulbDiv.innerHTML = `
            <img src="off.png" alt="Bulb" id="bulb${i}">
            <input type="checkbox" id="bulbCheckbox${i}" class="bulbCheckbox">`;
        bulbContainer.appendChild(bulbDiv);

        const bulbCheckbox = bulbDiv.querySelector('.bulbCheckbox');
        bulbCheckbox.onchange = function() {
            const bulbImg = bulbDiv.querySelector('img');
            if (bulbCheckbox.checked) {
                bulbImg.src = "on.png";

                setTimeout(() => {
                    bulbCheckbox.checked = false; 
                    bulbImg.src = "off.png"; 
                }, 12000); 
            } else {
                bulbImg.src = "off.png";
            }
        }
    }
    document.getElementById('modal').style.display = 'none';
}
document.getElementById('resetButton').onclick = function() {
    document.getElementById('bulbContainer').innerHTML = '';
    numBulbsInput.value = 4; 
    bulbCountDisplay.textContent = 4; 
}