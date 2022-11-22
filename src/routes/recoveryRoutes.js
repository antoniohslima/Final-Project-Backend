import BaseRoute from './baseRoutes';
import RecoveryController from '../controllers/RecoveryController';
import RecoverySchema from '../schema/RecoverySchema';

class RecorveryRoutes extends BaseRoute {
  setup() {
    this.router.post('/recovery_password', this.SchemaValidator.Validate(RecoverySchema.recovery), RecoveryController.recovery);
    this.router.get('/validate-token-password/:token', this.SchemaValidator.Validate(RecoverySchema.token), RecoveryController.validateToken);
    this.router.put('/change-password/:token', this.SchemaValidator.Validate(RecoverySchema.change), RecoveryController.changePassword);

    return this.router;
  }
}

export default new RecorveryRoutes();
