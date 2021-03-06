import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class HistoryItem extends Component {
  constructor(props) {
    super(props);
  }

  viewNotes = (e) => {

      const workoutKey = e.target.id

      // Re-direct
      this.props.history.push(`/notesview/${workoutKey}`);
  };
  render() {
    const { workout, workoutKey } = this.props;

    return <button className="btn--goTo" id={workoutKey} onClick={this.viewNotes}>
        <h3 className="date">{workout.date}</h3>
        <h2>
          {workout.routineName} -- {workout.workoutName}
        </h2>
        <i class="fas fa-angle-right" />
      </button>;
  }
}

export default withRouter(HistoryItem);
