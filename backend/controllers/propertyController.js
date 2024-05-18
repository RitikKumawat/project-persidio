const Property = require('../models/Property');
const User = require('../models/User');


exports.addProperty = async (req, res) => {
    const { title,
        description,
        price,
        location,
        area,
        bedrooms,
        bathrooms,
        nearbyHospitals,
        nearbyColleges,} = req.body;
    try {
        const property = new Property({title,
            description,
            price,
            location,
            area,
            bedrooms,
            bathrooms,
            nearbyHospitals,
            nearbyColleges,
            owner: req.user.id });
        await property.save();
        res.json(property);
    } catch (err) {
        res.status(500).send('Server error');
    }
};


exports.deleteProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ msg: 'Property not found' });
        }

        if (property.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await property.remove();
        res.json({ msg: 'Property removed' });
    } catch (err) {
        res.status(500).send('Server error');
    }
};


exports.getProperties = async (req, res) => {
    try {
        const properties = await Property.find().populate('owner', 'username email');
        res.json(properties);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getPropertiesBySeller = async (req, res) => {
    try {
      const properties = await Property.find({ owner: req.user.id });
      res.json(properties);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };