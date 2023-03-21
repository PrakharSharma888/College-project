import logo from './logo.svg';
import './App.css';
import img1 from './assets/1.jpeg'
import img2 from './assets/2.jpeg'
import img3 from './assets/4.jpeg'
import { useState } from 'react';
import Proposal from './proposal.js'

function App() {
  const [proposal, setProposal] = useState(false)
  const handleClick = () => {
    setProposal(!proposal);
  }

  return (
    <div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="navbar-brand">
            <a href="#" className="navbar-logo"><img src="{logo.png}"/></a>
            <a href="#" className="navbar-home">Home</a>
            <a href="#" className="navbar-home">All Proposals</a>
            <input type="text" placeholder="Search" className="navbar-search"/>
            <a href="#" className="navbar-fund" onClick={handleClick}>Fund</a>
          </div>
    </nav>
    {proposal ? (
        <><div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={img1} alt="First slide" width="800" height="900" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img2} alt="Second slide" width="800" height="600" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img3} alt="Third slide" width="800" height="600" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div><footer className="footer bg-dark">
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <a className="navbar-brand" href="#">Home</a>
                </div>
                <div className="col-sm-4">
                  <a className="nav-link" href="#">Search</a>
                </div>
                <div className="col-sm-4">
                  <a className="nav-link" id="fund-button" href="#">Fund</a>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <p className="text-muted">&copy; 2023 My Webpage. All rights reserved.</p>
                </div>
              </div>
            </div>
          </footer></>
      ) : <Proposal/>}
    
</div>
  );
}

export default App;
