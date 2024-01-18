export default function FoodMenu() {
// https://stackoverflow.com/questions/36382249/embed-pdf-in-mobile-browsers
    return (
        <object data="mypdf.pdf" type="application/pdf" frameborder="0" width="100%" height="100%" >
            <embed src="https://drive.google.com/file/d/1yaYBi6NA20U1zyoRvqsX5840TmfFusL9/preview?usp=sharing" width="100%" height="1200px"/> 
        </object>        
    )
  }
