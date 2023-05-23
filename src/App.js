import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';



function App() {
    let page = 1
    const [images, setImages] = useState([])
    const handleSubmit = async (term) => {
    const result = await searchImages(term, page);
    //searchImages(term);

setImages(result)    
};
    return (
    <div>
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={images} />
        </div>
    );
}

export default App;