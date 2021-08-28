const colorScheme = {
    'C': '#D1B9DE',
    'D': '#F4DDEE',
    'E': '#C9E5FA',
    'F': '#88D0F0',
    'G': '#F7EBBF',
    'A': '#F5C3C2',
    'B': '#FBEBEA',
}

const twinkleNotes = ['C', 'C', 'G', 'G', 'A', 'A', 'G',
    'F', 'F', 'E', 'E', 'D', 'D', 'C',
    'G', 'G', 'F', 'F', 'E', 'E', 'D',
    'G', 'G', 'F', 'F', 'E', 'E', 'D',
    'C', 'C', 'G', 'G', 'A', 'A', 'G',
    'F', 'F', 'E', 'E', 'D', 'D', 'C',
]

let buttonTwinkle = document.querySelector('#twinkle');
const audioFile = new Audio('./static/audio/Twinkle_Twinkle_Little_Star_plain.ogg')
let keys = document.getElementById('keys');

buttonTwinkle.addEventListener('click', (ev) => {
    audioFile.play();
    ev.target.disabled = true;
    startBackground();
})

audioFile.onended = function () {
    buttonTwinkle.disabled = false;
    Array.from(keys.children).forEach((k) => {
        k.style.backgroundColor = 'white';
    });
};



function startBackground() {
    keys.getElementsByClassName(twinkleNotes[0])[0].style.backgroundColor = colorScheme[twinkleNotes[0]];

    function setDelayColor(note, i) {
        setTimeout(
            function (){
                keys.getElementsByClassName(note)[0].style.backgroundColor = colorScheme[note];
            }, i * 570);
    }

    function setDelayWhite(note, i) {
        setTimeout(
            function (){
                keys.getElementsByClassName(note)[0].style.backgroundColor = 'white';
            }, i* 500 + (i-1) * 70);
    }

    for (let i=1; i<twinkleNotes.length;i++) {
        setDelayWhite(twinkleNotes[i-1],i);
        setDelayColor(twinkleNotes[i], i);
    }
    
}
