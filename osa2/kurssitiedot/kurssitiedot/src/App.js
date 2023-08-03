const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
  </div>
)
const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Header = ({ name }) => {
  return (
    <h1>
      {name}
    </h1>
  )
}
const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map(part => 
        <li key={part.id}>
          <Part part={part} />
        </li>
      )}
    </ul>
  )
}
const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}
// const Total = ( parts ) => {
//   return ( 
//     <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
//   )
// }

export default App