import React, { Component } from "react";
import ExerciseViewForm from "./ExerciseViewForm";

class ExerciseView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      userData,
      routineKeyForWorkoutView,
      workoutKeyForExerciseView,
      handleChange,
      finishWorkout,
      goBack
    } = this.props;
    const exerciseArray = Object.entries(
      userData[routineKeyForWorkoutView][workoutKeyForExerciseView]
    );
    const remove = () => exerciseArray.pop();
    remove();

    this.printExerciseViewForms = (sets, reps, name) => {
      this.exerciseViewForms = [];
      for (let i = 0; i < sets; i++) {
        this.exerciseViewForms.push(
          <ExerciseViewForm
            exerciseName={name}
            exerciseReps={reps}
            handleChange={handleChange}
            index={i}
          />
        );
      }
    };
    
    return (
      <section className="exerciseView">
        <form action="" onSubmit={finishWorkout}>
          {exerciseArray.map(exercise => {
            return (
              <div key={exercise[0]} className="exerciseCard clearfix">
                <h2>{exercise[1].exerciseName}</h2>

                <h3>Weight</h3>
                <h3>Reps</h3>
                <h3>Done</h3>

                {this.printExerciseViewForms(
                  exercise[1].exerciseSets,
                  exercise[1].exerciseReps,
                  exercise[1].exerciseName
                )}

                {this.exerciseViewForms}
              </div>
            );
          })}
          <input className="btn--goTo" type="submit" value="Finish Workout" />
        </form>
        <button onClick={goBack}>Go Back</button>
      </section>
    );
  }
}

export default ExerciseView;
