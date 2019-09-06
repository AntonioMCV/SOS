import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' //npm install react-router-dom

import HeaderTitle from "./components/HeaderTitle";
import Loading from "./components/Loading";
import FooterLight from "./components/FooterLight";

import './App.scss';

import assets from './data/assets.json'

const AssetsDashboard = lazy(() => import('./components/AssetsDashboard'));
const AssetConfig = lazy(() => import('./components/AssetConfig'));
const InputsGuide = lazy(() => import('./components/InputsGuide'));

export default class App extends Component {


  state = {
    assets: assets,
  };

  maxId = 0;
  entitySelectedText = "";

  getMaxId = () => {
    this.maxId = 0;
    this.state.assets.map(asset => this.maxId = (this.maxId < asset.id) ? asset.id : this.maxId);
  }

  goTo = (id, removeBgClass, addBgClass, dataId) => {
    document.getElementById("App").classList.remove("loaded");
    setTimeout(() => {
      document.getElementById(id).click();
      document.getElementById("App").classList.remove(removeBgClass);
      document.getElementById("App").classList.add(addBgClass);
    }, 2000);
    setTimeout(() => {
      document.getElementById("App").classList.add("loaded");
    }, 2500);
    
    if (dataId) {

      this.setState({
        assetToEdit: this.state.assets.filter(i => i.id === dataId)
      });
    }
  }

  entityChange = () => {
    let entitySelectedNumber = document.getElementById("entity").value;
    this.entitySelectedText = document.querySelectorAll("#entity option")[entitySelectedNumber].innerText;

    this.setState({
      [this.entitySelectedText]: this.state.assets.filter(i => i.entity === this.entitySelectedText),
      entitySelectedNumber: entitySelectedNumber
    })
  }

  deleteAsset = id => {
    const newAssets = this.state.assets.filter(asset => asset.id !== id);
    this.setState({
      assets: newAssets,
      [this.entitySelectedText]: newAssets.filter(i => i.entity === this.entitySelectedText)
    });
    this.getMaxId();
  }

  addNewAsset = newAsset => {
    this.goTo("home");
    this.setState({
      assets: [...this.state.assets, newAsset],
    });
    this.setState({
      [this.entitySelectedText]: this.state.assets.filter(i => i.entity === this.entitySelectedText),
    })
    this.getMaxId();
  }

  editAsset = editAsset => {
    this.goTo("home");
    const index = this.state.assets.findIndex(i => i.id === editAsset.id);
    // eslint-disable-next-line
    this.state.assets[index] = editAsset;

    this.setState({
      [this.entitySelectedText]: this.state.assets.filter(i => i.entity === this.entitySelectedText),
    })
  }

  componentWillMount() {
    this.getMaxId();
  }

  componentDidMount() {
    document.getElementById("App").classList.add("bg-dashboard");
    setTimeout(() => {
      document.getElementById("App").classList.add("loaded");
    }, 500);
  }

  animation = (state) => {
    if (state === true) {
      console.log("TEST");
      
    }
  }

  render () {


    return (
      <div className="App " id="App">
        <Router>
          <HeaderTitle/>
          <main className="container main">
          <Suspense fallback={
            <div id="loading">
              <h2 className="typo-title my-5 text-center">Loading...</h2>
              <div className="py-5">
                <Loading/>
              </div>
            </div>
          }>
            
              <Switch>

                <Route
                  exact path="/"
                  render={(props) =>
                    <AssetsDashboard {...props}
                      goTo={this.goTo}
                      state={this.state}
                      entityChange={this.entityChange}
                      deleteAsset={this.deleteAsset}
                      stateSelected={this.state[this.entitySelectedText]}
                      selectValue={this.state.entitySelectedNumber}
                      entitySelectedText={this.entitySelectedText}
                      editAsset={this.editAsset}
                    />}
                />
                <Route
                  path='/newAsset'
                  render={(props) =>
                    <AssetConfig {...props}
                      goTo={this.goTo}
                      title={"Add a " + this.entitySelectedText+ " Asset"}
                      addNewAsset={this.addNewAsset}
                     entitySelectedText={this.entitySelectedText}
                      assetsMaxId={this.maxId}
                    />}
                />
                <Route
                  path='/editAsset'
                  render={(props) =>
                    <AssetConfig {...props}
                      goTo={this.goTo}
                      assetToEdit={this.state.assetToEdit}
                      title={"Edit " + this.entitySelectedText + "  Asset"}
                      editAsset={this.editAsset}
                      
                    />}
                />
                <Route path="/guide" component={InputsGuide} />

              </Switch>
            

          </Suspense>
          </main>
        </Router>
        <FooterLight/>
      </div>
    )
  }
}

