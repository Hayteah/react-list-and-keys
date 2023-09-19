// App.jsx

import "./App.css";
import MovieList from "./components/MovieList";
import ProjectList from "./components/ProjectList";
import SimpleList from "./components/SimpleList";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div className="App">
      <SimpleList />
      <StudentList />
      <ProjectList />
      <MovieList />
    </div>
  );
}

export default App;
