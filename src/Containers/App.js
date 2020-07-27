import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../Components/CardList.js";
import SearchBox from "../Components/SearchBox.js";
import "../Containers/App.css";
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry.js";
import { setSearchField, requestRobots } from "../Actions";

//State is what describes the app. It is the thing that can change.
//Usually lives in the parent Component.
//Therefore it is a smart component with the class format instead of function
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filterRobots = robots.filter((Robot) => {
      return Robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
      <h1 className="tc">Loading..........</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList Robots={filterRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
