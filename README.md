# Product Management Backend API

A robust RESTful API built with Node.js, Express, and MongoDB for managing products.

## 🚀 Features

- **CRUD Operations**: Create, Read, Update, Delete products
- **MongoDB Integration**: Persistent data storage with Mongoose ODM
- **Input Validation**: Comprehensive data validation
- **Error Handling**: Proper error responses and status codes
- **CORS Enabled**: Cross-origin resource sharing support
- **Environment Variables**: Secure configuration management

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Derric01/Product_Backend.git
cd Product_Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## 🔗 API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

### Request/Response Examples

#### Create Product (POST /api/products)
```json
{
  "name": "iPhone 15 Pro",
  "price": 999.99,
  "image": "https://example.com/image.jpg"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "_id": "product_id",
    "name": "iPhone 15 Pro",
    "price": 999.99,
    "image": "https://example.com/image.jpg",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## 🌍 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO_URI` | MongoDB connection string | ✅ |
| `PORT` | Server port (default: 5000) | ❌ |

## 🚀 Deployment

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Railway
1. Connect your GitHub repository
2. Add environment variables
3. Deploy automatically

### Render
1. Connect your GitHub repository
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables

## 📄 License

ISC License - see LICENSE file for details.

## 👨‍💻 Author

**Derric Samson**
- GitHub: [@Derric01](https://github.com/Derric01)
