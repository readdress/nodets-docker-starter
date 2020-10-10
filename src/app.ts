import path from "path";
import express from "express";

import withRoutes from "./withRoutes";

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

export default withRoutes(app);
