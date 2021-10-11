require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remain essay inner problem obscure gaze'; 
let testAccounts = [
"0x8325a75217d677d749083d48aa7681a5374e6f757ca942ccd0a895be77b3dd35",
"0x10df10adb8521e1c0060bebf4dcba4b67da497b7f7a79f005d6365be205c4ec6",
"0xea82b276aff90a3ad2fcd5156dcee4560d4b7830bb4ed9096110812eb3d43cd5",
"0x14524824d01527376c0b13b22b3d80618b89cea7985c008e2626a67a6a1186f5",
"0x0c92390d8653b522cc67dc509167c63fc549d619f83849c9311819ea4acf12e6",
"0xfb62533b4963ab2fc0ebcb1c548deb1584b69cc5ce189a637f98de6f3f02b0df",
"0x16487be0ff7c1dbe24fb6ae4e5c5d58f284b661679f9a27ea8a8c57badb7cb3f",
"0x5863366ad0ae2eac7191e7077fdc6fd72054433a94d6e4d0dca4cf6cd6412f6e",
"0x0e38368757c29ddad7ae484edad1f74e4f702d69feef3f7469b80c9161de6f1c",
"0x50a4586f2d80e3b89f9cc551e523d6b5e814d7b4c731e2f71e968c22c6f469e6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

