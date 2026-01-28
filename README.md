# Twitter DAPP (Decentralized Application)

A decentralized Twitter-like social media application built on the Ethereum blockchain using React and Web3.js. Users can connect their MetaMask wallet, create profiles, and post tweets that are stored on smart contracts.

## 🚀 Features

- **Wallet Connection**: Connect your MetaMask wallet to the application
- **User Profiles**: Create and manage user profiles with display names and bios
- **Post Tweets**: Share tweets that are stored immutably on the blockchain
- **Like/Unlike Tweets**: Engage with tweets through on-chain likes
- **View Timeline**: Browse tweets from all users, sorted by most recent first
- **Sepolia Network**: Runs on the Ethereum Sepolia test network
- **User Avatars**: Auto-generated avatars for each user using DiceBear API
- **Profile Verification**: Only registered users can post and interact with tweets

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MetaMask browser extension
- Ethereum Sepolia testnet ETH for gas fees
- Solidity ^0.8.33
- Hardhat or Truffle (for smart contract deployment)

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

3. **Install OpenZeppelin contracts** (for smart contract development)
   ```bash
   npm install @openzeppelin/contracts
   ```

4. **Configure MetaMask**
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
   - Type your tweet in the text area (max 280 characters)
   - Click "Tweet" button
   - Confirm the transaction in MetaMask
   - Tweets appear instantly in your timeline

5. **Like/Unlike Tweets**
   - Click the like button on any tweet
   - Confirm the transaction in MetaMask
   - Like count updates in real-time

6. **View Timeline**
   - Your timeline displays all tweets sorted by recency
   - Avatars are generated automatically for each user

## 📁 Project Structure

```
twitterdappfinal/
├── src/
│   ├── App.jsx                 # Main application component
│   ├── index.js               # React entry point
│   ├── styles.css             # Application styles
│   ├── components/
│   │   ├── Connect.jsx        # Wallet connection component
│   │   ├── ProfileCreation.jsx # User profile creation form
│   │   ├── AddTweet.jsx       # Tweet composition form
│   │   └── Tweets.jsx         # Tweet display component
│   └── contracts/
│       ├── main.json          # Tweet contract ABI
│       └── user.json          # User profile contract ABI
├── contracts/
│   └── twitter.sol            # Main Twitter smart contract
├── README.md
└── package.json
```

## 📜 Smart Contracts

### Twitter Contract (`twitter.sol`)

The main smart contract that handles all Twitter functionality:

**Features:**
- **Profile Integration**: Links with Profile contract to verify registered users
- **Tweet Management**: Create, retrieve, and list tweets
- **Like System**: Like and unlike tweets with duplicate prevention
- **Owner Controls**: Admin can modify tweet length limits
- **Events**: Emits events for tweet creation, likes, and unlikes

**Key Functions:**
- `createTweet(string)` - Post a new tweet (max 280 characters)
- `likeTweet(address, uint256)` - Like a specific tweet
- `unlikeTweet(address, uint256)` - Unlike a tweet
- `getTweet(uint256)` - Get a single tweet by ID
- `getAllTweets(address)` - Retrieve all tweets from a user
- `getTotalLikes(address)` - Get total likes for a user's tweets
- `changeTweetLength(uint16)` - Update max tweet length (owner only)

**Modifiers:**
- `onlyRegistered` - Ensures only users with profiles can interact
- `onlyOwner` - Restricts admin functions to contract owner

**Deployed Contracts on Sepolia:**
- **Tweet Contract**: `0xB25EFb7dF9A7b66C8B825F19daDb6d187E5B439c`
- **Profile Contract**: `0xF588b74511E86B5de226beC74B56CaCf946b5686`

## 🔧 Smart Contract Development

### Compiling Contracts

```bash
# Using Hardhat
npx hardhat compile

# Using Truffle
truffle compile
```

### Deploying Contracts

```bash
# Deploy to Sepolia testnet
npx hardhat run scripts/deploy.js --network sepolia
```

### Contract Constructor

The Twitter contract requires the Profile contract address during deployment:

```solidity
constructor(address _ProfileContract) Ownable(msg.sender)
```

## 📦 Dependencies

### Frontend
- **React** (^19.2.3) - UI framework
- **Web3.js** (^4.16.0) - Ethereum blockchain interaction
- **react-scripts** (5.0.1) - Build and development tools

### Smart Contracts
- **Solidity** (^0.8.33) - Smart contract language
- **@openzeppelin/contracts** - Secure contract libraries (Ownable)

## 🔄 How It Works

1. **Wallet Connection**: Uses MetaMask to connect to the user's Ethereum wallet
2. **Profile Verification**: Checks if user has a registered profile before allowing interactions
3. **Tweet Creation**: Validates tweet length and stores on blockchain with timestamp
4. **Like System**: Tracks likes per tweet with event emission for UI updates
5. **Timeline**: Fetches all tweets from the contract and displays them in reverse chronological order
6. **Access Control**: Owner can adjust tweet length; only registered users can post/like

## 🔒 Security Features

- **Ownable Pattern**: Uses OpenZeppelin's Ownable for secure admin functions
- **Profile Verification**: Requires user registration before posting
- **Input Validation**: Checks tweet length and existence before operations
- **Event Logging**: All actions emit events for transparency
- **Reentrancy Protection**: Safe state updates before external calls

## 🧪 Available Scripts

- `npm start` - Run the app in development mode
- `npm build` - Build the app for production
- `npm test` - Run tests
- `npm eject` - Eject from create-react-app (irreversible)
- `npx hardhat compile` - Compile smart contracts
- `npx hardhat test` - Run smart contract tests

## ⚠️ Important Notes

- All transactions require gas fees (use Sepolia testnet ETH)
- Data is stored permanently on the blockchain
- The app requires MetaMask or a Web3-compatible browser wallet
- Switch to Sepolia testnet in MetaMask for proper functionality
- Only registered users can create tweets and interact with content
- Tweet length is limited to 280 characters (configurable by owner)

## 🔐 Security Considerations

- Always verify contract addresses before interacting
- Use testnet for development and testing
- Never share your private keys
- Audit smart contracts before production deployment
- Ensure Profile contract is deployed before Twitter contract
- Keep OpenZeppelin libraries updated for security patches

## 📝 License

This project is private and for educational purposes.

## 🤝 Contributing

This is an educational project. Feel free to fork and experiment!

## 📧 Support

For issues or questions, please open an issue in the repository.