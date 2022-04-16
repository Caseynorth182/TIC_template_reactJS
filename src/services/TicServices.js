

class TicService {
    _apiBase: 'https://strapi-mag.herokuapp.com/articles';


    getResource = async (url) => {
        let res = await fetch(url)

        if (!res.ok) {
            throw new Error('Error')

        }

        return await res.json();

    }

    getContent = async () => {
        return await this.getResource('https://strapi-mag.herokuapp.com/articles');

    }




}


export default TicService;