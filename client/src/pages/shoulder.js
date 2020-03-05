import React,{Component} from "react";
import HeroSmall from "../components/HeroSmall";
import Container from "../components/Container";
import NavbarC from "../components/NavbarC/index";
import InstagramEmbed from 'react-instagram-embed';
import Button from "react-bootstrap/Button";
import API from "../utils/API"
import AOS from "aos";
//shoulder class component
class Shoulder extends Component {
  constructor(props){

    super(props)
    AOS.init({
      duration: 2000
        })
  }

handleSubmit (e) {
    var url = e.target.value;
    console.log(url)
    //storing userId in the local storage.
     let userId = localStorage.getItem("userID");
    //passing userid and url to the API. 
 API.getFavorite(userId,url).then(function() {
      window.location.replace("/favorites");

     })
   }
   render(){

  return (
    <div>
      <NavbarC />
      <div>
        <HeroSmall backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
          <h1>Shoulder Videos</h1>
        </HeroSmall>
        <Container style={{ marginTop: 55, marginRight: 190 }}>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <p>
                <br></br>
                <InstagramEmbed
                  url='https://www.instagram.com/p/B2mC2C2DPiM'
                  maxWidth={400}
                  hideCaption={true}
                  containerTagName='div'
                  protocol=''
                  injectScript
                  onLoading={() => { }}
                  onSuccess={() => { }}
                  onAfterRender={() => { }}
                  onFailure={() => { }}
                />
                <Button  
                  value='https://www.instagram.com/p/B2mC2C2DPiM'
                  onClick ={this.handleSubmit}>Favorite</Button>

              </p>
            </div>
            <div className="col-lg-6">
              <br></br>
              <div font="bold">
                <br></br>
                <h4 align="center">Dr. Tony Comella PT, DPT, CSCS</h4>
              </div>
              <div className="row" font="bold">
                <h5><a href="https://www.instagram.com/tony.comella/">Dr. Comella on Instagram</a></h5>
              </div>
              <div className="row" font="bold">
                <br></br>
                <p>Dr. Tony Comella received his Bachelor of Science degree from UC Davis, and his Doctorate of Physical Therapy from Massachusetts General Hospital Institute of Health Professions. Along with being a physical therapist, he is also a Certified Strength and Conditioning Specialist and a USA Weightlifting level 1 Sports Performance Coach. He is also a founding member of the rehabilitation page E3Rehab.</p>
              </div>
              <div className="row" font="bold">
                <p><a href="https://www.linkedin.com/in/tony-comella-91205928">Dr. Comella on LinkedIn</a></p>
              </div>
              <div className="row" font="bold">
                <p><a href="https://www.moveandadapt.com/">Dr. Comella's Website</a></p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <p>
                <br></br>
                <InstagramEmbed
                  url='https://www.instagram.com/p/BrpujmWl5iW'
                  maxWidth={400}
                  hideCaption={true}
                  containerTagName='div'
                  protocol=''
                  injectScript
                  onLoading={() => { }}
                  onSuccess={() => { }}
                  onAfterRender={() => { }}
                  onFailure={() => { }}
                />
                <Button  
                  value='https://www.instagram.com/p/BrpujmWl5iW'
                  onClick ={this.handleSubmit}>Favorite</Button>


              </p>
            </div>
            <div className="col-lg-6">
              <br></br>
              <div font="bold">
                <h4 align="center">Dr. Nick Helton, PT, DPT, OCS</h4>
              </div>
              <div className="row" font="bold">
                <h5><a href="https://www.instagram.com/dr.nick.dpt/">Dr. Helton on Instagram</a></h5>
              </div>
              <div className="row" font="bold">
                <br></br>
                <p>Dr. Nick Helton has 7+ years of working exclusively with musculoskeletal injuries in the active and athletic population. He has a Master’s in Physical Therapy from Northern Illinois University, and has subsequently obtained a Doctorate in Physical Therapy, with emphasis on Musculoskeletal treatment. He is board certified in Orthopedic Physical Therapy. Dr. Nick has also underwent an extensive Manual Therapy certification, and is a certified strength and conditioning specialist through the National Academy of Sports Medicine</p>
              </div>
              <div className="row" font="bold">
                <p>Dr. Nick’s treatment philosophy involves: active listening and problem solving, addressing the root cause of the problem, and working towards building a stronger, healthy life.</p>
              </div>
              <div className="row" font="bold">
                <p><a href="https://drnickhelton.com/">Dr. Helton's Website</a></p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <p>
                <br></br>
                <InstagramEmbed
                  url='https://www.instagram.com/tv/B3kANWyAi5I'
                  maxWidth={400}
                  hideCaption={true}
                  containerTagName='div'
                  protocol=''
                  injectScript
                  onLoading={() => { }}
                  onSuccess={() => { }}
                  onAfterRender={() => { }}
                  onFailure={() => { }}
                />
                <Button  
                  value='https://www.instagram.com/tv/B3kANWyAi5I'
                  onClick ={this.handleSubmit}>Favorite</Button>

              </p>
            </div>
            <div className="col-lg-6">
              <br></br>
              <div font="bold">
                <h4 align="center">Joe Yoon</h4>
              </div>
              <div className="row" font="bold">
                <h5><a href="http://instagram.com/joetherapy">JoeTherapy on Instagram</a></h5>
              </div>
              <div className="row" font="bold">
                <br></br>
                <p>Joe Yoon is a massage therapist, personal trainer, and founder of Joe Therapy, a company that provides massage therapy at his clinic in Orlando, FL. He graduated from Quinnipiac University in 2009 with a Bachelor of Science degree in Health and Science Studies and was certified as a personal trainer by the National Academy of Sports Medicine. He is also the author of the book Better Stretching. </p>
              </div>
              <div className="row" font="bold">
                <p><a href="https://www.amazon.com/gp/product/1250248213/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1250248213&linkCode=as2&tag=joetherapy-20&linkId=89f35f7b3e2c99eb74dbf003b46f1cc1">Joe Yoon's book on Amazon</a></p>
              </div>
              <div className="row" font="bold">
                <p><a href="http://linkedin.com/in/joetherapy">Joe Yoon's Linkedin</a></p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <p>
                <br></br>
                <InstagramEmbed
                  url='https://www.instagram.com/tv/B33bfcZi3Lc'
                  maxWidth={400}
                  hideCaption={true}
                  containerTagName='div'
                  protocol=''
                  injectScript
                  onLoading={() => { }}
                  onSuccess={() => { }}
                  onAfterRender={() => { }}
                  onFailure={() => { }}
                />
                <Button  
                  value='https://www.instagram.com/tv/B33bfcZi3Lc'
                  onClick ={this.handleSubmit}>Favorite</Button>
              </p>
            </div>
            <div className="col-lg-6">
              <br></br>
              <div font="bold">
                <h4 align="center">The Prehab Guys</h4>
              </div>
              <div className="row" font="bold">
                <h5><a href="https://www.instagram.com/theprehabguys">The Prehab Guys on Instagram</a></h5>
              </div>
              <div className="row" font="bold">
                <h5>Arash Maghsoodi, PT, DPT, CSCS</h5>
              </div>
              <div className="row" font="bold">
                <br></br>
                <p>Arash recieved his Bachelor of Science degree in Kinesiology from San Diego State University. He has had clinical clerkships primarily in the orthopedic and sports setting including: Glendale Adventist Medical Center (TWC), California Rehab and Sports Therapy, Lavayen PT, and USC PT Associates.</p>
              </div>
              <div className="row" font="bold">
                <h5>Michael Lau, PT, DPT, CSCS</h5>
              </div>
              <div className="row" font="bold">
                <br></br>
                <p>Michael is a licensed physical therapist and certified strength and conditioning specialist. He received his Doctorate in Physical Therapy from the University of Southern California and his bachelor’s of science degree in physiology from the University of California, Los Angeles. </p>
              </div>
              <div className="row" font="bold">
                <h5>Craig Lindell, PT, DPT, CSCS</h5>
              </div>
              <div className="row" font="bold">
                <br></br>
                <p>Craig Lindell received his Bachelor of Science degree in kinesiology from the Pennsylvania State University and recieved his Doctor of Physical Therapy Degree at the University of Southern California. Craig has experience with movement disorders and stroke rehabilitation, and is a Parkinson’s Wellness Recovery (PWR!) certified therapist. Craig has a special interest in golf, crossfit, and neurologic rehabilitation.</p>
              </div>
              <div className="row" font="bold">
                <br></br>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
export default Shoulder;