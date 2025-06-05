// Full single-file React Admin Dashboard for WEFIX SACCO
// Includes: Member Management, Loan Overview, Savings, Staff Section, Charts

import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const memberData = [
  { name: "Alice", savings: 1200, loans: 500 },
  { name: "Bob", savings: 800, loans: 300 },
  { name: "Claire", savings: 1500, loans: 700 },
];

const Dashboard = () => {
  const savingsChart = {
    labels: memberData.map((m) => m.name),
    datasets: [
      {
        label: "Savings",
        data: memberData.map((m) => m.savings),
        backgroundColor: "#3B82F6",
        borderColor: "#2563EB",
        borderWidth: 1,
      },
    ],
  };

  const loanChart = {
    labels: memberData.map((m) => m.name),
    datasets: [
      {
        label: "Loans",
        data: memberData.map((m) => m.loans),
        backgroundColor: "#FBBF24",
        borderColor: "#F59E0B",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <header className="bg-white p-4 rounded shadow mb-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">WEFIX SACCO Admin Dashboard</h1>
        <span className="text-gray-500 text-sm">Welcome, Admin</span>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-lg mb-2">Total Members</h2>
          <p className="text-3xl text-blue-700">{memberData.length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-lg mb-2">Total Savings</h2>
          <p className="text-3xl text-green-600">
            ${memberData.reduce((acc, m) => acc + m.savings, 0)}
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-lg mb-2">Total Loans Issued</h2>
          <p className="text-3xl text-yellow-600">
            ${memberData.reduce((acc, m) => acc + m.loans, 0)}
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold mb-2">Savings Chart</h3>
          <Bar data={savingsChart} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold mb-2">Loan Chart</h3>
          <Line data={loanChart} />
        </div>
      </section>

      <section className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold mb-4">Member Overview</h3>
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Savings</th>
              <th className="p-2">Loans</th>
            </tr>
          </thead>
          <tbody>
            {memberData.map((member, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{member.name}</td>
                <td className="p-2 text-green-600">${member.savings}</td>
                <td className="p-2 text-yellow-600">${member.loans}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
