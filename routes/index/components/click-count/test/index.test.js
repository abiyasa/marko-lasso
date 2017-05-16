var expect = require('chai').expect;

describe('when rendered', function () {
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
});

test('should increment counter when incrementor button is clicked', function (context) {
    var renderResult = context.render({});
    var component = renderResult.component;

    var button = component.getEl('increment-button');
    button.click();

    component.update();

    var counter = component.getEl('counter');
    expect(counter.innerText).to.equal('1');
});
