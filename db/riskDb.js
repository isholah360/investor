import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  riskTolerance: { type: Number, required: true },
  nigerianStocks: { type: Number, required: true },
  foreignStocks: { type: Number, required: true },
  techStocks: { type: Number, required: true },
  emergingStocks: { type: Number, required: true },
  nigerianBonds: { type: Number, required: true },
  foreignBonds: { type: Number, required: true },
  commodities: { type: Number, required: true },
  realEstate: { type: Number, required: true },
  tBills: { type: Number, required: true },
  alternative: { type: Number, required: true }
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

export default Portfolio
