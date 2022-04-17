import cheerio from 'cheerio';
import axios from 'axios';

const {data} = await axios.get('https://gogoanime.fi/anime-list.html');

const $ = cheerio.load(data);

$('.listing > li > a')
