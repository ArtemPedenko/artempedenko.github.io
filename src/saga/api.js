import axios from "axios";

export default function getCitiesDataApi() {
  return axios.get(
    `https://gist.githubusercontent.com/curran/13d30e855d48cdd6f22acdf0afe27286/raw/0635f14817ec634833bb904a47594cc2f5f9dbf8/worldcities_clean.csv`
  );
}
