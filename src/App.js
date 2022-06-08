import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { fetchRocketsDispatch } from './redux/messages/messages';
import Home from './components/home';
import Message from './components/message';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketsDispatch());
  }, []);
  const message = useSelector((state) => state.messagesReducer);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/greeting" element={<Message msg={message} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
