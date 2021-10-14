var hideDiv = document.getElementsByClassName('menu-container')[0].style.visibility = 'hidden'
var showingPopover = false;
function showContainer() {
    if (showingPopover == false) {
        showingPopover = true;
        var popoverBtn = document.getElementById('bton')
        var popover = new bootstrap.Popover(popoverBtn, {
            placement: 'bottom',
            html: true,
            content: function () {
                return document.getElementById('main-menu');
            }

        })
        var showDiv = document.getElementsByClassName('menu-container')[0].style.visibility = 'visible'
    }

    else {
        showingPopover = false
        var hideDiv = document.getElementsByClassName('menu-container')[0].style.visibility = 'hidden'
    }
}

