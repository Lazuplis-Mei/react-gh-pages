import BaseCode from './encoder/BaseCode';
import Base64 from './encoder/baseCode/Base64';
import Base32 from './encoder/baseCode/Base32';
import Base100 from './encoder/baseCode/Base100';
import Base16 from './encoder/baseCode/Base16';
import ChineseCode from './encoder/ChineseCode';
import CommercialCode from './encoder/chineseCode/CommercialCode';
import QuotedPrintable from './encoder/QuotedPrintable';
import About from './About';
import NavBar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import { Flex } from 'antd';

function App() {
  return (
    <div className="App">
      <Flex gap="middle" vertical={false}>
        <NavBar />
        <Routes>
          <Route path="/react-gh-pages/" element={<BaseCode />} />
          <Route path="/react-gh-pages/encoder_baseCode" element={<BaseCode />} />
          <Route path="/react-gh-pages/encoder_baseCode_base64" element={<Base64 />} />
          <Route path="/react-gh-pages/encoder_baseCode_base32" element={<Base32 />} />
          <Route path="/react-gh-pages/encoder_baseCode_base100" element={<Base100 />} />
          <Route path="/react-gh-pages/encoder_baseCode_base16" element={<Base16 />} />
          <Route path="/react-gh-pages/encoder_chineseCode" element={<ChineseCode />} />
          <Route path="/react-gh-pages/encoder_chineseCode_commercialCode" element={<CommercialCode />} />
          <Route path="/react-gh-pages/encoder_quotedPrintable" element={<QuotedPrintable />} />
          <Route path="/react-gh-pages/about" element={<About />} />
        </Routes>
      </Flex>
    </div>
  );
}

export default App;