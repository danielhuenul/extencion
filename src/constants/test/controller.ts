export default `
describe('NAME_COMPONENT [controller]', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    it('Instance controller', async () => {
        const myController = require("../../../components/NAME_COMPONENT/NAME_COMPONENT.controller");
        await expect(myController()).resolves.toBeTruthy();
    });
});
`