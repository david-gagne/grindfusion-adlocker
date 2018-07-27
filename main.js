window.onload = () => {
    if (document.querySelector('.modal.is-active') && document.querySelector('.modal-background')) {
        let modal = document.querySelector('.modal.is-active'),
            modalBackground = document.querySelector('.modal-background');

        modalBackground.style.backgroundColor = "rgba(0, 0, 0, 0)";

        setTimeout(() => {
            modal.classList.remove('is-active');
        }, 1000);
    }

    if (document.querySelector('.on-about-page')) {
        let footerTabs = document.querySelector('nav.tabs'),
            doubleAngle = document.querySelector('.double-angle'),
            spacers = document.querySelectorAll('.bottom-spacer');

        setInterval(function () {
            if (window.scrollY > 155) {
                footerTabs.classList.add('is-hidden');
                doubleAngle.classList.remove('is-hidden');
                spacers[0].style.width = "0";
            }

            if (window.scrollY < 155) {
                footerTabs.classList.remove('is-hidden');
                doubleAngle.classList.add('is-hidden');
                spacers[0].style.width = "125px";
            }

            if (window.scrollY > 670) {
                spacers[1].style.width = "125px";
            }

            if (window.scrollY < 670 || window.scrollY > 1400) {
                spacers[1].style.width = "0";
            }

            if (window.scrollY > 1480) {
                spacers[2].style.width = "125px";
            }

            if (window.scrollY < 1480) {
                spacers[2].style.width = "0";
            }

            if (window.scrollY > 2730) {
                spacers[3].style.width = "125px";
            }

            if (window.scrollY < 2730) {
                spacers[3].style.width = "0";
            }
        })
    }
    if (document.querySelector('.on-contact-page')) {
        let footerTabs = document.querySelector('nav.tabs'),
            doubleAngle = document.querySelector('.double-angle'),
            spacers = document.querySelectorAll('.bottom-spacer');

        setInterval(function () {
            if (window.scrollY > 3) {
                footerTabs.classList.add('is-hidden');
                doubleAngle.classList.remove('is-hidden');
                spacers[0].style.width = "0";
            }

            if (window.scrollY < 3) {
                footerTabs.classList.remove('is-hidden');
                doubleAngle.classList.add('is-hidden');
                spacers[0].style.width = "125px";
            }

            if (window.scrollY > 543) {
                spacers[1].style.width = "125px";
            }

            if (window.scrollY < 543) {
                spacers[1].style.width = "0";
            }
        })
    }

    if (document.querySelector('.on-blog-page')) {
        let footerTabs = document.querySelector('nav.tabs'),
            doubleAngle = document.querySelector('.double-angle'),
            spacers = document.querySelectorAll('.bottom-spacer');

        doubleAngle.style.visibility = "hidden";

        // POST form data to zapier on submit
        $('#blog_signup').submit(function (e) {
            e.preventDefault();
            $.ajax({
                url: 'https://hooks.zapier.com/hooks/catch/3360223/g6fg9d/',
                type: 'post',
                data: $('#blog_signup').serialize(),
                success: function () {
                    // Redirect to another success page
                    window.location = "https://grindfusion.com/signup-success";
                }
            });
        });
    }
}