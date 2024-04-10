import ReadPage from './Pages/ReadPage';
import fullScreenLoader from './loder/fullScreenLoader';

const App = () => {
  return (
    <div>
      <fullScreenLoader/>
      <ReadPage/>
    </div>
  );
};

export default App;