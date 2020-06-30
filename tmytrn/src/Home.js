import React from 'react';
import './App.css';
import Tachyons from 'tachyons';
import Portfolio from './Portfolio';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import portrait from './images/tommy-tran-@tmytrn-website-portrait-2020-by-benjamin-siordia.jpg';

function App() {
    const style = {
        backgroundColor: "rgb(190, 191, 210)"
    }
    return (
      <Router>
      <div className="App" style={style}>
        <div class="pv1 ph3 ph5-l ">
          <div class="w-100 w-50-l mb5 relative head ">
            <h1 class="f2 f1-l f-mt0 ws-normal-m">
              Tommy Tran is a digital designer and developer based in Los Angeles. He holds a B.S. in Computer Science from SFSU. He applies his technological skills in creative projects and new endeavours.
            </h1>
          </div>
          <div class="me w-80 w-40-l">
            <div class="behind">
              <img src={portrait} alt="tommy-tran-@tmytrn-website-portrait-2020-by-benjamin-siordia.jpg"></img>
            </div>
            <div class="tl">
              <p class="f6 f5-l mv1">
                Griffith Park, 2019
              </p>
              <p class="f6 f5-l mv1">
              Photo by <a href="https://twitter.com/bensiordia" class="link color">Benjamin Siordia</a>
              </p>
            </div>
          </div>
          <div class="mt5">
            <h1 class=" f2 f1-l f-mt0 mv0 db"><a href="https://www.github.com/tmytrn" class=" tmytrn white">@tmytrn <span class="fade">on github</span></a></h1>
            <h1 class=" f2 f1-l f-mt0 mv0  db"><a href="https://www.linkedin.com/in/tmytrn" class=" tmytrn dark-blue">@tmytrn <span class="fade">on linkedin</span></a></h1>
            <h1 class=" f2 f1-l f-mt0 mv0  db"><a href="https://www.instagram.com/tmytrn" class=" tmytrn light-purple">@tmytrn <span class="fade">on ig</span></a></h1>
            <h1 class=" f2 f1-l f-mt0 mv0  db"><a href="https://www.twitter.com/tmytrn" class=" tmytrn blue">@tmytrn <span class="fade">on twitter</span></a></h1>
            <h1 class=" f2 f1-l f-mt0 mv0  db"><a href="mailto:tommy@tmytrn.com" class=" tmytrn red">@tmytrn.com, I respond quick.</a></h1>
            <h1 class=" f2 f1-l f-mt0 mv5 db"><a href="CV/@tmytrn_CV_2020.pdf" class="dim tmytrn dim color ph0" download>@tmytrn_CV_2020.pdf</a></h1>
          </div>
        </div>
      </div>
  
      <Route path="/portfolio" component={Portfolio}></Route>
      </Router>
    );
  }
  
  export default App;