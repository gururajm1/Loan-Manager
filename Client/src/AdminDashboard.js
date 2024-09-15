import React, { useState, useEffect } from 'react';
import { Bell, MessageCircle, ChevronDown } from 'lucide-react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function AdminDashboard() {
  const [loanDetails, setLoanDetails] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSignout = () => {
    if(localStorage.getItem("loan-admin")){
      localStorage.removeItem("loan-admin");
      navigate("/");
    }
  }

  useEffect(() => {
    const fetchLoanDetails = async () => {
      try {
        const response = await axios.get('http://localhost:7001/api/loans');
        setLoanDetails(response.data);
        console.log('API Response Data:', response.data); 
      } catch (error) {
        console.error('Error fetching loan details:', error);
        setError('Error fetching loan details');
      }
    };

    fetchLoanDetails();
  }, []);

  const handleStatusChange = async (loanId, newStatus) => {
    try {
      const loan = loanDetails.find(loan => loan._id === loanId);
      if (!loan) {
        console.error('Loan not found');
        return;
      }
      
      const { loanAmount, loanTenure, employmentStatus, date } = loan;
      
      const response = await axios.put('http://localhost:7001/api/loan/update-status', {
        loanAmount,
        loanTenure,
        employmentStatus,
        dateApplied: date, 
        status: newStatus, 
      });
  
      console.log('Loan status updated:', response.data);
      setLoanDetails(prevDetails => prevDetails.map(loan => 
        loan._id === loanId ? { ...loan, status: newStatus } : loan
      ));
    } catch (error) {
      console.error('Error updating loan status:', error);
      setError('Error updating loan status');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-green-900 text-white">
        <div className="p-4 bg-green-800">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
              SM
            </div>
            <span className="ml-3 font-medium">Spider man</span>
          </div>
        </div>
        <nav className="mt-4">
          {['Dashboard', 'Borrowers', 'Loans', 'Repayments', 'Loan Parameters', 'Accounting', 'Reports', 'Collateral', 'Access Configuration', 'Savings', 'Expenses', 'E-signature', 'Investor Accounts', 'Calendar', 'Settings'].map((item) => (
            <a key={item} href="#" className="block py-2 px-4 hover:bg-green-800">
              {item}
            </a>
          ))}
          <a href="#" className="block py-2 px-4 hover:bg-green-800 mt-4" onClick={handleSignout}>Sign Out</a>
        </nav>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center py-4 px-6 bg-white border-b">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-green-800">LoanManager</h1>
          </div>
          <div className="flex items-center">
            <Bell className="h-6 w-6 text-gray-500 mr-4" />
            <MessageCircle className="h-6 w-6 text-gray-500 mr-4" />
            <button className="flex items-center text-gray-500 hover:text-gray-700">
              <span className="mr-1">Admin</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-2xl font-medium">Dashboard</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[{
                title: 'LOANS', value: '50', icon: '💵'
              }, {
                title: 'BORROWERS', value: '100', icon: '👤'
              }, {
                title: 'CASH DISBURSED', value: '550,000', icon: '💰'
              }, {
                title: 'SAVINGS', value: '450,000', icon: '🐷'
              }, {
                title: 'REPAID LOANS', value: '30', icon: '✅'
              }, {
                title: 'CASH RECEIVED', value: '1,000,000', icon: '📈'
              }].map((item) => (
                <div key={item.title} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5 flex items-center">
                    <div className="flex-shrink-0 bg-green-800 rounded-md p-3 text-white">
                      {item.icon}
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">{item.title}</dt>
                        <dd className="text-3xl font-semibold text-gray-900">{item.value}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <h4 className="text-gray-700 text-lg font-medium">Applied Loans</h4>
                <div className="flex items-center">
                  <button className="text-gray-600 hover:text-gray-900 mr-2">Sort</button>
                  <button className="text-gray-600 hover:text-gray-900">Filter</button>
                </div>
              </div>
              <div className="mt-4 bg-white shadow rounded-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loan Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loan Tenure</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employment Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Applied</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {loanDetails.length > 0 ? (
                      loanDetails.map((loan) => (
                        <tr key={loan._id}>
                          <td className="px-6 py-4 whitespace-nowrap">{loan.loanAmount || 'N/A'}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{loan.loanTenure || 'N/A'}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{loan.employmentStatus || 'N/A'}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{loan.date || 'N/A'}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            loan.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            loan.status === 'approved' ? 'bg-green-100 text-green-800' :
                            loan.status === 'rejected' ? 'bg-red-100 text-red-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {loan.status}
                          </span>
                        </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <select
                              value={loan.status || 'pending'}
                              onChange={(e) => handleStatusChange(loan._id, e.target.value)}
                              className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                            >
                              <option value="pending">Pending</option>
                              <option value="approved">Approved</option>
                              <option value="rejected">Rejected</option>
                            </select>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="px-6 py-4 text-center text-gray-500">No loan details available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}