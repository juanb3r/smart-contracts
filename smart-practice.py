from web3 import Web3


print(Web3.toWei(1, "ether"))

print(Web3.fromWei(500000000, 'gwei'))

# * Conectando a nuestro entorno local con ganache-cli
w3 = Web3(Web3.HTTPProvider('http://127.0.0.1:8545'))

# * Ambiente de prueba de w3
# todo w3 = Web3(Web3.EthereumTesterProvider())

w3.isConnected()

# * Verificamos la lista de cuentas

w3.eth.accounts

# * Para conocer la cantidad en cada cuenta (0 - 9)

w3.eth.getBalance(w3.eth.accounts[0])

# * Convertimos a ether

w3.fromWei(w3.eth.getBalance(w3.eth.accounts[0]), 'ether')

# * Damos una ojeada a la blockchain local

w3.eth.getBlock('latest')

# * Realizamos una transacción

tx_hash = w3.eth.sendTransaction({
   'from': w3.eth.accounts[0],
   'to': w3.eth.accounts[1],
   'value': w3.toWei(3, 'ether')
})

# *  Se espera a que la transacción sea minada

w3.eth.waitForTransactionReceipt(tx_hash)

# * Se verifica si fue satisfactoria la transacción

w3.eth.getTransaction(tx_hash)

# * Crear una cuenta en la web3

acct = w3.eth.account.create()

# * Verificamos la dirección

acct.address

# * y la llave privada

acct.key

# * Verificamos la cantidad en la cuenta
# ? Usamos la acct y su dirección ya que a través de la direccion
# ? se accede a la información de la cuenta

w3.eth.get_balance(acct.address)

# * Usamos una de las cuentas existente

acct_one = w3.eth.accounts[0]

# *  Realizamos una transferencia

tx_hash = w3.eth.sendTransaction({
   'from': acct_one,
   'to': acct.address,
   'value': w3.toWei(15, 'ether')
})

# * Se verifica el nuevo saldo en la cuenta

w3.eth.get_balance(acct.address)

# * Crear una transacción manual

tx = {
        'to': acct_one,
        'value': 10000000,
        'gas': 21000,
        'gasPrice': 1,  # price only possible in eth-tester
        'nonce': 0
        }

# * Se firma la transacción con la llave

signed = w3.eth.account.sign_transaction(tx, acct.key)

# * Se envía la transacción cruda (raw)

tx_hash = w3.eth.sendRawTransaction(signed.rawTransaction)

# * SMART CONTRACTS

# * Para hacer una prueba ejecutamos el archivo hello-world.vy 
# todo $ vyper hello-world.vy

# * Obtenemos el binario y lo usamos en nuestra variable bytecode

bytecode = "600d610140527f48656c6c6f2c20576f726c642e0000000000000000000000000000000000000061016052610140806000602082510161012060006002818352015b8261012051602002111561005457610075565b61012051602002850151610120518501558151600101808352811415610041575b50505050505061028056600436101561000d576101f5565b60046000601c37600051346101fb576395dd3f2c8114156100c9576101408060208082528083018060008082602082540161012060006002818352015b8261012051602002111561005d5761007e565b6101205185015461012051602002850152815160010180835281141561004a575b5050505050508051806020830101818260206001820306601f8201039050033682375050805160200160206001820306601f8201039050905090508101905080905090509050610140f35b63a413686281141561014657600435600401601e8135116101fb57808035602001808261014037505050610140806000602082510161012060006002818352015b8261012051602002111561011d5761013e565b6101205160200285015161012051850155815160010180835281141561010a575b505050505050005b63ef690cc08114156101f3576101408060208082528083018060008082602082540161012060006002818352015b82610120516020021115610187576101a8565b61012051850154610120516020028501528151600101808352811415610174575b5050505050508051806020830101818260206001820306601f8201039050033682375050805160200160206001820306601f8201039050905090508101905080905090509050610140f35b505b60006000fd5b600080fd5b61008061028003610080600039610080610280036000f3"

# * Creamos una nueva transacción

tx = {
    "data": bytecode,
    "value": 0,
    "gas": 1500000,
    "gasPrice": 1,
    "nonce": 0
}

# * Luego se debe obtener el abi de nuestro archivo y se ejecuta el
# * siguiente comando

#? $ vyper -f abi hello-world.vy

# * creamos nuestra abi

abi = [{
    "stateMutability": "nonpayable",
    "type": "constructor",
    "inputs": [],
    "outputs": []
}, {
    "stateMutability": "view",
    "type": "function",
    "name": "printGreeting",
    "inputs": [],
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "gas": 10616
}, {
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "setGreeting",
    "inputs": [{
        "name": "_greeting",
        "type": "string"
    }],
    "outputs": [],
    "gas": 74167
}, {
    "stateMutability": "view",
    "type": "function",
    "name": "greeting",
    "inputs": [],
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "gas": 10676
}]

# * interactuando con un contrato existente

myContract = w3.eth.contract(address=address, abi=abi)
twentyone = myContract.functions.multiply7(3).call()

# * Desplegando un nuevo contrato:

example = w3.eth.contract(address=acct_one, abi=abi, bytecode=bytecode)
tx_hash = example.functions.printGreeting.call()