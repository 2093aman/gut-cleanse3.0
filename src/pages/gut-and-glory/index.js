import React from "react";
import Image from "next/image";

import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on youfff.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsive1 = {
  superLargeDesktop: {
    // the naming can be any, depends on youfff.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const Intelligence = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="entry-banner entry-banner-after  bg-common gut-and-glory ">
        {/* <ReactPlayer
					url="/video2.mp4"
					playing={true}
					autoplaying={true}
					loop={true}
					muted={true}
					playsinline={true}
					width={"100%"}
					height={"100%"}
					webkit-playsinline={true}

				/> */}
        <div className="inner-page-banner breadcrumbs-off">
          <div className="container">
            <div className="entry-banner-content breadcrumbs-area">
              <h1>Gut & Glory

              </h1>
              {/* <p>At Lorem Clinic, we go above and beyond the clinical aspect and provide services that help you gain the most out of your healthcare experience.</p> */}
              {/* <Link href="#" className="btn-red theme-btn  mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Get Started</span></Link> */}
            </div>
          </div>
        </div>
      </div>



      <section className="about-area pt-100 pb-100" id="aboutus">
        <div className="container">
          <div className="row  ">
            <div className="col-xl-6 col-lg-6">
              <div className="about-left pos-rel mb-30" data-aos="fade-up">
                <div className="about-author d-flex align-items-center">
                  <div className="about-author-Image mt-2">
                    <Image
                      src="/gutoo.jpg"
                      alt="aboutus"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                    />

                    <div className="circle-Image"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 pb-10">
              <div className="mb-30  " data-aos="fade-right">
                <div className="section-title-2">
                  <h2> Your 14-Day Journey to Digestive Freedom
                  </h2>
                </div>
                <div className="about-text  ">

                  <p>
                  Ever notice how a troubled stomach seems to affect everything? That's no coincidence. Your gut isn't just about digestion – it's your body's command center. When it's out of whack, you feel it everywhere: your mood tanks, your energy disappears, and even your favorite foods become enemies.
                  </p>
                  <p className="mb-5">
                  Stop letting digestive issues control your life. Gut & Glory™ helps you break free from bloating, weird food reactions, and that frustrating afternoon energy crash. In just 14 days, you'll discover how amazing you can feel when your gut works with you, not against you.


                  </p>
                </div>
                <div class="call-to-action-btn ">
                <a href="https://pages.razorpay.com/gutandgloryTM" target="_blank" class="item-btn-phone btn-blue theme-btn"><span>Reserve Now</span></a>
              </div>

              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="fancybox-layout1  bg-overlay-primary-gradient pt-120 pb-120  ">
        <div class="container d-flex align-items-center">

          <div class="row">
            <div class="col-12 mb-4">
              <h2 className="item-title text-center ">Do you need Gut Cleansing?</h2>
            </div>
            <div className="col-sm-6 col-lg-3 col-md-4">
              <div className="icon-box program">
                <Image
                  src="/starving_12817603.gif"
                  alt="nutritionist"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
                <h4>Indigestion</h4>
              </div>


            </div>
            <div className="col-sm-6 col-lg-3 col-md-4">
              <div className="icon-box program">
                <Image
                  src="/obesity_11292175.gif"
                  alt="nutritionist"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
                <h4>Bloating</h4>
              </div>


            </div>
            <div className="col-sm-6 col-lg-3 col-md-4">
              <div className="icon-box program">
                <Image
                  src="/gut-microbiota_12034683.gif"
                  alt="nutritionist"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
                <h4>IBS</h4>
              </div>


            </div>
            <div className="col-sm-6 col-lg-3 col-md-4">
              <div className="icon-box program">
                <Image
                  src="/stomach_12034700.gif"
                  alt="nutritionist"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
                <h4>Acid Reflux</h4>
              </div>


            </div>
            <div className="col-sm-6 col-lg-3 col-md-4">
              <div className="icon-box program">
                <Image
                  src="/witness_15578367.gif"
                  alt="nutritionist"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
                <h4>Belching</h4>
              </div>


            </div>

            <div className="col-sm-6 col-lg-3 col-md-4">
              <div className="icon-box program">
                <Image
                  src="/insomnia_18633648.gif"
                  alt="nutritionist"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
                <h4>Brain Fog / Fatigue</h4>
              </div>


            </div>
            <div className="col-sm-6 col-lg-3 col-md-4">
              <div className="icon-box program">
                <Image
                  src="/conflict_12340750.gif"
                  alt="nutritionist"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
                <h4>Anxiety / Mood Swings</h4>
              </div>


            </div>
            <div className="col-sm-6 col-lg-3 col-md-4">
              <div className="icon-box program">
                <Image
                  src="/hormonal.jpeg"
                  alt="nutritionist"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
                <h4>PCOS</h4>
              </div>


            </div>

          </div>
        </div>
      </section>


      <section className="about-area  pb-100" id="aboutus">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-left pos-rel mb-30" data-aos="fade-up">
                <div className="about-author d-flex align-items-center">
                  <div className="about-author-Image">
                    <Image
                      src="/IMG_9684.jpg"
                      alt="aboutus"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                    />
                    {/* <div className="circle-Image"> <Image src="/circle-logo.png" alt="circle-logo" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} /></div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-right-uyt pt-15 mb-30" data-aos="fade-right">
                <div className="section-title-2 mb-20">
                  <h2>What is Included in the Gut & Glory™ Program? </h2>
                </div>
                <div className="about-text pr-5">
                  {/* <p>
                    Lorem Clinic might be a good choice for several reasons,
                    depending on what you&apos;re looking for. Here are some
                    common reasons people choose clinics like Lorem:
                  </p> */}
                  <ul className="list-item ponter-text">
                    <p><b>14-Day Transformation Plan with Expert Guidance</b></p>
                    <li>

                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}
                        Kick-off Group Session: Set yourself up for success with an interactive group session led by your gut health expert.


                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}
                        60-Minute Initial Consultation to map out your wellness journey and set personalized goals

                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}
                        Weekly One-on-One Check-Ins: Stay on track with personalized support from your gut health coach.

                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}
                        Blood Work Analysis & Interpretation to ensure strategic health monitoring
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}
                        Direct WhatsApp Access: Get help during those "what do I eat?" moments with easy access to your coach.

                      </h4>
                    </li>

                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}
                        Bi-Weekly Check-Ins for continuous support, progress tracking, and adjustments</h4>
                    </li>
                   <p><b>Personalized Nutrition & Support
                   </b></p>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}
                        Custom Meal Plans: Enjoy meal plans designed specifically for your life and needs.

                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}
                        Gut-Healing Recipe Collection: Delicious, gut-friendly recipes that make healing enjoyable.


                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}

                        Daily Group Check-ins: Stay motivated and accountable through daily check-ins in a supportive community.

                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}

                        Post-Program Maintenance Guide: Keep your gut health thriving after the program ends.


                      </h4>
                    </li>
                    {/* <p><b>Results-Driven Tools
                    </b></p>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}

                        E.R.R.O.R. Method: A step-by-step approach to identify, eliminate, and manage your personal food triggers.


                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}

                        Food Reintroduction Protocol: Safely reintroduce foods to understand how they affect your body.


                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}

                        Increased Energy & Well-Being: Finally say goodbye to bloating, discomfort, and low energy while gaining clarity and vitality.


                      </h4>
                    </li> */}
                    {/* <p><b>Bonus Support
                    </b></p>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}

                        Exclusive Gut Health Resources: Access tools, tips, and educational content to continue your journey.


                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}

                        Group Accountability: Connect with other participants for motivation, encouragement, and shared learning.


                      </h4>
                    </li> */}
                  </ul>
                </div>
                {/* <div>
                  <div className="section-title-5 mb-20">
                    <h4><b>At ₹299 (less than your favorite pizza!), unlock:</b> </h4>
                  </div>
                  <ul className="list-item">


                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}
                        Live expert-led workshop
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}
                        Comprehensive gut health resources
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}

                        Exclusive bonuses worth ₹6,000
                      </h4>
                    </li>
                  </ul>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* servicess  */}

      <section className="fancybox-layout1 bg-overlay bg-overlay-primary-gradient pt-120 pb-120 bg-Image otherserv services-tre services-project">
        <div className="container">

          <div className="row justify-content-end mb-30">
            <div
              className="col-sm-12 col-md-12 col-lg-8 col-xl-12"
              data-aos="fade-up"
            >

            </div>
          </div>
          <div className="row">
            <div
              className="col-sm-6 col-d-4 col-lg-6 col-md-12"
              id="houroperation"
            >
              <div className="fancybox-item weekbx" data-aos="fade-up">
                <div className="fancybox-body d-flex">
                  {/* <div className="icon zoom-in-zoom-out">
                    <Image
                      src="/jjjytq.png"
                      alt="nutritionist"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div> */}

                  <div className="weeklist">
                    <h4 className="fancybox-title">Why Start With Gut Health?

                    </h4>
                    <p className="box-text">
                    Starting with gut health is the key to unlocking overall wellness because your gut is the foundation of your physical and mental well-being. When your gut is in balance, it not only improves digestion but also boosts energy, sharpens mental clarity, regulates mood, and strengthens immunity. By addressing gut issues, you can say goodbye to bloating, fatigue, and food sensitivities, while enhancing nutrient absorption and maintaining a healthy weight. Focusing on gut health through the Gut & Glory™ program will empower you to take control of your health, leading to lasting vitality and a more vibrant life.


                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-d-4 col-lg-6 col-md-12">
              <div className="fancybox-item gut-grr" data-aos="fade-up">
                <div className="fancybox-body  d-flex">
                  {/* <div className="icon zoom-in-zoom-out">
                    <Image
                      src="/worws.svg"
                      alt="pulmonology"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div> */}
                  <div className="weeklist">
                    <h4 className="fancybox-title">Limited Time Offer

                    </h4>
                    <p>
                    Transform your health in just 14 days with Gut & Glory™, now available for an exclusive price of ₹6300! This limited-time offer includes expert guidance, personalized support, and proven strategies to help you reclaim your gut health and vitality. Don't miss your chance to experience the life-changing benefits of a healthy gut at a fraction of the cost. Secure your spot today and start your journey to digestive freedom!

                    </p>
                    
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>
      </section>
      <section>
        <div className="container ">
          <div className="row pt-50 main-pay paysection">

            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 ">

              <h3 className=" text-center">Reserve your spot now for just ₹6300 and begin your path to optimal health!

              </h3>

              <div class="call-to-action-btn paybtn">
                <a href="https://pages.razorpay.com/gutandgloryTM" target="_blank" class="item-btn-phone btn-blue theme-btn"><span>Reserve Now</span></a>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="banner-wrap-layout1 parallaxie" id="support">
        <div className="container">
          <div className="row">
            {/* <div className="col-xl-7 col-lg-4 col-md-10 col-12"></div> */}
            <div className="col-xl-12 col-lg-8 col-md-10 col-12">
              <div className="banner-box-layout1" data-aos="fade-up">
                <h2 className="item-title">What Our Clients Are Saying</h2>
                <Carousel
                  autoPlay={true}
                  draggable={true}
                  infinite={true}
                  autoPlaySpeed={6000}
                  responsive={responsive1}
                >
                  <div>
                    <p>

                      Nancy's gut cleanse is the best thing that i did. I was extremely bloated with breathing issues. I had gone to multiple doctors who prescribed many medicines which didn't seem right. After 3 months of trying, I tried Nancy's gut cleanse and to my surprise the problem I was facing reduced 90%. I highly recommend her 2-week gut cleanse practice to everyone

                    </p>
                    <p>
                      <b> Ankur </b>
                    </p>
                  </div>
                  <div>
                    <p>

                      I had a major bloating issue since a few years… nothing seemed to be working till the time I joined Nancy for the gut cleansing diet and that is when the magic happened… it was a very doable diet which helped me find out that milk was not suiting me at all which led to severe bloating… with Nancy’s diet I got rid of this problem… since then I never had bloating again and now I can easily enjoy my cold coffee everyday… thank you Nancy… you’ve been a saviour 🙏❤️🙏

                    </p>
                    <p>
                      <b>Kannu</b>
                    </p>
                  </div>
                  <div>
                    <p>

                      As someone who has struggled with persistent digestive issues like bloating, frequent bowel movements, and loose stools, I was hesitant to try yet another diet plan. However, the gut cleanse workshop recommended by dietitian Nancy Dehra proved to be a game-changer. I noticed a significant improvement in my symptoms. The bloating and frequent, loose bowel movements that I had come to accept as a normal part of my life reduced drastically.

                      I am incredibly grateful to my dietitian Nancy Dehra for designing such an effective and transformative gut cleanse workshop. Her deep understanding of digestive health, coupled with a personalized approach, has given me a new lease on life. I would highly recommend her workshop to anyone struggling with similar digestive challenges.

                    </p>
                    <p>
                      <b> Arvind </b>
                    </p>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>


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

      {/* <section className="departments-wrap-layout5 bg-light-accent100">
        <div className="container">
          <div className="row">
            <h2 className="item-title text-center mb-60">Program</h2>
            <div className="col-md-4">
              <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                    <h2>Comprehensive Initial Assessment </h2>
                  </div>
                  <div class="flip-box-back">
                    <p>
                      Detailed review of medical history
                      <br />
                      Analysis of current symptoms and triggers
                      <br />
                      Evaluation of lifestyle factors
                      <br />
                      Assessment of nutritional needs
                      <br />
                      Review of previous treatments and outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                    <h2>Personalized Treatment Protocol</h2>
                  </div>
                  <div class="flip-box-back">
                    <p>
                      Custom-designed meal plans based on your specific symptoms
                      and needs <br />
                      Therapeutic food combinations for optimal nutrient
                      absorption
                      <br /> Anti-inflammatory recipe guide with over 50
                      gut-healing meals
                      <br /> Supplement recommendations when necessary
                      (non-prescribed)
                      <br /> Lifestyle modification strategies for enhanced
                      results
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                    <h2>Ongoing Support System</h2>
                  </div>
                  <div class="flip-box-back">
                    <p>
                      Weekly one-on-one progress evaluations
                      <br />
                      Daily group support through moderated WhatsApp community
                      <br />
                      Access to our digital resource library
                      <br />
                      Emergency support protocols for symptom flare-ups
                      <br />
                      Post-program maintenance guidance
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Intelligence;
