import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegsList from './KegsList';
import Admin from './Admin';
import Footer from './Footer';
import TapEditPopUpModal from './TapEditPopUpModal';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      masterTapList: {}
    };
    this.handleAddingNewTapToList = this.handleAddingNewTapToList.bind(this);
  }

  handleAddingNewTapToList(newTap) {
    let newTapId = v4();
    let newMasterTapList = Object.assign({}, this.state.masterTapList, {
      [newTapId]: newTap
    });
    this.setState({ masterTapList: newMasterTapList });
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
        <TapEditPopUpModal/>
        <Footer/>
      </div>
    );
  }
}

export default App;
