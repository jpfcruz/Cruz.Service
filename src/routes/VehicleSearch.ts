import { Express } from 'express'
import { IRouteModule } from './IRouteModule';

import { InventoryGateway } from '../gateways';

const inventory = new InventoryGateway();

export const VehicleSearch: IRouteModule = (app: Express) => {
  app.get('/vehicles', (req, res) => {
    inventory.search({
      make: [ "Honda" ],
    })
    .then((data) => res.json(data))
  })
}
