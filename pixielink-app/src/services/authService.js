// // src/services/authService.js
// const users = []; // Simulated database

// const authService = {
//   signUp: async (email, password) => {
//     // Check if email already exists
//     const existingUser = users.find(user => user.email === email);
//     if (existingUser) {
//       throw new Error('Email already exists');
//     }

//     // Create new user
//     const newUser = { email, password };
//     users.push(newUser);
//     return newUser;
//   },

//   login: async (email, password) => {
//     // Find user by email and password
//     const user = users.find(user => user.email === email && user.password === password);
//     if (!user) {
//       throw new Error('Invalid credentials');
//     }

//     return user;
//   },

//   logout: async () => {
//     // Implement logout logic if needed
//   }
// };

// export default authService;
