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
      <Part part={props.part1} exercise={props.exercise1} />
      <Part part={props.part2} exercise={props.exercise2} />
      <Part part={props.part3} exercise={props.exercise3} />
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part}: <span>{props.exercise}</span>
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
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <>
      <Header title={course} />
      <Content
        part1={part1.name}
        exercise1={part1.exercises}
        part2={part2.name}
        exercise2={part2.exercises}
        part3={part3.name}
        exercise3={part3.exercises}
      />

      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises} />
    </>
  );
};

export default App;
