const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());


const userRoutes = require('./routes/users');
const propertyRoutes = require('./routes/properties');

app.use('/api/users', userRoutes);
app.use('/api/properties', propertyRoutes);


mongoose.connect(process.env.MONGODB_URL).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get("/",(req,res)=>{
    res.send("Heelo world")
})