import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import img1 from './assets/1.jpeg'
import img2 from './assets/2.jpeg'
import img3 from './assets/4.jpeg'
import { useState } from 'react';
import Proposal from './proposal.js'
import Create from './components/Proposals/Create.js'
import AllProposals from './components/AllProposals.js'
import Homepage from './components/HomePage.js'
import { ethers, Signer } from 'ethers';


function App() {

  const [formDataEntries, setFormDataEntries] = useState([]);

  const handleFormDataFromChild = (newFormDataEntry) => {
    setFormDataEntries([...formDataEntries, newFormDataEntry]);
  };

  const [proposal, setProposal] = useState(false)
  const handleClick = () => {
    console.log(
      "Button clicked"
    );
    setProposal(true);
    setPro(false);
    setHome(false);
  }

  const [createPro, setPro] = useState(false)
  const handleClick2 = () => {
    console.log(
      "Button clicked"
    );
    setPro(true);
    setProposal(false);
    setHome(false);
  }

  const [home, setHome] = useState(true)
  const handleClick3 = () => {
    console.log(
      "Button clicked"
    );
    setHome(true);
    setPro(false);
    setProposal(false);
  }

  const [isWalletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isSigner, setSigner] = useState({});

  const connectWallet = async () => {
    try {
      // Check if MetaMask is available
      if (typeof window.ethereum !== 'undefined') {
        // Request access to the user's MetaMask accounts
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setSigner(signer);
        console.log(typeof signer);
        setWalletAddress(accounts[0]);
        setWalletConnected(true);
      } else {
        console.log('MetaMask not detected.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress('');
    setWalletConnected(false);
  };


  return (
  <>
<nav style={{ backgroundColor: "#4C4C6D" }} class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a style={{ backgroundColor: "#E8F6EF" }} class="navbar-brand m-2 rounded p-2" href="#">BlockFund</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a style={{ backgroundColor: "#E8F6EF" }} onClick={handleClick3} class="nav-link active m-2 rounded p-2" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a style={{ backgroundColor: "#E8F6EF" }} onClick={handleClick} class="nav-link m-2 rounded p-2" href="#">All Proposals</a>
        </li>
        <li class="nav-item">
          <a style={{ backgroundColor: "#E8F6EF" }} onClick={handleClick2} class="nav-link m-2 rounded p-2" href="#">Create Proposal</a>
        </li>
      </ul>
      <div className="ms-auto">
              {isWalletConnected ? (
                <div>
                  <span className="text-light me-2">{`Welcome, ${walletAddress}`}</span>
                </div>
              ) : (
                <button className="btn btn-outline-light me-2" onClick={connectWallet}>Connect Wallet</button>
              )}
            </div>
    </div>
  </div>
</nav>

{proposal && <AllProposals formData={formDataEntries} />}
{createPro && <Proposal isSigner={isSigner} sendFormDataToParent={handleFormDataFromChild} handleSubmit={handleClick} />}
{home && <Homepage/>}
</>
  );
}
export default App;
