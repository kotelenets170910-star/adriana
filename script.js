const hugBtn = document.getElementById('hugBtn');
const hugMessage = document.getElementById('hugMessage');

const messages = [
    "🤗 Крепкая виртуальная обнимашка отправлена Адриане!",
    "💖 Расстояние скоро исчезнет, а любовь останется!",
    "✨ Мечтаю о дне, когда смогу обнять тебя вживую!",
    "💌 Ты самое лучшее, что случилось со мной в интернете!",
    "🌹 Скоро мы с тобой встретимся, я обещаю!"
];

hugBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    hugMessage.textContent = messages[randomIndex];
    
    hugMessage.style.opacity = '0';
    setTimeout(() => {
        hugMessage.style.transition = 'opacity 0.4s ease';
        hugMessage.style.opacity = '1';
    }, 50);
});
