import { Router } from 'express';

import professionalTypeRouter 
from '../../../../modules/professionalType/infra/http/routes/professionalType.routes';

import professionalRouter from '../../../../modules/professional/infra/http/routes/professional.routes';

const routes = Router();
routes.use('/professional-type', professionalTypeRouter);
routes.use('/professional', professionalRouter);

export default routes;