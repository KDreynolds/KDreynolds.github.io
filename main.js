document.addEventListener('DOMContentLoaded', function() {
    var enterButton = document.getElementById('enterButton');
    var buttonContainer = document.getElementById('enterButtonContainer');
    var welcomeText = document.getElementById('welcomeText');
    var socialIcons = document.getElementById('socialIcons');
    var aboutMeLink = document.getElementById('aboutMeLink');
    var aboutMePopup = document.getElementById('aboutMePopup');
    var projectsLink = document.getElementById('projectsLink');
    var projectsPopup = document.getElementById('projectsPopup');
    var contactMeButton = document.getElementById('contactMeLink');
    var contactMePopup = document.getElementById('contactMePopup');
    var skillsLink = document.getElementById('skillsLink');
    var skillsPopup = document.getElementById('skillsPopup');
    var socialIconsSmall = document.getElementById('socialIconsSmall');

    enterButton.addEventListener('click', function(e) {
        e.preventDefault();
        buttonContainer.style.display = 'none';
        welcomeText.classList.add('animate__animated', 'animate__fadeInDown');
        welcomeText.style.display = 'block';
        socialIconsSmall.style.display = 'flex';
        socialIconsSmall.classList.add('animate__animated', 'animate__fadeInUp');
        setTimeout(function() {
            welcomeText.style.opacity = '1';
        }, 100);
        setTimeout(function() {
            socialIcons.style.display = 'block';
            socialIcons.style.visibility = 'visible';
            socialIcons.style.opacity = '1';
            socialIcons.classList.add('animate__animated', 'animate__fadeInUp');
        }, 600);
    });

    aboutMeLink.addEventListener('click', function(e) {
        e.preventDefault();
        aboutMePopup.style.display = 'flex';
    });

    skillsLink.addEventListener('click', function(e) {
        e.preventDefault();
        skillsPopup.style.display = 'flex';
    });

    projectsLink.addEventListener('click', function(e) {
        e.preventDefault();
        projectsPopup.style.display = 'flex';
    });

    contactMeButton.addEventListener('click', function(e) {
        e.preventDefault();
        contactMePopup.style.display = 'flex';
    });

    // Close button event listeners for all popups
    document.querySelectorAll('.popup-container .close-button').forEach(function(closeButton) {
        closeButton.addEventListener('click', function() {
            this.closest('.popup-container').style.display = 'none';
        });
    });
});