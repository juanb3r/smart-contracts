var bountiesOuput=
{"contracts":{"Bounties.sol:Bounties":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"bounty_id","type":"uint256"},{"indexed":false,"internalType":"address","name":"issuer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"data","type":"string"}],"name":"BountyIssued","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bounties","outputs":[{"internalType":"address","name":"issuer","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"string","name":"data","type":"string"},{"internalType":"enum Bounties.BountyStatus","name":"status","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_data","type":"string"},{"internalType":"uint64","name":"_deadline","type":"uint64"}],"name":"issueBounty","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"}],"bin":"608060405234801561001057600080fd5b5061095d806100206000396000f3fe6080604052600436106100295760003560e01c8063a37262531461002e578063dc2f87441461005e575b600080fd5b61004860048036038101906100439190610594565b61009f565b6040516100559190610609565b60405180910390f35b34801561006a57600080fd5b5061008560048036038101906100809190610650565b61025c565b6040516100969594939291906107bd565b60405180910390f35b60008034116100ad57600080fd5b8167ffffffffffffffff164281116100c457600080fd5b60006040518060a001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018567ffffffffffffffff1681526020018681526020016000600281111561011757610116610746565b5b815260200134815250908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020190805190602001906101b6929190610357565b5060608201518160030160006101000a81548160ff021916908360028111156101e2576101e1610746565b5b02179055506080820151816004015550507fba1576d8891bfe57a45ac4b986d4a4aa912c62f44771d4eec8ab2ce06e3be5b760016000805490506102269190610846565b333487604051610239949392919061087a565b60405180910390a160016000805490506102539190610846565b91505092915050565b6000818154811061026c57600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020180546102bb906108f5565b80601f01602080910402602001604051908101604052809291908181526020018280546102e7906108f5565b80156103345780601f1061030957610100808354040283529160200191610334565b820191906000526020600020905b81548152906001019060200180831161031757829003601f168201915b5050505050908060030160009054906101000a900460ff16908060040154905085565b828054610363906108f5565b90600052602060002090601f01602090048101928261038557600085556103cc565b82601f1061039e57805160ff19168380011785556103cc565b828001600101855582156103cc579182015b828111156103cb5782518255916020019190600101906103b0565b5b5090506103d991906103dd565b5090565b5b808211156103f65760008160009055506001016103de565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61046182610418565b810181811067ffffffffffffffff821117156104805761047f610429565b5b80604052505050565b60006104936103fa565b905061049f8282610458565b919050565b600067ffffffffffffffff8211156104bf576104be610429565b5b6104c882610418565b9050602081019050919050565b82818337600083830152505050565b60006104f76104f2846104a4565b610489565b90508281526020810184848401111561051357610512610413565b5b61051e8482856104d5565b509392505050565b600082601f83011261053b5761053a61040e565b5b813561054b8482602086016104e4565b91505092915050565b600067ffffffffffffffff82169050919050565b61057181610554565b811461057c57600080fd5b50565b60008135905061058e81610568565b92915050565b600080604083850312156105ab576105aa610404565b5b600083013567ffffffffffffffff8111156105c9576105c8610409565b5b6105d585828601610526565b92505060206105e68582860161057f565b9150509250929050565b6000819050919050565b610603816105f0565b82525050565b600060208201905061061e60008301846105fa565b92915050565b61062d816105f0565b811461063857600080fd5b50565b60008135905061064a81610624565b92915050565b60006020828403121561066657610665610404565b5b60006106748482850161063b565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106a88261067d565b9050919050565b6106b88161069d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156106f85780820151818401526020810190506106dd565b83811115610707576000848401525b50505050565b6000610718826106be565b61072281856106c9565b93506107328185602086016106da565b61073b81610418565b840191505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6003811061078657610785610746565b5b50565b600081905061079782610775565b919050565b60006107a782610789565b9050919050565b6107b78161079c565b82525050565b600060a0820190506107d260008301886106af565b6107df60208301876105fa565b81810360408301526107f1818661070d565b905061080060608301856107ae565b61080d60808301846105fa565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610851826105f0565b915061085c836105f0565b92508282101561086f5761086e610817565b5b828203905092915050565b600060808201905061088f60008301876105fa565b61089c60208301866106af565b6108a960408301856105fa565b81810360608301526108bb818461070d565b905095945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061090d57607f821691505b60208210811415610921576109206108c6565b5b5091905056fea2646970667358221220429e14a92c38c90d38adbd5c166de140c3a9b4a5008ff9435cfe25994069318e64736f6c63430008090033"}},"version":"0.8.9+commit.e5eed63a.Darwin.appleclang"}