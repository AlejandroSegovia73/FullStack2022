const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.part1}: <span>{props.exercise1}</span>
      </p>
      <p>
        {props.part2}: <span> {props.exercise2}</span>
      </p>
      <p>
        {props.part3}: <span>{props.exercise3}</span>
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises: <span>{props.ex1 + props.ex2 + props.ex3}</span>{" "}
      </p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header title={course} />
      <Content
        part1={part1}
        exercise1={exercises1}
        part2={part2}
        exercise2={exercises2}
        part3={part3}
        exercise3={exercises3}
      />

      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </>
  );
};

export default App;