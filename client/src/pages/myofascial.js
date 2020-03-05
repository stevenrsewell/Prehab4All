import React, { Component } from "react";
import HeroSmall from "../components/HeroSmall";
import Container from "../components/Container";
import NavbarC from "../components/NavbarC/index";
import InstagramEmbed from 'react-instagram-embed';
import Button from "react-bootstrap/Button";
import API from "../utils/API"
import AOS from "aos";
//Myofascial component
class Myofascial extends Component {
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
            <h1>Myofascial Videos</h1>
          </HeroSmall>
          <Container style={{ marginTop: 55, marginRight: 190 }}>
            <div className="row">
              <div className="col-lg-6" data-aos="fade-right">
                <p>
                  <br></br>

                  <InstagramEmbed
                    url='https://www.instagram.com/tv/Bza1B_MgwWJ'
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
                    value='https://www.instagram.com/tv/Bza1B_MgwWJ'
                    onClick={this.handleSubmit}>Favorite</Button>

                </p>
              </div>
              <div className="col-lg-6">
                <br></br>
                <br></br>
                <div className="row" font="bold">
                  <br></br>
                  <h4>Joe Yoon</h4>
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
                  <br></br>

                  <InstagramEmbed
                    url='https://www.instagram.com/tv/Br0D99DgkF0'
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
                    value='https://www.instagram.com/tv/Br0D99DgkF0'
                    onClick={this.handleSubmit}>Favorite</Button>

                </p>
              </div>
              <div className="col-lg-6">
                <br></br>
                <br></br>

              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-right">
                <p>
                  <br></br>
                  <br></br>

                  <InstagramEmbed
                    url='https://www.instagram.com/tv/BrSjGBwgrc4'
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
                    value='https://www.instagram.com/tv/BrSjGBwgrc4'
                    onClick={this.handleSubmit}>Favorite</Button>

                </p>
              </div>
              <div className="col-lg-6">
                <br></br>
                <br></br>

              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-right">
                <p>
                  <br></br>
                  <br></br>

                  <InstagramEmbed
                    url='https://www.instagram.com/tv/BjbDgN8Fapv'
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
                    value='https://www.instagram.com/tv/BjbDgN8Fapv'
                    onClick={this.handleSubmit}>Favorite</Button>

                </p>
              </div>
              <div className="col-lg-6">
                <br></br>
                <br></br>
                <div className="row" font="bold">
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
          </Container>
        </div>
      </div>
    );
  }
}

export default Myofascial;