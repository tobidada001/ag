import React from 'react';

const Reports = () => {
  const reports = [
    { name: 'Monthly Sales', value: '$15,000' },
    { name: 'Top Selling Products', value: 'Apples, Oranges, Carrots' },
    { name: 'Customer Satisfaction', value: '4.8/5' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reports & Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((report, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-lg mb-2">{report.name}</h3>
            <p className="text-xl text-green-600">{report.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;

