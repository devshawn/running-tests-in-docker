describe('Example tests for functions.js', function () {
    it('Normal functions', function () {
        expect(test.isTen(9)).toEqual(false);
        expect(test.isTen(10)).toEqual(true);
        expect(test.isTen(11)).toEqual(false);

        expect(test.aboveTen(9)).toEqual(false);
        expect(test.aboveTen(10)).toEqual(false);
        expect(test.aboveTen(11)).toEqual(true);
        expect(test.aboveTen(12)).toEqual(true);
    });

    it('Utilizing the DOM', function () {
        var element = document.createElement('span');

        test.setClass(element, 'foo');

        expect(element.className).toBe('foo');
    });
});
