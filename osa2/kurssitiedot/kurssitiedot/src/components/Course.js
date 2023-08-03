const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
  </div>
)
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

export default Course
