const express = require('express');

const router = express.Router();

const contactController = require('../controllers/contact.controller');

const auth = require('../middleware/auth');

router.post('/addcontact',auth,contactController.createContact);
router.get('/contactlist',contactController.contactList);
router.put('/updatecontact/:id',auth,contactController.updateContact);
router.delete('/deletecontact/:id',auth,contactController.deleteContact);
router.get('/:customerId',auth,contactController.getContactByCustomer);
router.get('/getbyid/:id',auth,contactController.getContactById);

module.exports = router;

