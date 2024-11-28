import { URL } from "../config/URL.js";

export async function fetchCampaignTypes() {
    const response = await fetch(URL + 'CampaignType');
    const campaignTypeData = await response.json();
    return campaignTypeData;
}