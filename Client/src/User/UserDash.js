import { BellIcon, ChatBubbleLeftEllipsisIcon, UserCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import LoanPopup from './LoanPopup';
import { useParams } from 'react-router-dom';

export default function UserDash() {
   const { uuid } = useParams();
    const [showPopup, setShowPopup] = useState(false);
    const [loanDetails, setLoanDetails] = useState([]);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    useEffect(() => {
      const fetchLoanDetails = async () => {
        try {
            const response = await fetch(`http://localhost:7001/api/loan-details/${uuid}`);
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error response text:', errorText);
                throw new Error('Network response was not ok');
            }
            const text = await response.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch (jsonError) {
                console.error('Failed to parse JSON:', jsonError);
                console.error('Response text was:', text);
                return;
            }
            setLoanDetails(data);
        } catch (error) {
            console.error('Error fetching loan details:', error);
        }
    };
        fetchLoanDetails();
    }, [handleClosePopup]);
    //console.log(loanDetails);
    const calculateDaysAgo = (dateStr) => {
      const loanDate = new Date(dateStr);
      const today = new Date();
      const timeDiff = today - loanDate;
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      return dayDiff;
    };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-green-800">LoanManager</h1>
            <nav className="ml-10 flex space-x-4">
              <a href="#" className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Payments
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Budget
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Card
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <BellIcon className="h-6 w-6 text-gray-400" />
            <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-gray-400" />
            <UserCircleIcon className="h-6 w-6 text-gray-400" />
            <span className="text-green-800 hover:text-green-600 cursor-pointer">User</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center bg-green-100 p-4 rounded-lg">
              <div className="bg-green-500 text-white p-2 rounded mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-green-800 font-semibold">DEFICIT</p>
                <p className="text-3xl font-bold text-green-800">₹0.0</p>
              </div>
            </div>
            {/* <button
             onClick={handleOpenPopup}
             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
             Get A Loan
            </button> */}
            <button className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out" onClick={handleOpenPopup}>
              Get A Loan
              </button>
             {showPopup && <LoanPopup closePopup={handleClosePopup} />}
          </div>

          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <div className="flex mb-4">
                <button className="flex-1 bg-green-50 text-green-700 py-2 px-4 rounded-l-lg font-medium">
                  Borrow Cash
                </button>
                <button className="flex-1 bg-white text-gray-700 py-2 px-4 font-medium">
                  Transact
                </button>
                <button className="flex-1 bg-white text-gray-700 py-2 px-4 rounded-r-lg font-medium">
                  Deposit Cash
                </button>
              </div>

              <div className="overflow-x-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold mt-4">Applied Loans</h2>
                  <div className="flex space-x-2">
                    <button className="text-gray-600 hover:text-gray-800">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        last updated
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date Applied
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  
                  <tbody className="bg-white divide-y divide-gray-200">
                    
                  {loanDetails.map((loan, index) => (
                    
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src="/placeholder.svg?height=40&width=40" alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{loan.name}</div>
                              
                              {calculateDaysAgo(loan.date) == 0 ? <div className="text-sm text-gray-500">Updated Today</div> : ""}
                              {calculateDaysAgo(loan.date) == 1 ? <div className="text-sm text-gray-500">Updated Yesterday</div> : ""}
                              {calculateDaysAgo(loan.date) > 1 ? <div className="text-sm text-gray-500">Updated {calculateDaysAgo(loan.date)} day's ago</div> : ""}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{loan.loanAmount}</div>
                          <div className="text-sm text-gray-500">Not Paid Yet</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{loan.date}</div>
                          <div className="text-sm text-gray-500">{loan.time}</div>
                        </td>
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-gray-400 hover:text-gray-500">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}