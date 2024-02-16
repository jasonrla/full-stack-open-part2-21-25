const Total = (props) => {
    console.log(props)
    const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0)
    return <h4>Total of {totalExercises} exercises</h4>
}

export default Total
  