# Twitter DAPP (Decentralized Application)

A decentralized Twitter-like social media application built on the Ethereum blockchain using React and Web3.js. Users can connect their MetaMask wallet, create profiles, and post tweets that are stored on smart contracts.

## 🚀 Features

- **Wallet Connection**: Connect your MetaMask wallet to the application
- **User Profiles**: Create and manage user profiles with display names and bios
- **Post Tweets**: Share tweets that are stored immutably on the blockchain
- **View Timeline**: Browse tweets from all users, sorted by most recent first
- **Sepolia Network**: Runs on the Ethereum Sepolia test network
- **User Avatars**: Auto-generated avatars for each user using DiceBear API

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MetaMask browser extension
- Ethereum Sepolia testnet ETH for gas fees

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd twitterdappfinal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure MetaMask**
   - Install the MetaMask browser extension
   - Add the Sepolia test network (the app will help with this)
   - Get test ETH from a Sepolia faucet

## 🎯 Usage

1. **Start the development server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

2. **Connect Your Wallet**
   - Click "Connect Wallet" button
   - Approve the connection in MetaMask
   - Switch to Sepolia network (automatic if needed)

3. **Create a Profile**
   - Enter your desired username and bio
   - Click "Create Profile"
   - Confirm the transaction in MetaMask

4. **Post a Tweet**
   - Type your tweet in the text area
   - Click "Tweet" button
   - Confirm the transaction in MetaMask
   - Tweets appear instantly in your timeline

5. **View Timeline**
   - Your timeline displays all tweets sorted by recency
   - Avatars are generated automatically for each user

## 📁 Project Structure

```
src/
├── App.jsx                 # Main application component
├── index.js               # React entry point
├── styles.css             # Application styles
├── components/
│   ├── Connect.jsx        # Wallet connection component
│   ├── ProfileCreation.jsx # User profile creation form
│   ├── AddTweet.jsx       # Tweet composition form
│   └── Tweets.jsx         # Tweet display component
└── contracts/
    ├── main.json          # Tweet contract ABI
    └── user.json          # User profile contract ABI
```

## 🔗 Smart Contracts

The application interacts with two smart contracts on Sepolia:

- **Tweet Contract** (`0xB25EFb7dF9A7b66C8B825F19daDb6d187E5B439c`)
  - `createTweet(string)` - Post a new tweet
  - `getAllTweets(address)` - Retrieve all tweets from an account

- **Profile Contract** (`0xF588b74511E86B5de226beC74B56CaCf946b5686`)
  - `setProfile(string, string)` - Create/update user profile
  - `getProfile(address)` - Retrieve user profile data

## 📦 Dependencies

- **React** (^19.2.3) - UI framework
- **Web3.js** (^4.16.0) - Ethereum blockchain interaction
- **react-scripts** (5.0.1) - Build and development tools

## 🔄 How It Works

1. **Wallet Connection**: Uses MetaMask to connect to the user's Ethereum wallet
2. **Profile Management**: User profiles are stored on the blockchain, retrieved on app load
3. **Tweet Creation**: Tweets are submitted to the smart contract and stored on-chain
4. **Timeline**: Fetches all tweets from the contract and displays them in reverse chronological order
5. **User Display**: Shows shortened wallet addresses or usernames depending on context

## 🧪 Available Scripts

- `npm start` - Run the app in development mode
- `npm build` - Build the app for production
- `npm test` - Run tests
- `npm eject` - Eject from create-react-app (irreversible)

## ⚠️ Important Notes

- All transactions require gas fees (use Sepolia testnet ETH)
- Data is stored permanently on the blockchain
- The app requires MetaMask or a Web3-compatible browser wallet
- Switch to Sepolia testnet in MetaMask for proper functionality

## 🔐 Security Considerations

- Always verify contract addresses before interacting
- Use testnet for development and testing
- Never share your private keys
- Audit smart contracts before production deployment

## 📝 License

This project is private and for educational purposes.
