// script.js
function calculateFLAMES() {
    const yourName = document.getElementById('yourName').value.trim().toLowerCase();
    const partnerName = document.getElementById('partnerName').value.trim().toLowerCase();

    if (yourName === '' || partnerName === '') {
        alert('Please enter both names.');
        return;
    }

    let flames = "flames";
    let count = 0;

    for (let i = 0; i < yourName.length; i++) {
        const index = flames.indexOf(yourName[i]);
        if (index !== -1) {
            flames = flames.slice(0, index) + flames.slice(index + 1);
            count++;
        }
    }

    for (let i = 0; i < partnerName.length; i++) {
        const index = flames.indexOf(partnerName[i]);
        if (index !== -1) {
            flames = flames.slice(0, index) + flames.slice(index + 1);
            count++;
        }
    }

    const result = ["Friends", "Lovers", "Angry", "Married", "Engaged", "Siblings"];
    const relationship = result[flames.length % 6];

    document.getElementById('result').innerText = `Relationship: ${relationship}`;
}
