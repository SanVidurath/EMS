// App.tsx
import Form from "./components/Form"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import List from "./components/List";
import NotFound from "./components/NotFound";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/eventms" element={<Form />} />
        <Route path="/eventms/eventsList" element={<List />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
