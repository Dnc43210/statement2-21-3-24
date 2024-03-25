import Dashboard from "@components/Dashboard";
import Login from "@components/Login";
import Quiz from "@components/Quiz";
import Score from "@components/Score";
import "@css/App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/questions/:amount" element={<Quiz/>}/>
        <Route path="/score" element={<Score/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
