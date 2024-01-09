
const apiUrl= 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

const api = {
    methods:'GET',
    headers:{
        XapiKey: apiUrl,
    }
}

const apiKey = 'QygFoVMZe74I30Ant5aPGg==x6G5mAKSQHv28rp7'

async function getAllUsers(){
    try {
        const response = await fetch(api,apiKey);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        
    }
}
getAllUsers()