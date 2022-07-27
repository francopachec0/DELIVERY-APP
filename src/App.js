import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import CreateItem from "./components/CreateItem";
import Header from "./components/Header";
import MainContainer from './components/MainContainer';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/FirebaseFuncions';
import { actionType } from "./context/reducer";

function App() {

  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      //console.log(data);
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  
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
