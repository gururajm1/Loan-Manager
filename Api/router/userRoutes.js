const express = require('express');
const { signUpUser, applyForLoan, getLoanDetails, checkAdminStatus, getAllUsers, updateLoanStatus, adminCheck } = require('../controller/userController');

const router = express.Router();

router.post('/loan/:uuid', applyForLoan);
const User = require('../model/userModel');
router.post('/signup', signUpUser);
router.get('/loan-details/:uuid', getLoanDetails);
router.get('/check-admin/:email', checkAdminStatus);
router.get('/admin-check/:email', adminCheck);
router.get('/users', getAllUsers); 
router.put('/loan/update-status', updateLoanStatus);

router.get('/loans', async (req, res) => {
  try {
    const users = await User.find({ isAdmin: false }).select('loanDetails');
    const loanDetails = users.flatMap(user => user.loanDetails);
    res.json(loanDetails);
  } catch (error) {
    console.error('Error fetching loan details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/loan/:uuid/status/:loanId', async (req, res) => {
  const { uuid, loanId } = req.params;
  const { status } = req.body;

  try {
    const user = await User.findOne({ uuid });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const loan = user.loanDetails.id(loanId);
    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }

    loan.status = status; 
    await user.save();

    res.status(200).json({ message: 'Loan status updated successfully' });
  } catch (error) {
    console.error('Error updating loan status:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/api/loan/:uuid', async (req, res) => {
  const { uuid } = req.params;
  const {
    fullName,
    loanAmount,
    loanTenure,
    employmentStatus,
    reason,
    employmentAddress,
    houseAddress,
    date,
    time,
  } = req.body;

  try {
    const user = await User.findOne({ uuid });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const loanDetail = {
      date, 
      time, 
      loanAmount,
      loanTenure,
      employmentStatus,
      reason,
      employmentAddress,
      houseAddress,
    };

    user.loanDetails.push(loanDetail);

    await user.save();

    res.status(200).json({ message: 'Loan application submitted successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// New endpoint to get UUID by email
router.get('/api/check-admin/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ uuid: user.uuid });
  } catch (error) {
    console.error('Error fetching UUID:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;