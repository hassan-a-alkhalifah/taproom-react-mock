import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegsList from './KegsList';
import Admin from './Admin';
import Footer from './Footer';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      masterTapList: {},
      selectedEditTap: null,
      beerBrandImageInput: null,
      beerNameInput: null,
      beerPriceInput: null,
      beerABVInput: null,
      beerBrandInput: null,
      pintLevelInput: null
    };
    this.handleAddingNewTapToList = this.handleAddingNewTapToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUpdatingTapToList = this.handleUpdatingTapToList.bind(this);
    this.handleDeletingSelectedTap = this.handleDeletingSelectedTap.bind(this);
  }

  handleAddingNewTapToList(newTap) {
    let newTapId = v4();
    let newMasterTapList = Object.assign({}, this.state.masterTapList, {
      [newTapId]: newTap
    });
    this.setState({ masterTapList: newMasterTapList });
  }

  handleChangingSelectedTicket(tapId) {

    this.setState({
      selectedEditTap: tapId,
      beerBrandImageInput: this.state.masterTapList[tapId].beerBrandImage,
      beerNameInput: this.state.masterTapList[tapId].beerName,
      beerPriceInput: this.state.masterTapList[tapId].beerPrice,
      beerABVInput: this.state.masterTapList[tapId].beerABV,
      beerBrandInput: this.state.masterTapList[tapId].beerBrand,
      pintLevelInput: this.state.masterTapList[tapId].pintLevel
    });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleUpdatingTapToList(updatedTapObject, selectedTapId) {
    let newMasterTapList = Object.assign({}, this.state.masterTapList);
    newMasterTapList[selectedTapId] = updatedTapObject;
    this.setState({
      masterTapList: newMasterTapList,
      selectedEditTap: null
    });
  }

  handleDeletingSelectedTap(tapId) {
    let newMasterTapList = Object.assign({}, this.state.masterTapList);
    delete newMasterTapList[tapId];
    this.setState({
      masterTapList: newMasterTapList
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route
            exact path='/'
            render={ () =>
              <KegsList
                masterTapList={this.state.masterTapList}
                onTapEditSelection={this.handleChangingSelectedTicket}
                selectedEditTap={this.state.selectedEditTap}
                onInputChange={this.handleInputChange}
                beerBrandImageInput={this.state.beerBrandImageInput}
                beerNameInput={this.state.beerNameInput}
                beerPriceInput={this.state.beerPriceInput}
                beerABVInput={this.state.beerABVInput}
                beerBrandInput={this.state.beerBrandInput}
                pintLevelInput={this.state.pintLevelInput}
                onUpdatedTapCreation={this.handleUpdatingTapToList}
                onTapDeleteSelection={this.handleDeletingSelectedTap}
              />
            }
          />
          <Route
            exact path='/admin'
            render={ () =>
              <Admin
                onNewTapCreation={this.handleAddingNewTapToList}
              />
            }
          />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
