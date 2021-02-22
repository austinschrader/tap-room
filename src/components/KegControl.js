import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        formVisibleOnPage: false,
      });
    } else {
      this.setState({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      });
    }
  };

  newKegClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        visibleView: 2,
      });
    } else {
      this.setState({
        visibleView: 2,
      });
    }
  };

  handleBuy = () => {
    const quantityOfKeg = this.state.selectedKeg.quantity;
    const restockedKeg = {
      ...this.state.selectedKeg,
      quantity: quantityOfKeg - 1,
    };
    const newMasterList = this.state.masterKegList
      .filter((keg) => keg.id !== this.state.selectedKeg.id)
      .concat(restockedKeg);
    this.setState({ selectedKeg: restockedKeg, masterKegList: newMasterList });
  };

  handleRestock = () => {
    const quantityOfKeg = this.state.selectedKeg.quantity;
    const restockedKeg = {
      ...this.state.selectedKeg,
      quantity: quantityOfKeg + 1,
    };
    const newMasterList = this.state.masterKegList
      .filter((keg) => keg.id !== this.state.selectedKeg.id)
      .concat(restockedKeg);
    this.setState({ selectedKeg: restockedKeg, masterKegList: newMasterList });
  };

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false,
    });
  };

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(
      (keg) => keg.id === id
    )[0];
    this.setState({ selectedKeg: selectedKeg });
  };

  render() {
    let currentlyVisibleState = null;
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = (
        <KegDetail
          keg={this.state.selectedKeg}
          onRestock={this.handleRestock}
          onBuy={this.handleBuy}
        />
      );
    } else if (this.state.visibleView === 0) {
      currentlyVisibleState = null;
    } else if (this.state.visibleView === 1) {
      currentlyVisibleState = (
        <KegList
          kegList={this.state.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg}
        />
      );
    } else if (this.state.visibleView === 2) {
      currentlyVisibleState = (
        <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      );
    }
    return (
      <>
        <button onClick={this.handleClick}>Keg List</button>
        <button onClick={this.newKegClick}>Add new Keg</button>
        {currentlyVisibleState}
      </>
    );
  }
}

export default KegControl;
