const GreeterContract = artifacts.require('Greeter');
contract(
    'Greeter',
    () => {
        it('Contract has been deployed!', async function() {
            const greeter = await GreeterContract.deployed();
            assert(greeter, "contract wasn't deployed");
        });
    },
    describe('greet()', () => {
        it("returns 'Good Evening'", async() => {
            const greeter = await GreeterContract.deployed();
            const expected = "'Good Evening'";
            const actual = await greeter.greet();
            assert.equal(actual, expected, "Greeting Should be 'Good Evening'");
        });
    })
);