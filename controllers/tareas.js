import Tareas from "../models/data.js";

const addTarea = (req, res) => {
  res.status(200).render("../views/index");
};

const newTarea = (req, res) => {
  const { titulo, tarea } = req.body;
  Tareas.push({ id: Tareas.length + 1, titulo, tarea });
  console.log(Tareas);
  res.status(201).redirect("/nuevatareas");
};

const viewTareas = (req, res) => {
  res.status(200).render("../views/tareas", {
    Tareas: Tareas,
  });
};

const getTarea = (req, res) => {
  const { tareaId } = req.params;
  const unicaTarea = Tareas.find((tarea) => tarea.id === Number(tareaId));
  if (!unicaTarea) {
    return res.status(404).send("Task Does Not Exist");
  }
  res.status(200).render("../views/tarea", {
    tarea: unicaTarea,
  });
};

export  {
  addTarea,
  newTarea,
  viewTareas,
  getTarea,
};

