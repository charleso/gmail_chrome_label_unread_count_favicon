console.log('Running OWA Extension');


function init_update_owa_chrome_tab() {
    var first_run = false;

    if (first_run) {
        update_owa_chrome_tab();
        first_run = true;
    }
    setInterval(update_owa_chrome_tab, 10000);
}

function update_owa_chrome_tab() {
    var url = "EMAIL_DOMAIN_NAME",
        icon_url = "",
        domain = window.location.href,
        inbox_link = $('._n_66'),
        inbox_count = $('._n_66').text();

    console.log(window.location);
    console.log(inbox_link, inbox_count);
    console.log(inbox_link.text());
    console.log(inbox_link.val());

    $(document).prop('title', 'UA Mail - ' + inbox_count) ;
    $('link[rel="shortcut icon"]').attr('href', 'URL_TO_IMAGE');

}

init_update_owa_chrome_tab();