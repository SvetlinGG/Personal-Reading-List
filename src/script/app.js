import { searchBooks, getBooksById } from './api.js';

const el = {
    form: document.getElementById('searchForm'),
    q: document.getElementById('q'),
    resultsGrid: document.getElementById('resultsGrid'),
    cardTpl: document.getElementById('cardTpl'),
    
}

const state = {
    q: '',
    page: 1,
    total: 0
}

function setLoading(){
    el.resultsGrid.innerHTML = '<p>Loading...</p>';

}