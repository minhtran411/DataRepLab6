import App from "../App";
import Contents from './contents';
import Footer from "./footer";

//Be careful when importing - take note of where the file is 



function Home() {
  return (
    <div className="homePage">
     
    <App></App>
    <Contents></Contents>
    <h1>My Home Page</h1>

    <Footer></Footer>
    </div>
  );
}



export default Home;