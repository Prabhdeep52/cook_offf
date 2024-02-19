const express = require("express");  
const bodyParser = require("body-parser");
const dbConnection = require("./database/dbConnection");
const Report = require("./models/reportSchema");
const cloudinary = require('cloudinary');
const multer = require('multer');


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dbConnection().catch((error) => console.error(error));

cloudinary.config({
    cloud_name: "drmmygovo",
    api_key: "156997282836991",
    api_secret: "t0_Tbs1cSBxetFKFX5iyV-ru-To" 

  });


// Configure multer for file uploads, using memory storage so make sure images are not too large
const upload = multer({
    storage: multer.memoryStorage(),
  });
  

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/reportPost' , upload.single('image') , async (req, res) => {
    try {
        let imageUrl = ''; // Default empty URL if no image is uploaded.

        if (req.file) {
          // Convert the buffer to a base64-encoded URI
          const imageBuffer = req.file.buffer.toString('base64');
          const dataUri = `data:${req.file.mimetype};base64,${imageBuffer}`;
    
          // Upload the image directly to Cloudinary using data URI
          const result = await cloudinary.uploader.upload(dataUri, {
            folder: 'reports',
          });
    
          imageUrl = result.secure_url;
        }
  
      const report = new Report({
        name: req.body.name,
        dtype: req.body.dtype || '',
        description: req.body.description || '',
        contact: req.body.contact || '',
        lat: req.body.lat || '',
        long: req.body.long || '',
        image: imageUrl,   
      });
  
      // Save the report to MongoDB
      await report.save();
  
      res.json('Report added successfully.');
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Bad Request' });
    }
  });

app.get('/reportFetch', (req, res) => {
  Report.find().then((reports) => res.json(reports));
});
  

// Import org model
import Org from './models/orgSchema.js';


//Post request to store the org details in database
app.post('/orgPost', upload.single('image'), async (req, res) => {
  try {
    let imageUrl = '';

    if (req.file) {

      const imageBuffer = req.file.buffer.toString('base64');
      const dataUri = `data:${req.file.mimetype};base64,${imageBuffer}`;


      const result = await cloudinary.uploader.upload(dataUri, {
        folder: 'ResQ-Orgs',
      });

      imageUrl = result.secure_url;
    }

    const org = new Org({
      name: req.body.name,
      description: req.body.description || '',
      orgtype: req.body.orgtype || '',
      contact: req.body.contact || '',
      lat: req.body.lat || '',
      long: req.body.long || '',
      logo: imageUrl
    });

    await org.save()
    res.json('Report added successfully.');
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Bad Request' });
  }
});  

app.get('/orgFetch', (req, res) => {
  Org.find().then((orgs) => res.json(orgs));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  