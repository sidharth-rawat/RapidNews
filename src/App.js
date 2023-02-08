import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './compoent/Footer/Footer';
import NaInshort from './compoent/NaInshort';
import NewsContent from './compoent/newscontent/NewsContent';

function App() {
  const [categories, setcategories] = useState("national");
  const [newsArray, setNewsArray] = useState([]);
  const [newsresult, setNewsresult] = useState();
  
    const newsApi  = async () =>{
      try {
        const news = await axios.get(`https://inshorts.deta.dev/news?category=${categories} `);
        setNewsArray([...news.data.data]);
        // console.log(news.data.data);
        setNewsresult(news.data.length);
      } catch (error) {
        console.log(error);
      }
    }
// console.log(newsArray);
    useEffect(() => {
      newsApi();
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newsresult, categories ]);

  return (
 
    <div className="App">
      
      <NaInshort setcategories={setcategories}/>
      <NewsContent newsArray={newsArray} newsresult={newsresult}  />
      <Footer/>
    </div>
      );

}

export default App;
