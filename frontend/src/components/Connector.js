import Web3 from 'web3';

// Initialize Web3 with the Ethereum provider (use your own provider URL or Infura/Alchemy)
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Replace the contractAddress and contractABI with your actual values
const contractAddress = '0xDdd66E1590539F06f7190B0823fA48cD7CFdfBf6';
const contractABI = [...];

// Create a new contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);
 
// Example function to call a read-only method from the smart contract
async function getContractData() {
  try {
    const result = await contract.methods.getData().call();
    console.log('Contract Data:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Example function to call a state-changing method from the smart contract
async function updateContractData(newValue) {
  try {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.updateData(newValue).send({ from: accounts[0] });
    console.log('Contract data updated successfully.');
  } catch (error) {
    console.error('Error:', error);
  }
}
