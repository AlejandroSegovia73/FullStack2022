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
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
      
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
  console.log(props);
  return (
    <>
      <p>
        Number of exercises: <span> {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</span>
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <>
      <Header title= {course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </>
  );
};

export default App;
