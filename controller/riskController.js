import Portfolio from "../db/riskDb.js";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv()




export const createPortfolio = async (req, res)=>{
    try {
      const portfolio = await Portfolio.find()
      res.status(200).json(portfolio)
    } catch (error) {
      console.log(error)
    }
}

export const createById = async (req, res)=>{
  const id = req.params.id
  try {
    const portfolio = await Portfolio.findById(id)
    res.status(200).json(portfolio)
  } catch (error) {
    console.log(error)
  }
}


export const getSingle = async (req, res) => {
  
  const riskTolerance = parseInt(req.params.riskTolerance, 10);

  if (isNaN(riskTolerance)) {
    return res.status(400).json({ message: 'Invalid riskTolerance value' });
  }

  try {
    
    const portfolio = await Portfolio.find({ riskTolerance: riskTolerance });
    if (portfolio.length === 0 ) {
      return res.status(404).json({ message: 'No portfolio found for the given riskTolerance' });
    }
    res.status(200).json(portfolio);
  } catch (error) {
   
    console.error(error);
    res.status(500).json({ message: 'An error occurred while retrieving the portfolio' });
  }
};




