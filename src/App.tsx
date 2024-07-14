import React from "react";
import Home from './Home';
import About from './About';
import Base32 from './Base32';
import NavBar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import { Flex } from 'antd';

function App() {
  return (
    <div className="App">
      <Flex gap="middle" vertical={false}>
        <NavBar />
        < Routes >
          <Route path="/react-gh-pages" element={< Home />} />
          <Route path="/react-gh-pages/base32" element={< Base32 />} />
          <Route path="/react-gh-pages/about" element={< About />} />
        </Routes>
      </Flex>
    </div>
  );
}

export default App;