import { env } from "../environment";
import Controller from "./Controller";

class SpotsController extends Controller {
  async getData() {
    return fetch(env + "/spots?params=" + this.token)
      .then((json) => json.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  async getDataDetail(id, date) {
    return fetch(
      env + `/spots/${id}?params=` + this.token + (date ? "&date=" + date : "")
    )
      .then((json) => json.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
  async sendData({ date, spot_id }) {
    return fetch(env + `/vaccinations?params=` + this.token, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: date, spot_id: spot_id }),
    })
      .then((json) => json.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
}

export const spots = new SpotsController();
