import React from "react";
import HeroSmall from "../components/HeroSmall";
import Container from "../components/Container";
import NavbarC from "../components/NavbarC/index";
import InstagramEmbed from 'react-instagram-embed';
import Button from "react-bootstrap/Button";
import AOS from "aos";
function Cervical() {
  AOS.init({
    duration: 2000
      })
  return (
    <div>
      <NavbarC />
      <div>
        <HeroSmall backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
          <h1>Cervical Videos</h1>
        </HeroSmall>
        <Container style={{ marginTop: 55, marginRight: 190 }}>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <p>
                <br></br>
                <div data-aos="fade-right">
                <InstagramEmbed
                  url='https://www.instagram.com/p/B835m7mnsTQ'
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
                </div>
                {/* <iframe src="https://www.instagram.com/p/B835m7mnsTQ/embed/captioned" width="540" height="545" frameBorder="0" scrolling="no" allowtransparency="true"></iframe> */}
                <Button variant="dark" type="submit">Favorite</Button>
              </p>
            </div>
            <div className="col-lg-6">
              <br></br>
              <br></br>
              <div font="bold">
                <br></br>
                <h4>Dr. Caleb Burgess PT, DPT, OCS, CSCS</h4>
              </div>
              <div className="row" font="bold">
                <h5><a href="https://www.instagram.com/dr.jacob.harden/">Dr. Burgess on Instagram</a></h5>
              </div>
              <div className="row" font="bold">
                <br></br>
                <p>Hi, I’m Dr. Caleb Burgess. I’m a licensed Doctor of Physical Therapy, a certified specialist in Orthopedic Physical Therapy through the American Board of Physical Therapy Specialties, and a Certified Strength and Conditioning Specialist through the National Strength and Conditioning Association.</p>
              </div>
              <div className="row" font="bold">
                <p>In 2014, I received my Doctorate in Physical Therapy (DPT) from Azusa Pacific University. The next two years I completed a Residency in Orthopedic Physical Therapy and then a Fellowship in Sports and Orthopedic Physical Therapy through Kaiser Permanente Southern California. This advanced training allowed me to become an expert in musculoskeletal conditions both related to the general and athletic populations.</p>
              </div>
              <div className="row" font="bold">
                <p><a href="https://drcalebburgess.com/">Dr. Burguess Website</a></p>
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
                  url='https://www.instagram.com/p/ByShUDZpKRe'
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
                {/* <iframe src="https://www.instagram.com/p/ByShUDZpKRe/embed/captioned" width="540" height="545" frameBorder="0" scrolling="no" allowtransparency="true"></iframe> */}
                <Button variant="dark" type="submit">Favorite</Button>
              </p>
            </div>
            <div className="col-lg-6">
              <br></br>
              <br></br>
              <div font="bold">
                <h4>Dr. Samuel Spinelli, DPT, CSCS</h4>
              </div>
              <div className="row" font="bold">
                <h5><a href="https://www.instagram.com/dr.samspinelli/">Dr. Spinelli on Instagram</a></h5>
              </div>
              <div className="row" font="bold">
                <br></br>
                <p>Doctor Samuel Spinelli is an experienced Strength And Conditioning Coach with a demonstrated history of working in the health wellness and fitness industry. He studied Kinesiology and Exercise Science at the University of Alberta, and received his Doctorate of Physical Therapy from the Massachusetts College of Pharmacy and Health Sciences. He is a founding member of the rehabilitation platform E3Rehab. He also currently hosts online seminars and programming.</p>
              </div>
              <div className="row" font="bold">
                <p><a href="https://www.thestrengththerapist.com/">Dr. Spinelli's Website</a></p>
              </div>
              <div className="row" font="bold">
                <p><a href="https://www.instagram.com/e3rehab/">E3Rehab Instagram</a></p>
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
                  url='https://www.instagram.com/p/ByiRqe9BlqW'
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
                {/* <iframe src="https://www.instagram.com/p/ByiRqe9BlqW/embed/captioned" width="540" height="545" frameBorder="0" scrolling="no" allowtransparency="true"></iframe> */}
                <Button variant="dark" type="submit">Favorite</Button>
              </p>
            </div>
            <div className="col-lg-6">
              <br></br>
              <br></br>
              <div font="bold">
                <h4>Dr. Adam McCluskey, PT, DPT</h4>
              </div>
              <div className="row" font="bold">
                <h5><a href="https://www.instagram.com/theptinitiative/">The PT Initiative Instagram</a></h5>
              </div>
              <div className="row" font="bold">
                <br></br>
                <p>“After completing my undergraduate work and receiving a bachelor's degree in Kinesiology, I worked as a personal trainer and strength coach for 4 years. This was an incredible and eye opening time in my life. I met so many great people and learned so much about fitness and strength training. Still I knew I had a passion for helping people overcome their limitations, and wanted to pursue my goal of becoming a sports physical therapist. This is what led me to earning a Doctorate in Physical Therapy and later starting my own PT and Sports Performance clinic. I am most active on Instagram, and have been humbled to meet so many amazing people across the world from that platform. Thank you for joining me on this journey to better health, optimal performance, and pain-free living!”</p>
              </div>
              <div className="row" font="bold">
                <p>“I started The PT Initiative in 2017 out of a desire to help people all over the world move better, feel better, and workout pain-free!”</p>
              </div>
              <div className="row" font="bold">
                <p><a href="https://www.youtube.com/channel/UCG5NQx7QqG8q2alfkjuP5Nw">The PT Initiative Youtube</a></p>
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
                  url='https://www.instagram.com/p/B8ti583gwuZ'
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
                {/* <iframe src="https://www.instagram.com/p/B8ti583gwuZ/embed/captioned" width="540" height="545" frameBorder="0" scrolling="no" allowtransparency="true"></iframe> */}
                <Button variant="dark" type="submit">Favorite</Button>
              </p>
            </div>
            <div className="col-lg-6">
              <br></br>
              <br></br>
              <div className="row" font="bold">
                <h4>Performance Sport and Spine Chiropractic Clinic</h4>
              </div>
              <div className="row" font="bold">
                <h5><a href="http://instagram.com/performance_sport_n_spine">Performance Sport and Spine on Instagram</a></h5>
              </div>
              <div className="row" font="bold">
                <br></br>
                <p>Performance Sport and Spine is a chiropractic clinic in Redmond, WA. “At Performance Sports and Spine, we believe in treating the underlying cause of your injury, not just the symptom(s). Our goal is to get you up and moving as quickly as possible with a combination of chiropractic adjusting and soft tissue work.”</p>
              </div>                  <div className="row" font="bold">
                <p>Dr. Zach Greenwade of Performance Sport and Spine earned his Doctorate of Chiropractic (D.C.) at the University of Western States in Portland, OR and his Bachelor of Science degree in Biology from the University of Idaho. Growing up, Dr. Greenwade played a variety of sports, and currently lives a very active lifestyle so he can relate to injuries and frustrations of his patients. His treatment style focuses on educating and empowering the patient to gain the tools to help them manage pain and reduce the chance of future injury. Healthcare is a dynamic field, and Dr. Greenwade is dedicated to staying current with continued education and research in evidence-based practices. He is also certified in Active Release Technique, Graston, and RockTape. </p>
              </div>
              <div className="row" font="bold">
                <p>Address<br></br>16770 NE 79th Street Suite 100<br></br>Redmond, WA 98052</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <script>
        window.AOS.init();
      </script>
    </div>
  );
}
export default Cervical;