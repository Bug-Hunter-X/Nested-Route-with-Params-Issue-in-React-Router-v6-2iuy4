```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} >
          <Route path=":id" element={<ContactDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div>; }
function About() { return <div>About</div>; }
function Contact() { return <div>Contact</div>; }

function ContactDetail() {
  const { id } = useParams();
  return (
    <div>Contact Detail: {id}</div>
  );
}
export default App;
```