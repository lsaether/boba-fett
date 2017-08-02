const fs = require('fs')
// const update = require('./updater.js')

/// Load API w/ key
const apiKey = fs.readFileSync('./apiKey.txt').toString()
const api = require('etherscan-api').init(apiKey)

/// @return Promise of transaction data in JSON format
const fetchTxList = (addr, startBlock) => {
    let initTxList = api.account.txlist(
                                    addr,
                                    startBlock,
                                    'latest',
                                    'desc'
    )
    return initTxList
    // initTxList.then((data) => console.log(data))
}

/// @param timestamp Linux timestamp.
/// @return String of formatted time.
const formatTime = (linux_timestamp) => {
    let timestamp = Number(linux_timestamp * 1e3)
    let formattedTime = new Date(timestamp).toUTCString()//.toISOString()//.slice(-13, -5)
    return formattedTime
}

fetchTxList('0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae', 1)
.then((data) => {
    if(data.status != 1){ throw new Error('Error fetching transaction data.') }

    let txCount = data.result.length
    console.log(`Transaction Count: ${txCount}`)

    // for (let i =0; i < txCount; ++i) {
    //     console.log(data.result[i].from)
    // }
    for (let i =0; i < txCount; ++i) {
        console.log(formatTime(data.result[i].timeStamp))
    }
})
.catch((err) => { console.log(err) })


// { blockNumber: '65204',
//        timeStamp: '1439232889',
//        hash: '0x98beb27135aa0a25650557005ad962919d6a278c4b3dde7f4f6a3a1e65aa746c',
//        nonce: '0',
//        blockHash: '0x373d339e45a701447367d7b9c7cef84aab79c2b2714271b908cda0ab3ad0849b',
//        transactionIndex: '0',
//        from: '0x3fb1cd2cd96c6d5c0b5eb3322d807b34482481d4',
//        to: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
//        value: '0',
//        gas: '122261',
//        gasPrice: '50000000000',
//        isError: '0',
//        input: '0xf00d4b5d000000000000000000000000036c8cecce8d8bbf0831d840d7f29c9e3ddefa63000000000000000000000000c5a96db085dda36ffbe390f455315d30d6d3dc52',
//        contractAddress: '',
//        cumulativeGasUsed: '122207',
//        gasUsed: '122207',
//        confirmations: '4043597' }