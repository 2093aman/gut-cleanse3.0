import React from 'react'
import Image from 'next/image';
import ReactPlayer from 'react-player';
import Navbar from "@/componants/Navbar";
import Footer from "@/componants/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Link from 'next/link';

const OurProcess = () => {

  useEffect(() => {
    AOS.init();

  }, [])

  return (

    <div>

      <div className="entry-banner entry-banner-after  bg-common processBg ">
        <ReactPlayer
          url="/video2.mp4"
          playing={true}
          autoplaying={true}
          loop={true}
          muted={true}
          playsinline={true}
          width={"100%"}
          height={"100%"}
          webkit-playsinline={true}

        />
        <div className="inner-page-banner breadcrumbs-off">
          <div className="container">
            <div className="entry-banner-content breadcrumbs-area">
              <h1>Our Process</h1>
              {/* <p>AtLorem Ipsum, we go above and beyond the clinical aspect and provide services that help you gain the most out of your healthcare experience.</p> */}
              {/* <Link href="#" className="btn-red theme-btn  mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Get Started</span></Link> */}

            </div>
          </div>
        </div>
      </div>

      {/* servicess  */}

    <div className='container'>
      <div className='row'>
      <div className="col-xl-12 col-lg-12 pb-10 processmai">
              <div className="mb-30 prmain  " data-aos="fade-right">
                <div className="section-title-2">
                  <h2> Our Scientific Approach: The E.R.R.O.R Method 

</h2>
                </div>
                <div className="about-text  ">
                  <p className="mb-5">
                  Developed through years of clinical experience, our E.R.R.O.R Method provides a systematic approach to gut healing:
                  </p>
                </div>

              </div>
            </div>
      </div>
      
    </div>


     

      <section classNameName="fancybox-layout1  departments-wrap-layout5 bg-light-accent100 services-area serviceWrapper pt-120 pb-120  otherserv" >
      </section>
      <section className="our-blog p-0 m-0 bg-silver">
        <div className="container work-process pb-5 pt-5 mt-5 mb-5">
          <div className="title mb-5 text-center">


          </div>
          {/* <!-- ============ step 1 =========== --> */}
          <div className="row processc mb-5">
            <div className="col-md-12 col-lg-8 col-sm-12 col-xm-12 mb-5">
              <div
                className="process-box process-left"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step">
                      <p className="m-0 p-0">Step</p>
                      <h2 className="m-0 p-0">01</h2>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>Elimination Phase</h5>
                    <p>
                      <small
                      >Scientifically identify and temporarily remove inflammatory triggers that contribute to gut permeability ("leaky gut") and bacterial imbalance. This phase allows your digestive system to begin its natural healing process.
                      </small>
                    </p>
                  </div>
                </div>
                <div className="process-line-l"></div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              
            </div>
          </div>
          {/* <!-- ============ step 2 =========== --> */}
          <div className="row mb-5">
            <div className="col-md-12 col-lg-4 col-sm-12 col-xm-12 mb-5 ">
              <div className="process-point-left">{""}</div>
            </div>
            {/* <div className="col-md-2"></div> */}
            <div className="col-md-12 col-lg-8 col-sm-12 col-xm-12">
              <div
                className="process-box process-right"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step">
                      <p className="m-0 p-0">Step</p>
                      <h2 className="m-0 p-0">02</h2>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>Reintroduction Protocol</h5>
                    <p>
                      <small
                      >Systematically reintroduce foods using our clinically-tested protocol to identify specific triggers while maintaining nutritional balance. This phase helps create your personalized "food map" for optimal digestive health.
                      </small>
                    </p>
                  </div>
                </div>
                <div className="process-line-r"></div>
              </div>
            </div>
          </div>
          {/* <!-- ============ step 3 =========== --> */}
          <div className="row mb-5">
            <div className="col-md-12 col-lg-8 col-sm-12 col-xm-12 mb-4">
              <div
                className="process-box process-left"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step">
                      <p className="m-0 p-0">Step</p>
                      <h2 className="m-0 p-0">03</h2>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>Reconnection Training</h5>
                    <p>
                      <small
                      >Learn to interpret your body's signals through guided mindfulness techniques and symptom tracking. This evidence-based approach helps establish a stronger mind-gut connection for long-term wellness.
                      </small>
                    </p>
                  </div>
                </div>
                <div className="process-line-l"></div>
              </div>
            </div>
            {/* <div className="col-md-2"></div> */}
            <div className="col-md-4">
              <div className="process-point-right"></div>
            </div>
          </div>
          {/* <!-- ============ step 4 =========== --> */}
          <div className="row mb-5">
            <div className="col-md-12 col-lg-4 col-sm-12 col-xm-12 mb-5">
              <div className="process-point-left"></div>
            </div>
            {/* <div className="col-md-2"></div> */}
            <div className="col-md-12 col-lg-8 col-sm-12 col-xm-12">
              <div
                className="process-box process-right"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step">
                      <p className="m-0 p-0">Step</p>
                      <h2 className="m-0 p-0">04</h2>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>Observation Period</h5>
                    <p>
                      <small
                      >Utilize our comprehensive symptom tracking system to document responses to dietary changes, helping identify patterns and triggers that standard medical tests might miss.
                      </small>
                    </p>
                  </div>
                </div>
                <div className="process-line-r"></div>
              </div>
            </div>
          </div>
          {/* <!-- ============ step 3 =========== --> */}
          <div className="row">
            <div className="col-md-12 col-lg-8 col-sm-12 col-xm-12">
              <div
                className="process-box process-left"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step">
                      <p className="m-0 p-0">Step</p>
                      <h2 className="m-0 p-0">05</h2>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>Removal Strategy</h5>
                    <p>
                      <small>
                      Develop a personalized plan for managing trigger foods while maintaining a nutrient-rich, satisfying diet that supports your lifestyle and health goals.
                      </small>
                    </p>
                  </div>
                </div>
                <div className="process-line-l"></div>
              </div>
            </div>
            {/* <div className="col-md-2"></div> */}
            <div className="col-md-4">
              <div className="process-point-right process-last"></div>
            </div>
          </div>

        </div>
      </section>

      {/* servicess  */}



      <section className="call-to-action-wrap-layout4">
        <div className="item-Image"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="call-to-action-box-layout4" data-aos="zoom-in">
                <h2 className="item-title">
                  Explore Our Natural Gut Cleanse Programs and Improve Your
                  Digestive Health! Begin your journey to optimal digestive
                  wellness
                </h2>

                <div className="call-to-action-btn">
                  <Link href="/our-program" className="btn-red theme-btn">
                    <span>OUR PROGRAMS</span>
                  </Link>
                  <span class="or">&nbsp; &nbsp;or&nbsp;&nbsp;</span>{" "}
                  <a
                    href="https://wa.me/9779994422"
                    target="_blank"
                    className="item-btn-phone btn-blue theme-btn"
                  >
                    <span>Call: 9779994422 </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default OurProcess;
