import express from 'express';
import { ToxicPerson } from '../models/toxicPerson.model';

interface IToxicPersonParamsList {
  name: string;
  imageURL: string;
  imageTitle: string;
  trait1: string;
  trait2: string;
  trait3: string;
  trait4: string;
  trait5: string;
}

const createToxicPersonRequest = async (params: IToxicPersonParamsList) => {
  const newPersonRequest = new ToxicPerson({
    ...params,
  });
  const personRequest = await newPersonRequest.save();
  return personRequest;
};

export { IToxicPersonParamsList, createToxicPersonRequest };
