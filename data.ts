import axios from "axios";

async function getIncidence(): Promise<object> {
  let result: object = {};
  await axios
    .get(
      "https://raw.githubusercontent.com/knudmoeller/berlin_corona_cases/master/data/target/berlin_corona_traffic_light.json"
    )
    .then((res) => {
      let rate = res.data[0].indicators.incidence_new_infections.value;
      result = { rate };
    });
  return result;
}

export { getIncidence };
