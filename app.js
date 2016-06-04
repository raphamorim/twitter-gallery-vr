(function() {
    /*
    var MISS = 4;
    var images = [];

    var reqUrl = 'http://protected-atoll-14662.herokuapp.com/CEJSVR';
    */

    // var interval = setInterval(check, 3500);

    // clearInterval(interval);
    // document.querySelector('a-node').load();
    document.querySelector('.container').style.display = 'none';

    /*
    function start(list) {
        list.forEach(function(item) {
            var ent = item.entities;
            if (ent && ent.media) {
                if (ent.media.length && ent.media[0].type == 'photo') {
                    if (images.indexOf(ent.media[0].media_url) == -1) {
                        images.push(ent.media[0].media_url);
                        document.querySelector('#u' + images.length).setAttribute('src', images[images.length - 1]);
                    }
                }
            }

            if (MISS === images.length) {
                clearInterval(interval);
                document.querySelector('a-node').load();
                document.querySelector('.container').style.display = 'none';
            }
        });
    }

    function check() {
        // console.warn('Missing', MISS - images.length);
        var request = new XMLHttpRequest();
        request.open('GET', reqUrl, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                start(data);
            } else {
                console.log('We reached our target server, but it returned an error');
            }
        };

        request.onerror = function() {
            console.log('There was a connection error of some sort');
        };

        request.send();
    }

    */
})();