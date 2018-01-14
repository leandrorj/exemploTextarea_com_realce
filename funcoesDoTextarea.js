

$('.regex-example').highlightWithinTextarea({
    highlight: /dogs?|cats?|g(oo|ee)se/gi
});

$('.array-example').highlightWithinTextarea({
    highlight: [
        'orange',
        /ba(na)*/gi,
        [0, 5]
    ]
});

$('.class-example').highlightWithinTextarea({
    highlight: [
        {
            highlight: 'blueberry',
            className: 'blue'
        },
        {
            highlight: /<<<(.*?)>>>/gi,
            className: 'red'
        }
    ]
});

