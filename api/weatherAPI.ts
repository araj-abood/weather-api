import axios from "axios";

export async function getWeather() {
  const response = await axios.get(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/amman?unitGroup=metric&key=U4ANMPAAE63GWSJU8W9X2LYER&contentType=json"
  );

  return response;
}
