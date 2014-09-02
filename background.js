function init_update_owa_chrome_tab() {
    var first_run = false,
        domain = window.location.href,
        owa_location = 'owa/#path=/mail';

    if (domain.indexOf(owa_location) > -1) {
        if (first_run) {
            update_owa_chrome_tab();
            first_run = true;
        }
        setInterval(update_owa_chrome_tab, 5000);
    }
}

function update_owa_chrome_tab() {
    var url = "EMAIL_DOMAIN_NAME",
        icon_url = "https://raw.githubusercontent.com/jhanifen/owa_chrome_tab_notification/master/icons/icon_",
        inbox_count = $('._n_66').text();

    $(document).prop('title', 'UA Mail - ' + inbox_count) ;

    if (!inbox_count) {
        icon_url = icon_url + '0.png'
    } else {
        if (inbox_count > 9) {
            icon_url = icon_url + 'plus.png';
        } else {
            icon_url = icon_url + inbox_count + '.png'
        }
    }

    $('link[rel="shortcut icon"]').attr('href', icon_url);
}

init_update_owa_chrome_tab();