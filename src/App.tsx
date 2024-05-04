import { useState, useEffect, useMemo } from "react";
import "./App.css";
import { requestProductsByQuery } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";



function App() {

  interface ImageData {
    id: string;
    alt_description: string;
    urls: {
        small: string;
        regular: string;
    };
}


  const [isLoad, setisLoad] = useState<boolean>(false);
  const [isError, setisError] = useState<boolean>(false);
  const [searchImage, setSearchImage] = useState<string>("");
  const [imagesData, setimagesData] = useState<ImageData[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>("");
  const [totalImageOnApi, setTotalImageOnApi] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const IMAGE_PER_PAGE = 12;

  
  // searchBox
  const onSubmit = (eventValue: string) => {
    if (eventValue !== searchImage) {
      setSearchImage(eventValue);
      setCurrentPage(1);
      setimagesData([]); 
    }
};

  

  // // Memo requestProductsByQuery
    const fetchData = async (searchImage: string, currentPage: number): Promise<void> => {
      if (searchImage) {
        try {
          setisError(false);
          setisLoad(true);
          const data:any = await requestProductsByQuery(searchImage as string, IMAGE_PER_PAGE as number, currentPage as number);
          setimagesData((previmagesData:ImageData[]) => [...previmagesData, ...data.results]); 
          setTotalImageOnApi(data.total as number);
          // console.log('data', data);
          
        } catch (error) {
          setisError(true);
        } finally {
          setisLoad(false);
        }
      }
    };


  // request
  useEffect(() => {
    if (searchImage) {
      fetchData(searchImage, currentPage);
    }
  }, [searchImage, currentPage]);
  

  // modal
  const onClickOnImage = (imageUrl : string): void => {
    setSelectedImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  // load more
  const onClickLoadMore = (): void => {
    setCurrentPage(prevPage => prevPage + 1); 
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {imagesData.length>0 && <ImageGallery Images={imagesData} onClickOnImage={onClickOnImage} />}
      {modalIsOpen && <ImageModal imageUrl={selectedImageUrl} modalIsOpen={modalIsOpen} onRequestClose={closeModal} />}
      {isLoad && <Loader />}
      {isError && <ErrorMessage />}
      {(currentPage * IMAGE_PER_PAGE < totalImageOnApi) && <LoadMoreBtn onClickLoadMore={onClickLoadMore} />}
    </>
  );
}

export default App;