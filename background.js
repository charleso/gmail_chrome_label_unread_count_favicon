function init_update_gmail_chrome_tab() {
  if (window.location.host == "mail.google.com" && window.location.pathname.startsWith('/mail/')) {
    update_gmail_chrome_tab();
    setInterval(update_gmail_chrome_tab, 5000);
  }
}

function update_gmail_chrome_tab() {
  var hash = window.location.hash;
  if (hash.startsWith("#label/")) {
    var label = hash.replace("#label/", "")
    var count = $("[data-tooltip='" + label + "'] .bsU").text();
    count = count.length == 0 ? 0 : count;
    var icon_url = "https://ssl.gstatic.com/ui/v1/icons/mail/images/2/unreadcountfavicon/" + count + "_2x.png";
    $(document).prop('title', 'Inbox - ' + count) ;
    $('link[rel="icon"]').attr('href', icon_url);
  }
}

init_update_gmail_chrome_tab();
