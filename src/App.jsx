import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Loader from './components/Loader';

const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          Loader
          <Route path="/loader" element={<Loader />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;