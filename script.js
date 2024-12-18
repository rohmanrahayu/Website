const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
});

function updateTime() {
    const timeElements = document.querySelectorAll('.time'); 

    console.log("Updating time...");
    
    timeElements.forEach(element => {
        const publishedTime = new Date(element.getAttribute('data-time')); 
        const currentTime = new Date(); 

        const diff = currentTime - publishedTime; 
        console.log('Time Difference (ms):', diff);

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        console.log('Seconds:', seconds);
        console.log('Minutes:', minutes);
        console.log('Hours:', hours);
        console.log('Days:', days);

        let timeText = ""; 
        
        if (days > 0) {
            timeText = days + " hari yang lalu";
        } else if (hours > 0) {
            timeText = hours + " jam yang lalu";
        } else if (minutes > 0) {
            timeText = minutes + " menit yang lalu";
        } else {
            timeText = seconds + " detik yang lalu";
        }

        element.textContent = timeText;
    });
}

setInterval(updateTime, 1000);

(function(){
    emailjs.init("abdulrohmanrahayu@gmail.com"); 

    document.getElementById("email-form").addEventListener("submit", function(event){
        event.preventDefault();
        
        emailjs.sendForm("service_ouy4o0w", "template_nlomtiv", this)
            .then(function(response){
                alert("Pesan berhasil dikirim!");
            }, function(error){
                alert("Gagal mengirim pesan: " + error.text);
            });
    });
})();







