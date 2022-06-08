import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>welcome in hello world react connected with rails</h2>
    <Link to="/greeting">Get your message</Link>
  </div>
);

export default Home;
