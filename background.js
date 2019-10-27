function init_update_gmail_chrome_tab() {
  if (window.location.host == "mail.google.com" && window.location.pathname.startsWith('/mail/')) {
    update_gmail_chrome_tab();
    setInterval(update_gmail_chrome_tab, 5000);
  }
}

function update_gmail_chrome_tab() {
  var hash = window.location.hash;
  if (hash.startsWith("#label/")) {
    // eg. label/Review
    // eg. label/Review/FMfcgxwDrtxzBQSQRSgfMtQMftxhwchQ
    var label = hash.split('/')[1];
    var count = $("[data-tooltip='" + label + "'] .bsU").text();
    count = count.length == 0 ? 0 : (count < 20 ? count : "20+");
    var icon_url = "https://ssl.gstatic.com/ui/v1/icons/mail/images/2/unreadcountfavicon/" + count + "_2x.png";
    $(document).prop('title', 'Inbox - ' + count) ;
    $('link[rel="icon"]').attr('href', icon_url);
  }
}

init_update_gmail_chrome_tab();
