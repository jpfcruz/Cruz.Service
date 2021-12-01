import axios from 'axios'
import { VehicleSearchCriteria, VehicleSearchResult } from './types';

export class InventoryGateway {
  public async search(criteria: Partial<VehicleSearchCriteria>): Promise<VehicleSearchResult> {
    let res = {} as VehicleSearchResult;

    try {
      const post = await axios.post<VehicleSearchResult>(
        'https://inventoryapi.chassis.dev/api/v1/Search/Vehicle',
        criteria,
        {
          headers: {
            'X-API-KEY': '07E02633-AF76-4D04-803E-7F0A7E63B2AC'
          }
        }
      )

      if (post.status === 200) {
        res = post.data;
      }
    }
    catch (err) {
      console.warn(err)
    }

    return res;
  };
}
        // httpAgent: new Agent({ rejectUnauthorized: false }),
