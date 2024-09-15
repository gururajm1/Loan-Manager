import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ApplyForLoan() {
  const { uuid } = useParams(); 
  const [formData, setFormData] = useState({
    name: '',
    loanAmount: '',
    loanTenure: '',
    employmentStatus: '',
    reason: '',
    employmentAddress: '',
    houseAddress: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.loanAmount || !formData.loanTenure || !formData.employmentStatus || !formData.reason || !formData.employmentAddress || !formData.houseAddress) {
      alert('Please fill out all fields');
      return;
    }
  
    const now = new Date();
    const currentDate = now.toISOString().split('T')[0]; 
    const currentTime = now.toTimeString().split(' ')[0]; 
  
    try {
      const response = await fetch(`http://localhost:7001/api/loan/${uuid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: currentDate,
          time: currentTime,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      alert('Loan application submitted successfully!');
      console.log(result);
    } catch (error) {
      alert('There was an error submitting your application.');
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8">APPLY FOR A LOAN</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full name as it appears on bank account
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full name as it appears on bank account"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400"
            />
          </div>
          <div>
            <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">
              How much do you need?
            </label>
            <input
              type="number"
              id="loanAmount"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleInputChange}
              placeholder="How much do you need?"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="loanTenure" className="block text-sm font-medium text-gray-700 mb-1">
              Loan tenure (in months)
            </label>
            <input
              type="number"
              id="loanTenure"
              name="loanTenure"
              value={formData.loanTenure}
              onChange={handleInputChange}
              placeholder="Loan tenure (in months)"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400"
            />
          </div>
          <div>
            <label htmlFor="employmentStatus" className="block text-sm font-medium text-gray-700 mb-1">
              Employment status
            </label>
            <input
              type="text"
              id="employmentStatus"
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleInputChange}
              placeholder="Employment status"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
              Reason for loan
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              placeholder="Reason for loan"
              //rows={4}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400"
            ></textarea>
          </div>
          <div>
            <label htmlFor="employmentAddress" className="block text-sm font-medium text-gray-700 mb-1">
              Employment address
            </label>
            <input
              type="text"
              id="employmentAddress"
              name="employmentAddress"
              value={formData.employmentAddress}
              onChange={handleInputChange}
              placeholder="Employment address"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 mb-4"
            />
            <label htmlFor="houseAddress" className="block text-sm font-medium text-gray-700 mb-1">
              House address
            </label>
            <input
              type="text"
              id="houseAddress"
              name="houseAddress"
              value={formData.houseAddress}
              onChange={handleInputChange}
              placeholder="House address"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400"
            />
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Chart</h2>
          {/* <div className="bg-white p-4 rounded-lg shadow">
            <Line data={chartData} options={chartOptions} />
          </div> */}
        </div>
        <div className="space-y-4">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="termsAcceptance"
              className="mt-1 mr-2"
            />
            <label htmlFor="termsAcceptance" className="text-sm text-gray-700">
              I have read the important information and accept that by completing the application I will be bound by the terms
            </label>
          </div>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="infoDisclosure"
              className="mt-1 mr-2"
            />
            <label htmlFor="infoDisclosure" className="text-sm text-gray-700">
              Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus or other credit reporting agencies.
            </label>
          </div>
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="w-32 bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            APPLY NOW
          </button>
        </div>
      </form>
    </div>
  );
}