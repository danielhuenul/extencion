export default `
describe('NAME_COMPONENT [module]', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    it('Instance module', async () => {
        const myModule = require("../../../components/NAME_COMPONENT/NAME_COMPONENT.module");
        await expect(myModule()).resolves.toBeTruthy();
    });
});
`