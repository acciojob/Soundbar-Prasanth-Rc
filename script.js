//your JS code here. If required.
let currentAudio = null;
        
        const buttons = document.querySelectorAll('.btn');
        const stopButton = document.querySelector('.stop');
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                }
                
                const soundFile = this.getAttribute('data-sound');
                currentAudio = new Audio(`sounds/${soundFile}`);
                currentAudio.play();
            });
        });
        
        stopButton.addEventListener('click', function() {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
        });