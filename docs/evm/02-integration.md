# EVM Integration

## Networks
EVM support is currently available on the following findora networks:

Network Type | Network Name | Chain ID | RPC URL | Currency Symbol (optional)
--- | --- | --- | --- | ---
Devnet | Findora Devnet | 523 | https://dev-evm.dev.findora.org:8545 | FRA


### 1. Setup Ethereum Account
#### 1. Install [Metamask](https://metamask.io/) and create an account. 

#### 2. (Optional) Setup account
> If you already have an Ethereum address, skip step #2 and step #3
> If you need to use the command `fn` in any of the steps, please refer to the section ["Setup Findora Account"](#setup-findora-account) below. 
> Note: The `fn` generated account is only used for testing (unsafe),
> recommend to use [Metamask](https://metamask.io/) or other ethereum wallet.
> 

```
fn gen-eth-key  
```
output:
```
Mnemonic: lumber friend abstract swarm rifle inner syrup physical farm van urban cube
PrivateKey: e0713a27b18115da437e4f981eb460be2a6bc0e88cd0dd24ed7f7d43ce6af876
Address: 0xf5224110db945b54466d275cd224fed2dd110e67
```

### 3. (Optional) Import new account to metamask
> If you already have an Ethereum address, skip this step.

![Metamask](/img/evm/metamask_1.png)

### 4. Connect to Findora Devnet

![Metamask](/img/evm/metamask_4.png)

![Metamask](/img/evm/metamask_2.png)

![Metamask](/img/evm/metamask_3.png)

### 5. Deposit FRA to your Ethereum account

The most common and fastest way to deposit FRA to your Ethereum address is via our Discord bot  `FindoraBot`. 

#### 1. Request funds from [Discord faucet](https://discord.gg/8bdb8KHuaB)

![Discord](/img/evm/discord_1.png)


You should send a private message to the `FindoraBot` in the following format. 

```
!evm 0x9c0700E390f0E9c98b894bF4Fc4d5c1Ac3e02D6B
```

where 
0x9c0700E390f0E9c98b894bF4Fc4d5c1Ac3e02D6B should be replaced with your own Ethereum address. 
> Note that there must be a seperator (such as an empty space) between `!evm` and the address. 

![Discord](/img/evm/direct_evm_faucet.png)

#### 2. If you had FRA in your `Findora Address` starting with `fra`, you could also do an internal transfer with the following steps to deposit FRA to your Ethereum address.


1. Deposit FRA to ethereum address
> FRA decimals is 6.
```
fn contract-deposit --address 0xf5224110db945b54466d275cd224fed2dd110e67 --amount 100000000
```
2. Check your Ethereum account balance.
```
fn account -a 0xf5224110db945b54466d275cd224fed2dd110e67 
```
output:
```
AccountId: fra1753yzyxmj3d4g3ndyawdyf876tw3zrn8qqqqqqqqqqqqqqqqqqqq5me93z
SmartAccount {
    nonce: 0,
    balance: 100000000,
    reserved: 0,
    assets: {},
}
```
You can also check on metamask. Now you can use all the functions of metamask normally.

3. Withdraw FRA to findora account (optional)
```
fn contract-withdraw --amount 10000000 --eth-key "lumber friend abstract swarm rifle inner syrup physical farm van urban cube"
```

## Remix 

### Deploy and run a sample smart contract
Use this  [document](06-integration-remix-2-EN.md). for a step by step process



## Truffle

### Deploy ERC20 Contracts
Here is an example: https://github.com/tylerztl/findora-erc20-demo


## Setup Findora Account

#### 1. Download [fn (command tools)](https://drive.google.com/drive/u/1/folders/1zXxdu3ZzhzWZZ5vYDg76ApnqfyJOP9Dx)
- [Linux](https://drive.google.com/drive/u/1/folders/1UMO3s5e4uWLSuvb16UJVdgIx9OgQ5g3p)
- [MacOS](https://drive.google.com/drive/u/1/folders/1eBxEsw5ClvqAprcixRDCYhj18qeKEDf7)
```
chmod +x fn
```
#### 2. Create a new account (ed25519) on the Findora
> Note: The `fn` generated account is only used for testing (unsafe), 
> recommend to use [Findora Official Wallet](https://wallet.findora.org/) .
> 
> If you already have a Findora account, skip this step.
```
fn genkey  
```
output:
```
Wallet Address: fra1vs8j62uxd9v5w6qa6h4lgxx4gdq20p2x8g907rygupwdkmh829fqr9aud8
Mnemonic: front fan poverty crawl party electric slim spin pair wool media page over box sample slush lab copy decorate stem recycle search essay delay
Key: {
  "pub_key": "ZA8tK4ZpWUdoHdXr9BjVQ0CnhUY6Cv8MiOBc227nUVI=",
  "sec_key": "n0g9kHcBqKR9D-jzH1ga-2tVdjn2GbylpBZ8IKej2FA="
}
```

1. Connect to remote findora node
```
fn setup -S https://dev-evm.dev.findora.org
```
2. Load your Findora account to request funds from the faucet
> Save the mnemonic phrase generated above to `mnemonic.key` file.
>
> eg: front fan poverty crawl party electric slim spin pair wool media page over box sample slush lab copy decorate stem recycle search essay delay
```
fn setup -O $PWD/mnemonic.key
```
Note: must be absolute path!

3. Query account
```
fn show -b       
```
output:
```
Server URL:
https://dev-evm.dev.findora.org

Findora Address:
fra1vk4aqtlqj78qs8qxy3cwyaesp02d5pqmvh3ve98y3cm8x3ktaeaseccwla

Findora Public Key:
ZavQL-CXjggcBiRw4ncwC9TaBBtl4syU5I42c0bL7ns=

Balance:
0 FRA units
```
You can also check on Findora official wallet.


## Compatibility
### Web3 JSON-RPC protocol

- [x] eth_protocolVersion
- [x] eth_chainId
- [x] eth_accounts
- [x] eth_getBalance
- [x] eth_sendTransaction
- [x] eth_call
- [x] eth_coinbase
- [x] eth_gasPrice
- [x] eth_blockNumber
- [x] eth_getStorageAt
- [x] eth_getBlockByHash
- [x] eth_getBlockByNumber
- [x] eth_getTransactionCount
- [x] eth_getBlockTransactionCountByHash
- [x] eth_getBlockTransactionCountByNumber
- [x] eth_getCode
- [x] eth_sendRawTransaction
- [x] eth_estimateGas
- [x] eth_getTransactionByHash
- [x] eth_getTransactionByBlockHashAndIndex
- [x] eth_getTransactionByBlockNumberAndIndex
- [x] eth_getTransactionReceipt
- [x] eth_getLogs
- [ ] eth_hashrate
- [ ] eth_syncing
- [ ] eth_mining
- [ ] eth_getUncleCountByBlockHash
- [ ] eth_getUncleCountByBlockNumber
- [ ] eth_getUncleByBlockHashAndIndex
- [ ] eth_getUncleByBlockNumberAndIndex
- [ ] eth_getWork
- [ ] eth_submitWork
- [ ] eth_submitHashrate

### Precompile contracts
Address | Name | Features
--- | --- | ---
0x1 | ECRecover | ECDSA public key recovery
0x2 | SHA256 | SHA-2 256-bit hash function
0x3 | RIPEMD160 | RIPEMD 160-bit hash function
0x4 | Identity | Identity function
0x5 | ModExp | Big integer modular exponentiation
0x6 | BN128Add | Elliptic curve addition
0x7 | BN128Mul | Elliptic curve scalar multiplication
0x8 | BN128Pair | Elliptic curve pairing check







