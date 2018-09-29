var info = [
    {
        'profession': 'ethyical hacker',
        'experience': 15
    },
    {
        'profession': 'python developer',
        'experience': 9
    }
];

function getPost() {
    var output = '';
    setTimeout(function () {
        info.forEach(function (i) {
            output += '<li>' + i.profession + '</li><li>' + i.experience + '</li><br>';
        });
        document.getElementById('result1').innerHTML = output;
    }, 1000, alert('1sec is terminated...data is loaded....'));
}

function addInfo(inf) {
    return new Promise(function (resolve, reject) { 
        setTimeout(function () {
            info.push(inf);

            var error = false;
            if (!error) {
                resolve();
            } else {
                reject('something is going wrong');
            }
        }, 2000);
     });
}

addInfo({
    'profession': 'js developer',
    'experience': 10
}).then(getPost);
