import React from 'react';
import { CarProvider } from './context/CarContext'; // Adjust the path as needed
import YourRoutes from './routes/YourRoutes'; // Adjust the path as needed

const App = () => {
  return (
    <CarProvider>
      <YourRoutes />
    </CarProvider>
  );
};

export default App;

