// components/Layout.js

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          {/* Navigation links here */}
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 Task Manager</p>
      </footer>
    </div>
  );
};

export default Layout;

