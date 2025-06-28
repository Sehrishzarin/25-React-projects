import './App.css'
// import StarRating from './components/project 3/rating'
// import Accordion from './components/project 1/accordian'
// import RandomColor from './components/project 2/randomcolor'
import ImageSlider from './components/project 4/image-slider'
import LoadMoreData from './components/project 5/load-more-data'

function App() {

  return (
    <>
    <div className="App">
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      {/* <StarRating/> */}
          {/* Image slider component */}
       {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />  */}
      <LoadMoreData/>
    </div>
      
    </>
  )
}

export default App
