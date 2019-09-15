import axios from 'axios';
import { langCodes } from '../../__mocks__';


export const announcementService = {
    get(language = langCodes.EN) {
        return axios.get(`?language=${language}`);
    }
};