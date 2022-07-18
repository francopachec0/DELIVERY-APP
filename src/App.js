import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom'
import CreateItem from "./components/CreateItem";
import Header from "./components/Header";
import MainContainer from './components/MainContainer';


function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-20 px-5 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateItem />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
