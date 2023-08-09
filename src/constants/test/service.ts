export default `
describe('NAME_COMPONENT [service]', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    it('Instance service', async () => {
        jest.doMock("axios", () => ({
            request: () => Promise.resolve({ data: {} }) 
        }));

        const myService = require("../../../components/NAME_COMPONENT/NAME_COMPONENT.service");
        await expect(myService()).resolves.toBeTruthy();
    });

    
    it('Instance service with error', async () => {
        jest.doMock("axios", () => ({
            request: () => Promise.reject({ data: {} }) 
        }));

        const myService = require("../../../components/NAME_COMPONENT/NAME_COMPONENT.service");
        await expect(myService()).rejects.toBeTruthy();;
    });
});
`