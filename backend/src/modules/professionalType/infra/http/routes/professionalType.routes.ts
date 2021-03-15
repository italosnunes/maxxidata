import { Router } from 'express';

import ProfessionalTypeRepositoryController from '../controllers/ProfessionalTypeController';

const professionalTypeRouter = Router();
const controller = new ProfessionalTypeRepositoryController();

professionalTypeRouter.get('/', controller.index);
professionalTypeRouter.post('/', controller.create);
professionalTypeRouter.put('/', controller.update);
professionalTypeRouter.delete('/',controller.delete);

export default professionalTypeRouter;