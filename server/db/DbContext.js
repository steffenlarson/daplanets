import ValueSchema from "../models/Value";


import mongoose from "mongoose";

import GalaxySchema from "../models/Galaxy";
import StarSchema from "../models/Star";
import PlanetSchema from "../models/Planet";
import MoonSchema from "../models/Moon";



class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Galaxy = mongoose.model("Galaxy", GalaxySchema);
  Star = mongoose.model("Star", StarSchema);
  Planet = mongoose.model("Planet", PlanetSchema);
  Moon = mongoose.model("Moon", MoonSchema)

}

export const dbContext = new DbContext();
