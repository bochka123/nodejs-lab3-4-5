import {mongoUri} from "../config";

const mongoose = require('mongoose');


mongoose.connect(mongoUri);
