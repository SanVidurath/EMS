// App.tsx
import Form from "./components/Form"
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import List from "./components/List";
import NotFound from "./components/NotFound";

function App() {

  return (
    <Router basename="/EMS">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/eventsList" element={<List />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
