import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Project from '../models/projectModel.js';


const projectRouter = express.Router();

projectRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const projects = await Project.find({});
    res.send(projects);
  })
);

projectRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    const createdProjects = await Project.insertMany(data.projects);
    res.send({ createdProjects });
  })
);

projectRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);
    if (project) {
      res.send(project);
    } else {
      res.status(404).send({ message: 'Project Not Found' });
    }
  })
);

projectRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const project = new Project({
      name: 'project name ' + Date.now(),
      description: 'Description of the new project and main objectives',
      github_url: 'Url of github repository',
      participants: 0,
      creator: 'Name of creator',
    });
    const createdProject = await project.save();
    res.send({ message: 'Project Created', project: createdProject });
  })
);

projectRouter.put(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const projectId = req.params.id;
    const project = await Project.findById(projectId);
    if (project) {
      project.name = req.body.name;
      project.description = req.body.description;
      project.github_url = req.body.github_url;
      project.participants = req.body.participants;
      project.creator = req.body.creator;
      const updatedProject = await project.save();
      res.send({ message: 'Project Updated', project: updatedProject });
    } else {
      res.status(404).send({ message: 'Project Not Found' });
    }
  })
);

projectRouter.delete(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);
    if (project) {
      const deleteProject = await project.remove();
      res.send({ message: 'Project Deleted', project: deleteProject });
    } else {
      res.status(404).send({ message: 'Project Not Found' });
    }
  })
);



export default projectRouter;