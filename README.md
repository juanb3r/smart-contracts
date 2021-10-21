# smart-contracts
Este es un repositorio público de pruebas sobre smartcontracts haciendo uso de Solidity y Vyper.

## Compilar un archivo de solidity (.sol)

- Instalar solc en nuestro equipo (Ubuntu)
```    $ sudo add-apt-repository ppa:ethereum/ethereum```
```    $ sudo apt-get update```
```    $ sudo apt-get install solc```

- Verificar si fue instalado solc
    ```$ solc --version```

- Instalar JQ para mirar el contenido del json
    `$ sudo apt-get install jq`

- Compilar el archivo file.sol
    `$ solc --combined-json abi,bin file.sol > file.json`

- Leer tu archivo file.json
    `$ cat file.json| jq`

### Partes importantes de la compilación
- Bytecode (BIN): Son los binarios a ser desplegado en la blockchain
- ABI (Interfaz binaria de la aplicación) nos dice como será la interacción con nuestro contrato desplegado

## Compilar un archivo de vyper (.vy)

- Instalar [vyper](https://vyper.readthedocs.io/en/latest/installing-vyper.html)
    `$ pip install vyper`

- Compilar archivo file.vy
    `vyper file.vy #Devuelve el binario`