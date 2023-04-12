import { env } from "../environment";
import Controller from "./Controller";

class DashboardController extends Controller {
  getDataConsultation() {
    return fetch(env + "/consultations?params=" + this.token)
      .then((json) => json.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
  getDataVaccines() {
    return fetch(env + "/vaccinations?params=" + this.token)
      .then((json) => json.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
}

export const dashboard = new DashboardController();
