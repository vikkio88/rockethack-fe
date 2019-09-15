import axios from 'axios';
import { langCodes } from '../../__mocks__';


export const announcementService = {
    get(language = langCodes.EN) {
        return axios.get(`http://68.183.47.122:8080/event?language=${language}`);
    }
};