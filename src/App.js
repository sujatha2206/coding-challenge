import React, { useState } from 'react';
import './App.css';
import LoadPdf from './LoadPdf';
//import LoadHtml from './LoadHtml';
//import { Page} from '../src/assets/html';
//var htmlDoc = {__html: Page};
function App() {
  const [numPages, setNumPages] = useState(null);
  //const [pageNumber, setPageNumber] = useState(1);
  //const [page,setPage]=useState(null);
  const files=[];
  //const fileName="assets/html/20.03.2020";

    // for(var i=1;i<14;i++){
    //   files.push(+"20.03.2020"+"-"+i+".html");
      
    // }
    // const load=null;
    // files.map(file=>{
    //   console.log(file);
    //   const page=require(file);
    //     setPage({ __html: page });
    // //     load=<LoadHtml files={page}/>
    //   })
   
   

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="App-flex-container">
    <div className="App-flex-item-left">
     {/* // <div dangerouslySetInnerHTML={htmlDoc} /> */}
      </div>
    <div className="App-flex-item-right">
    <LoadPdf onDocumentLoadSuccess={onDocumentLoadSuccess} numPages={numPages}/>
      
    </div>
  </div>
  );
}

export default App;
