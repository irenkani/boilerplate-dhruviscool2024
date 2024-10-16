import express from 'express';
import { ToxicPerson } from '../models/toxicPerson.model';

const router = express.Router();

router.post('/', async (req, res) => {
  const personData = req.body;

  try {
    // Create a new instance of ToxicPerson
    const toxicPerson = new ToxicPerson({
      name: personData.firstName,
      pokemonImage: personData.imageURL,
      pokemonName: personData.imageTitle,
      toxicTrait1: personData.toxictrait1,
      toxicTrait2: personData.toxictrait2,
      toxicTrait3: personData.toxictrait3,
      toxicTrait4: personData.toxictrait4,
      toxicTrait5: personData.toxictrait5,
    });

    // Save the toxic person to the database
    await toxicPerson.save();

    // Respond with the saved toxic person
    res.status(201).json(toxicPerson);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  console.log('Get receieved');
  try {
    const toxicPersons = await ToxicPerson.find();
    res.json(toxicPersons);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
