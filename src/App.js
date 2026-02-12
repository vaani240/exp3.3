import { Person, Student, Teacher } from "./PersonClasses";
import "./App.css";

function App() {
  const people = [
    new Person("Alex Johnson", 30),
    new Student("Emma Watson", 20, "Computer Science"),
    new Teacher("Dr. James Wilson", 45, "Mathematics")
  ];

  return (
    <div className="container">
      <h1>Person Class Hierarchy</h1>

      {people.map((p, index) => (
        <div className="card" key={index}>
          <h3>
            {p.name} (
            {p instanceof Student
              ? "Student"
              : p instanceof Teacher
              ? "Teacher"
              : "Person"}
            )
          </h3>

          <p><b>Age:</b> {p.age}</p>
          <em>{p.introduce()}</em>

          {p instanceof Student && (
            <p><b>Major:</b> {p.major}</p>
          )}

          {p instanceof Teacher && (
            <p><b>Teaching:</b> {p.subject}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
