import './App.css';
import {useEffect} from 'react'
// components import
import Layout from './components/Layout'
import MainBanner from './components/MainBanner'
import SectionIntro from './components/SectionIntro';
import BrowserCard from './components/BrowserCard'
import Button from './components/Button';
import QuestionSection from './components/QuestionSection';
import Banner from './components/Banner'

// images and icon imports 
import HeroImg from './images/illustration-hero.svg'
import imageOne from './images/illustration-features-tab-1.svg'
import imageTwo from './images/illustration-features-tab-2.svg'
import imageThree from './images/illustration-features-tab-3.svg'
import Chrome from './images/logo-chrome.svg'
import Firefox from './images/logo-firefox.svg'
import Opera from './images/logo-opera.svg'

function App() {

  return (
    <div className="App">
      <Layout>
        <div className="banner-wrapper">
          <MainBanner
            image={HeroImg}
            title={"A Simple Bookmark Manager"}
            content={
              "A clean and simple interface to organize your favourite websites. Open a new   browser tab and see your sites load instantly. Try it for free."
            }
          />
        </div>

        {/* Features section */}
        <SectionIntro
          title={"Features"}
          content={
            "Our aim is to make it quick and easy for you to access your favorite websites.Your bookmarks sync between your devices so you can access them on the go."
          }
        />

        {/* Tabs section  */}
        <div className="d-flex justify-content-center">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="nav flex-column flex-md-row nav-pills me-3 mb-5" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Simple Bookmarking</button>
              <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Speedy Searching</button>
              <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Easy Sharing</button>
            </div>
            <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

              <Banner title={"Bookmark in one click"} content={"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."} image={imageOne} />


              </div>
              <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
              
              <Banner title={"Intelligent search"} content={"Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks."} image={imageTwo} /></div>
              
              <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
              
              <Banner title={"Share your bookmarks"} content={"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."} image={imageThree} /></div>


            </div>
          </div>        
        </div>


        {/* Download extension section */}
        <SectionIntro
          title={"Download the extension"}
          content={
            "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize."
          }
        />

        <div className="browserCards">
          <BrowserCard
            image={Chrome}
            title={"Add to Chrome"}
            text={"Minimum version 62"}
            btnText={"Add & Install Extension"}
          />

          <BrowserCard
            image={Firefox}
            title={"Add to Firefox"}
            text={"Minimum version 55"}
            btnText={"Add & Install Extension"}
          />

          <BrowserCard
            image={Opera}
            title={"Add to Opera"}
            text={"Minimum version 46"}
            btnText={"Add & Install Extension"}
          />
        </div>

        {/* Frequently asked questions section */}

        <SectionIntro
          title={"Frequently asked questions"}
          content={
            "Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
          }
        />

        <div className="questionsTab container">
          <QuestionSection />
          <div className="questionsTab__button">
            <Button text={"More Info"} href={"#"} />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
