import mongoose from "mongoose";
import { environment } from './environment/environment.dev';

mongoose.connect(environment.getEnv().mongoUri)