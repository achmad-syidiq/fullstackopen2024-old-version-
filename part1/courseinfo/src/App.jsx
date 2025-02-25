const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamental of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return props.parts.map((part) => (
    <Part key={part.name} name={part.name} exercises={part.exercises} />
  ));
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts.reduce((total, part) => total + part.exercises, 0)}
    </p>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

export default App;
