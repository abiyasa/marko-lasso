var expect = require('chai').expect;

test('should render count', function (context) {
    var renderResult = context.render({});

    var count = renderResult.$('.count').text();
    expect(count).to.equal('0');
});

test('should render incrementor button', function (context) {
    var renderResult = context.render({});

    var $button = renderResult.$('.example-button');
    expect($button).to.have.length(1);
});
