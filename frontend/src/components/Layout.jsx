import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex-shrink-0">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">School Admin</h2>
        </div>
        <nav className="p-4 space-y-2">
          <Link to="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Dashboard</Link>
          <Link to="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Cycles</Link>
          <Link to="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Transport</Link>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
