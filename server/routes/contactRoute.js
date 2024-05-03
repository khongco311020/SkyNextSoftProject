import express from "express";
import Contact from "../models/contactModel.js";

const router = express.Router();

// Route for save a new Contact
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.fullname ||
      !request.body.email ||
      !request.body.message ||
      !request.body.phone
    ) {
      return response.status(400).send({
        message: "Send all required fields: fullname, email, message, phone",
      });
    }
    const newContact = {
      fullname: request.body.fullname,
      email: request.body.email,
      phone: request.body.phone,
      message: request.body.message,
    };

    const contact = await Contact.create(newContact);
    return response.status(201).send(contact);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Contacts from database
router.get("/", async (request, response) => {
  try {
    const contacts = await Contact.find({});

    return response.status(200).json({
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Contact from database
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const contact = await Contact.findById(id);

    return response.status(200).json(contact);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update One Contact from database
// router.put("/:id", async (request, response) => {
//   try {
//     if (
//       !request.body.fullname ||
//       !request.body.email ||
//       !request.body.message ||
//       !request.body.phone
//     ) {
//       return response.status(400).send({
//         message: "Send all required fields: fullname, email, message, phone",
//       });
//     }

//     const { id } = request.params;

//     const result = await Contact.findByIdAndUpdate(id, request.body);

//     if (!result) {
//       return response.status(404).json({ message: "Contact not found" });
//     }

//     return response
//       .status(200)
//       .send({ message: "Contact update successfully" });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// Router for Delete a contact
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Contact.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Contact not found" });
    }
    return response
      .status(200)
      .send({ message: "Contact delete successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
