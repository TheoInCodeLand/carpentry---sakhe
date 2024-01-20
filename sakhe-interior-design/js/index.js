const images = [
    'url(' + './assets/images/background/hero-bg-1.jpg' + ')',
    'url(' + './assets/images/background/hero-bg-2.jpg' + ')',
    'url(' + './assets/images/background/hero-bg-3.jpg' + ')',
    ];
    const images_2 = [
    'url(' + './assets/images/background/Interior-Design-1.jpg' + ')',
    'url(' + './assets/images/background/Interior-Design-2.jpg' + ')',
    'url(' + './assets/images/background/Interior-Design-3.jpg' + ')',
    'url(' + './assets/images/background/Interior-Design-4.png' + ')',
    'url(' + './assets/images/background/Interior-Design-5.jpeg' + ')',
    ];

    const images_3 = [
    'url(' + './assets/images/background/Interior-Design-1.jpg' + ')',
    'url(' + './assets/images/background/Interior-Design-2.jpg' + ')',
    'url(' + './assets/images/background/Interior-Design-3.jpg' + ')',
    'url(' + './assets/images/background/Interior-Design-4.png' + ')',
    'url(' + './assets/images/background/Interior-Design-5.jpeg' + ')',
    ];
    // Function to change background image every 3 seconds
    let currentIndex = 0;
    let currentIndex_2 = 0;

    function changeBackground() {
    document.getElementById('hero_section').style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
    }

    function changeBackground_2() {
    document.getElementById('top_content').style.backgroundImage = images_2[currentIndex_2];
    currentIndex_2 = (currentIndex_2 + 1) % images_2.length;

    document.getElementById('about_').style.backgroundImage = images_3[currentIndex_2];
    currentIndex_2 = (currentIndex_2 + 1) % images_3.length;
    }

    changeBackground();
    changeBackground_2();

    // Set interval to change background every 3 seconds
    setInterval(changeBackground, 10000);
    setInterval(changeBackground_2, 3000);