import * as ISS from '../src/index'

describe('is-server-side', () => {
    describe('::isServer', () => {
        it('is an alias of isServerSide', () => {
            expect.hasAssertions();
            expect(ISS.isServer).toBe(ISS.isServerSide);
        });
    });

    describe('::isServerSide', () => {
        it('is true when window is not undefined', () => {
            expect.hasAssertions();
            global.window = {} as Window & typeof global.globalThis;
            expect(ISS.isServerSide()).toBe(false);
            global.window = undefined as unknown as Window & typeof global.globalThis;
            expect(ISS.isServerSide()).toBe(true);
        });
    });
});
