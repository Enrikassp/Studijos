import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { readFromFile, writeToFile } from "./file-io.js";

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
server.use(express.json());

server.listen(8080, () => {
  console.log("Express serveris Sėkmingai pasileido. http://localhost:8080");
});

server.get("/saskaita", async (req, res) => {
  const { vardasContains, balansasDaugiau } = req.query;
  let saskaitos = await readFromFile("saskaitos.json");

  if (vardasContains) {
    saskaitos = saskaitos.filter((saskaita) =>
      saskaita.vardas.includes(vardasContains)
    );
  }

  if (balansasDaugiau) {
    saskaitos = saskaitos.filter(
      (saskaita) => saskaita.balansas > balansasDaugiau
    );
  }

  res.status(200).json(saskaitos);
});

server.get("/saskaita/:id", async (req, res) => {
  const saskaitos = await readFromFile("saskaitos.json");
  const saskaita = saskaitos.find((sask) => sask.id == req.params.id);

  if (!saskaita)
    return res.status(404).json({ message: "Įrašas buvo nerastas" });

  res.status(200).json(saskaita);
});

server.post("/saskaita/sukurti", async (req, res) => {
  const { vardas, pradinisBalansas } = req.body;

  if (!vardas)
    return res.status(400).json({ message: "Saskaitos vardas nepateiktas." });

  const saskaitos = await readFromFile("saskaitos.json");
  const id = await readFromFile("id.json");

  saskaitos.push({
    id: id.id,
    vardas: vardas,
    balansas: !pradinisBalansas ? 0 : pradinisBalansas,
  });

  id.id++;

  await writeToFile("saskaitos.json", saskaitos);
  await writeToFile("id.json", id);

  res.status(201).json({ message: "Nauja sąskaita buvo sėkmingai sukurta" });
});

server.post("/saskaita/:id/imoka", async (req, res) => {
  const { imoka } = req.body;
  if (!imoka || isNaN(imoka))
    return res.status(404).json({
      message: "Imoka turėtų būti pateikta kaip parametras bei būti skaičius",
    });
  const saskaitos = await readFromFile("saskaitos.json");
  const saskaita = saskaitos.find((sask) => sask.id == req.params.id);

  if (!saskaita)
    return res.status(404).json({ message: "Sąskaita buvo nerasta" });

  saskaita.balansas += imoka;
  writeToFile("saskaitos.json", saskaitos);
  res.status(201).json({ message: "Pinigai sėkmingai pridėti" });
});

server.post("/saskaita/:id/ismoka", async (req, res) => {
  const { ismoka } = req.body;
  if (!ismoka || isNaN(ismoka))
    return res
      .status(404)
      .json({ message: "Išmoka turėtų būti pateikta kaip parametras" });
  const saskaitos = await readFromFile("saskaitos.json");
  const saskaita = saskaitos.find((sask) => sask.id == req.params.id);

  if (!saskaita)
    return res.status(404).json({ message: "Sąskaita buvo nerasta" });

  if (ismoka > saskaita.balansas)
    return res
      .status(400)
      .json({ message: "Sąskaitoje yra nepakankamas pinigų likutis" });

  saskaita.balansas -= ismoka;
  writeToFile("saskaitos.json", saskaitos);
  res.status(201).json({ message: "Pinigai sėkmingai nuimti" });
});