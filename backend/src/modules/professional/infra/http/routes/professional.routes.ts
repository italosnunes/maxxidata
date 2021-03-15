import { Router } from  'express';

import ProfessionalController from '../controllers/ProfessionalController';

const professionalRouter = Router();
const controller = new ProfessionalController();

professionalRouter.get('/', controller.index);
professionalRouter.post('/', controller.create);
professionalRouter.put('/', controller.update);
professionalRouter.delete('/', controller.delete);

export default professionalRouter;