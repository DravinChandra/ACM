
import express from "express";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFile = path.join(
  __dirname,
  "../data/registrations.json"
);

router.post("/", async (req, res) => {
  try {
    const { name, email, eventId } = req.body;

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof eventId !== "string" ||
      !eventId.trim()
    ) {
      return res.status(400).json({
        message: "Valid name, email and event are required",
      });
    }

    await fs.mkdir(path.dirname(dataFile), {
      recursive: true,
    });

    let registrations = [];

    try {
      const data = await fs.readFile(dataFile, "utf8");
      registrations = JSON.parse(data);

      if (!Array.isArray(registrations)) {
        throw new Error("Invalid registrations data");
      }
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }

    const registration = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      eventId: eventId.trim(),
      createdAt: new Date().toISOString(),
    };

    registrations.push(registration);

    await fs.writeFile(
      dataFile,
      JSON.stringify(registrations, null, 2),
      "utf8"
    );

    console.log("Registration saved:", registration.email);

    res.status(201).json({
      message: "Registration successful!",
      registration,
    });
  } catch (error) {
    console.error("Registration error:", error);

    res.status(500).json({
      message: "Could not save registration",
    });
  }
});

export default router;
