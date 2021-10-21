pragma solidity 0.5.3; // Solidity version 0.5.3, pragma used to enable certain compiler features or checks

contract HelloWorld // defining the contract
{
    string greeting; // defining the state string variable 'greeting'

    constructor() // constructor function, optional, executed once upon deployment and cannot be called again
    public
    {
        greeting = "Hello, World.";
    }

    function printGreeting() // defining a function
    public // this function is callable by anyone 
    view // dictates that this function promises to not modify the state
    returns (string memory) // function returns a string variable from memory
    {
        return greeting;
    }

    function setGreeting(string memory _greeting)
    public 
    // notice that this function contains no "view" -- it modifies the state
    {
        greeting = _greeting;
    }
}
