import React, { useEffect, useState } from 'react';
import api from '../services/api';

const TransportView = () => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await api.get('bus-routes/');
        setRoutes(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch bus routes');
        setLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  if (loading) return <div className="text-gray-600">Loading routes...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Transport Routes</h1>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {routes.map((route) => (
              <tr key={route.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{route.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{route.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{route.start_location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{route.end_location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{route.driver_name || 'N/A'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{route.capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {routes.length === 0 && (
          <div className="p-6 text-center text-gray-500">No bus routes found.</div>
        )}
      </div>
    </div>
  );
};

export default TransportView;
