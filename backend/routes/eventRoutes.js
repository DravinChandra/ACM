import express from "express";

const router = express.Router();

const events = [
  {
    id: 1,
    title: "CodeSprint",
    description: "A coding challenge for students",
  },
  {
    id: 2,
    title: "Web Development Workshop",
    description: "Learn HTML, CSS and JavaScript",
  },
  {
    id: 3,
    title: "Tech Quiz",
    description: "Test your technical knowledge",
  },
];

router.get("/", (req, res) => {
  res.json(events);
});

router.get("/:id", (req, res) => {
  const event = events.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  res.json(event);
});

export default router;