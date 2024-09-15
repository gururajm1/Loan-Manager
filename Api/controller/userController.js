const User = require('../model/userModel');
const { v4: uuidv4 } = require('uuid');

const signUpUser = async (req, res) => {
  console.log("Received request at /signup");
  try {
    const { name, email, age, password } = req.body;

    const uuid = uuidv4();
    console.log(uuid);

    const user = new User({
      name,
      email,
      age,
      uuid, 
    });

    await user.save();

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user', error });
  }
};

const applyForLoan = async (req, res) => {
  try {
    console.log("innn")
    const { uuid } = req.params;
    const loanData = req.body;

    if (!loanData) {
      return res.status(400).json({ message: 'Loan data is required' });
    }

    const user = await User.findOne({ uuid });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.loanDetails) {
      user.loanDetails = [];
    }

    user.loanDetails.push(loanData);
    await user.save();

    res.status(200).json({ message: 'Loan details added successfully' });
  } catch (error) {
    console.error('Error applying for loan:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getLoanDetails = async (req, res) => {
  try {
    const { uuid } = req.params;

    const user = await User.findOne({ uuid });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user.loanDetails);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }

}

const checkAdminStatus = async (req, res) => {
  console.log("checkAdminStatus");
  const { email } = req.params;
  console.log(email);

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ uuid: user.uuid });
  } catch (error) {
    console.error('Error checking user status:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); 
    res.status(200).json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};


const updateLoanStatus = async (req, res) => {
  console.log("updateLoanStatus")
  try {
    const { loanAmount, loanTenure, employmentStatus, dateApplied, status } = req.body;

    const user = await User.findOne({
      loanDetails: {
        $elemMatch: {
          loanAmount,
          loanTenure,
          employmentStatus,
          date: dateApplied, 
        },
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'Loan not found' });
    }

    const loan = user.loanDetails.find(
      (loan) =>
        loan.loanAmount === loanAmount &&
        loan.loanTenure === loanTenure &&
        loan.employmentStatus === employmentStatus &&
        loan.date === dateApplied
    );

    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }

    loan.status = status;

    await user.save();

    res.status(200).json({ message: 'Loan status updated successfully' });
  } catch (error) {
    console.error('Error updating loan status:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { loanAmount, loanTenure, employmentStatus, dateApplied, status } = req.body;

    const updatedLoan = await Loan.findOneAndUpdate(
      { loanAmount, loanTenure, employmentStatus, dateApplied },
      { status },
      { new: true } 
    );

    if (!updatedLoan) {
      return res.status(404).json({ message: 'Loan not found' });
    }

    res.status(200).json({ message: 'Status updated successfully', loan: updatedLoan });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const adminCheck = async (req, res) => {
  console.log("adminCheck")
  const { email } = req.params;
  console.log(email)

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.isAdmin) {  
      return res.status(403).json({ message: 'User is not an admin' });
    }

    res.status(200).json({ message: 'User is an admin' });
  } catch (error) {
    console.error('Error checking admin status:', error);
    res.status(500).json({ message: 'Server error', error });
  }
}

module.exports = { signUpUser, applyForLoan, getLoanDetails, checkAdminStatus, getAllUsers, updateLoanStatus, adminCheck };