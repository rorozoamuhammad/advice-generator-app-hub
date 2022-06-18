$.getJSON('https://api.adviceslip.com/advice/1', function(data) {
    data = data.slip;

    $('#contain').prepend(`
    <p>Advice #`+ data.id +`</p>
    <p>"`+ data.advice +`"</p>
    `);
});