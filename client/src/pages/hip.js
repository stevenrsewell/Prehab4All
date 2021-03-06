import React, { Component } from "react";
import HeroSmall from "../components/HeroSmall";
import Container from "../components/Container";
import NavbarC from "../components/NavbarC/index";
import InstagramEmbed from 'react-instagram-embed';
import Button from "react-bootstrap/Button";
import API from "../utils/API"
import AOS from "aos";

class Hip extends Component {
  constructor(props) {

    super(props)
    AOS.init({
      duration: 2000
        })
  }

  handleSubmit(e) {
    var url = e.target.value;
    console.log(url)
    let userId = localStorage.getItem("userID");
    API.getFavorite(userId, url).then(function () {
      window.location.replace("/favorites");

    })
  }
  render() {

    return (
      <div>
        <NavbarC />
        <div>
          <HeroSmall backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
            <h1>Hip Videos</h1>
          </HeroSmall>
          <Container style={{ marginTop: 55, marginRight: 190 }}>
            <div className="row">
              <div className="col-lg-6" data-aos="fade-right">
                <p>
                  <br></br>

                  <InstagramEmbed
                    url='https://www.instagram.com/tv/BpDhNwEAiGh'
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
                    value='https://www.instagram.com/tv/BpDhNwEAiGh'
                    onClick={this.handleSubmit}>Favorite</Button>

                </p>
              </div>
              <div className="col-lg-6">
                <br></br>
                <div className="row" font="bold">
                  <br></br>
                  <h4>Dr. Jacob Harden</h4>
                </div>
                <div className="row" font="bold">
                  <h5><a href="https://www.instagram.com/dr.jacob.harden/">Dr. Harden on Instagram</a></h5>
                </div>
                <div className="row" font="bold">
                  <br></br>
                  <p>Director of Rehabilitation at Orlando Sports Rehab</p>
                </div>
                <div className="row" font="bold">
                  <p>Doctor Jacob Harden is a chiropractor currently practicing in Florida who creates prehabilitation and rehab content on social media.</p>
                </div>
                <div className="row" font="bold">
                  <p><a href="https://www.youtube.com/channel/UCvaTM4jXDACmZMFUYDNGeDw">Dr. Harden's Youtube Channel</a></p>
                </div>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-right">
                <p>
                  <br></br>
                  <br></br>

                  <InstagramEmbed
                    url='https://www.instagram.com/tv/Bz9ZgrRFKxV'
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
                    value='https://www.instagram.com/tv/Bz9ZgrRFKxV'
                    onClick={this.handleSubmit}>Favorite</Button>


                </p>
              </div>

              <div className="col-lg-6">
                <br></br>
                <br></br>
                <div className="row" font="bold">
                  <h4>Dr. Katie Clare</h4>
                </div>
                <div className="row" font="bold">
                  <h5><a href="https://www.instagram.com/drkatie_clare/">Dr. Clare on Instagram</a></h5>
                </div>
                <div className="row" font="bold">
                  <br></br>
                  <p>Dr. Katie Clare is the owner of Dauntless Sport and Spine Clinic based in Edina, MN. She is a Doctor of Chiropractic medicine that completed post-doctoral work in sports medicine earning a Chiropractic Sports Practitioner certification. On her instagram account she provides tips/info to #fixyourself in videos with simplified (p)rehab breakdowns.</p>
                </div>
                <div className="row" font="bold">
                  <p><a href="https://drkatieclare.com/">Dr. Clare's Website</a></p>
                </div>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-right">
                <p>
                  <br></br>
                  <br></br>

                  <InstagramEmbed
                    url='https://www.instagram.com/tv/Bz_Gwm6jX3V'
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
                    value='https://www.instagram.com/tv/Bz_Gwm6jX3V'
                    onClick={this.handleSubmit}>Favorite</Button>
                </p>
              </div>
              <div className="col-lg-6">
                <br></br>
                <br></br>

                <div className="row" font="bold">
                  <h4>Dr. Kip Thorstenson, DPT, CSCS</h4>
                </div>
                <div className="row" font="bold">
                  <h5><a href="https://www.instagram.com/teachbyexample/">Teach By Example Instagram</a></h5>
                </div>
                <div className="row" font="bold">
                  <br></br>
                  <p>Doctor Kip Thorstenson studied at the University of North Dakota and completed a residency at Sanford Physical Therapy Orthopedic Residency. He is currently practicing in the state of Minnesota.</p>
                </div>
                <div className="row" font="bold">
                  <p><a href="https://www.linkedin.com/in/kip-thorstenson-b301b3a1/">Dr. Thorstenson on LinkedIn</a></p>
                </div>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-right">
                <p>
                  <br></br>
                  <br></br>

                  <InstagramEmbed
                    url='https://www.instagram.com/tv/BzqK8Alj0aN'
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
                    value='https://www.instagram.com/tv/BzqK8Alj0aN'
                    onClick={this.handleSubmit}>Favorite</Button>
                </p>
              </div>
              <div className="col-lg-6">
                <br></br>
                <br></br>
                <div className="row" font="bold">
                  <h4>The Prehab Guys</h4>
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
                  <hr></hr>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Hip;