import { removeSpecialCharacter, replaceMultipleSpaces } from '../src/utils/string'
import { breakPoints } from '../src/data'





describe('it should equal variables', () => {

    const variables = require('sass-variables-loader!../sass/variables.scss')

    it('check variables', () => {
        expect(parseInt(variables.sm)).toEqual(breakPoints.sm);
        expect(parseInt(variables.md)).toEqual(breakPoints.md);
        expect(parseInt(variables.lg)).toEqual(breakPoints.lg);
        expect(parseInt(variables.xl)).toEqual(breakPoints.xl);
        expect(parseInt(variables.xxl)).toEqual(breakPoints.xxl);
        expect(parseInt(variables.fhd)).toEqual(breakPoints.fhd);
    });
});


describe('test all', () => {
    it('string test', () => {
        expect(removeSpecialCharacter('sumin chae')).toEqual('sumin chae');
        expect(removeSpecialCharacter('sumin~!@#$%^&*()-=_+<>?,./[]{}chae')).toEqual('suminchae');
        expect(replaceMultipleSpaces('su  min    ch  ae')).toEqual('su min ch ae');
    })
});