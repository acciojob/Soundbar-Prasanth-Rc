//your JS code here. If required.
const audioElements = {
            'sound1.mp3': new Audio('sounds/sound1.mp3'),
            'sound2.mp3': new Audio('sounds/sound2.mp3'),
            'sound3.mp3': new Audio('sounds/sound3.mp3'),
            'sound4.mp3': new Audio('sounds/sound4.mp3'),
            'sound5.mp3': new Audio('sounds/sound5.mp3'),
            'sound6.mp3': new Audio('sounds/sound6.mp3')
        };
        
        let currentlyPlaying = null;
        
        const buttons = document.querySelectorAll('.btn');
        const stopButton = document.querySelector('.stop');
        
        buttons.forEach(button => {
            if (button.classList.contains('stop')) return;
            
            button.addEventListener('click', function() {
                if (currentlyPlaying) {
                    currentlyPlaying.pause();
                    currentlyPlaying.currentTime = 0;
                }
                
                const soundFile = this.getAttribute('data-sound');
                currentlyPlaying = audioElements[soundFile];
                currentlyPlaying.play()
                    .catch(error => console.error('Audio playback failed:', error));
            });
        });
        
        stopButton.addEventListener('click', function() {
            if (currentlyPlaying) {
                currentlyPlaying.pause();
                currentlyPlaying.currentTime = 0;
                currentlyPlaying = null;
            }
        });