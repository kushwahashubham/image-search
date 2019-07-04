import axios from 'axios';

export default axios.create(
    {
        headers: {
            Authorization: 'Client-ID 564337fe7636c24113ab9363c9a2b4a7404dad2dba4cc31f4fcd828d1678dc67'
        },
        baseURL: 'https://api.unsplash.com'
    }
);