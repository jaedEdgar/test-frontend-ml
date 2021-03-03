import express from "express";
import path from "path";
import handlePageRequest from "./handlePageRequest";

const app = express();

app.use(express.static(path.join(__dirname)));

app.get("/", handlePageRequest);
app.get("/items/:id", handlePageRequest);
app.get("/items", handlePageRequest);


export default app