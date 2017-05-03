window.onscroll = function () {
    console.log(document.body.scrollTop)
    var st = document.body.scrollTop;
    var oNav = document.getElementById('head_nav');
    if (st > 80) {
        oNav.style.position = 'fixed';
        oNav.style.top = '0';
        oNav.style.left = '0';
        oNav.style.zIndex = 1;

    } else {
        oNav.style.position = 'fixed';
        oNav.style.top = '-100px';
        oNav.style.left = '0';
        oNav.style.zIndex = -1;
    }
}





