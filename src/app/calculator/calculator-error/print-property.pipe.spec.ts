import {PrintPropertyPipe} from './print-property.pipe';

describe(PrintPropertyPipe.name, () => {
    describe('when asked to transform', () => {

        const propertyName = 'somePropertyName';
        const propertyValue = 'somePropertyValue';
        const someObject = {[propertyName]: propertyValue};

        it('should return object property', () => {
            const pipe = new PrintPropertyPipe();
            expect(pipe.transform(someObject, propertyName)).toBe(propertyValue);
        });
    });
});
