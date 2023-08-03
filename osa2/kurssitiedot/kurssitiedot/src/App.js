const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
  </div>
)
const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <ul>
      {courses.map(course =>
        <div key={course.id}>
          <Course course={course} />
          <Total parts={course.parts} />
        </div>
      )}
    </ul>
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
        <div key={part.id}>
          <Part part={part} />
        </div>
      )}
    </ul>
  )
}
const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum+part.exercises, 0)
  return ( 
    <b>Number of exercises {total}</b>
  )
}

export default App