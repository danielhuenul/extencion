export default `
describe('NAME_COMPONENT [middleware]', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    it('Instance widdleware', async () => {
        const myMiddleware = require("../../../components/NAME_COMPONENT/NAME_COMPONENT.widdleware");
        await expect(myMiddleware()).resolves.toBeTruthy();;
    });
});
`