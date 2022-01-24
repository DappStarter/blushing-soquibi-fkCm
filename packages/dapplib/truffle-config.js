require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remind hospital imitate prize flat square'; 
let testAccounts = [
"0x5c2a598eeb0f5e7ff134a11351076719f0dd2d18c0a7c67d3e9de217ee295b29",
"0x197162d5c226cef191ebb3a85368b46b8720cf1396e3b568654658daae769154",
"0x9b8f33c35a53e17aa4ee14a5fa7ff450fd705f56288f2ee6431a285ec9977808",
"0xb69402c84bddf1c18318d7e233245f1760d2b820565e21c1e3406c1f4c51deaf",
"0xe167f5ac5f82b1ae6060695bf3a428005c591183fd33f74fd1489e3da8c08f0f",
"0x8371ff83e71f46dac31374f6f930e1543b77b37a7941e62f5361fc1d80ef1480",
"0x21b9bdac70f69f5ee59311de3336530d7cce56a5a6504cc89a92b2898da4fba2",
"0x99b578ffcb0acac81d7e847ab9e8f29327b629e319ab85afa4c8929995fc3ecb",
"0x2b1b9dfe3d0a3e56eb4678e78fe79649959cdf2fde9eb92cf2f64d70335b8f8c",
"0x2c46fbbacab25bd6985cc9e9775b5a1b7779a1f25b0eb3271686a5ebeb607e87"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


