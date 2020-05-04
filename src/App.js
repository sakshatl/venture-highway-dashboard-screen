import React from 'react';
import Layout from "./components/Layout/Layout";

import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className="App">
      <Layout>
        <MainContent />
      </Layout>
    </div>
  );
}

export default App;
