import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
     <div className ="navbar">
      <nav>
        <h2 className = "logo">logo</h2>
      <ul>
        <li>
          home
        </li>
        <li>
          about
        </li>
        <li>
          service
        </li>
        <li>
          contact
        </li>
      </ul>
    <button type ="button">
      welcome
    </button>
      </nav>
      </div>
      <div className = "section">
            <h1>hello this a section </h1>
      </div>
      <div className = "footer">
        <h3>
          this is a footer
        </h3>
        <p>
          this is simple footer zoepfvjzo fvjozvmfjvmofjvmflvnlk,oihdzezeezefzefvlkgbjgfobj!
        </p>
        <ul className = "socials">
          <li><a href="#" class="fa fa-facebook"></a></li>
          <li><a href="#" class="fa fa-twitter"></a></li>
          <li><a href="#" class="fa fa-instagram"></a></li>
          <li><a href="#" class="fa fa-google"></a></li>
        </ul>

      </div>
    </div>
  );
}

export default App;
