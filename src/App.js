import './App.css';
import { Header } from './main/header.jsx';
import { NavBar } from './main/nav-bar';
import { Post } from './modules/post/post';
import "./main/main.css";
import { Profil } from './modules/profil/profil.jsx';
import { SignUp } from './modules/signup/sign-up';

function App() {
  return (
    <>
      <Header />
        <main>
          {/*<NavBar />*/}
          {/*<Post />*/}
          {/* <Profil/> */}
          <SignUp/>
        </main>
    </>
  );
}

export default App;