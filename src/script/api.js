
const API_URL = "/src/data/sample-books.json";
const API_KEY = "";

async function fetchJSON(params){
    const res = await fetch(`${API_URL}`);
    //console.log(res);
    const data = await res.json();
    console.log(data);
    
    return data;

}

export async function  searchBooks({ q, page = 1}){
    return fetchJSON({s: q, page});
}

export async function getBookById(id){
    return fetchJSON({ i: id, plot: 'full' });
}