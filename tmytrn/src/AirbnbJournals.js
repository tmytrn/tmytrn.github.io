import React from "react";
import { Link } from "react-router-dom";
import heroImage from "./images/Journals/AirbnbJournals_Hero.png";
import userJourney from "./images/Journals/User_Journey.png";
import journalsHome from "./images/Journals/Journals_Home@2x.png";
import luxe from "./images/Journals/Luxe.png";
import plus from "./images/Journals/Plus.png";
import effortImpact from "./images/Journals/Effort_Impact.png";
import currentHome from "./images/Journals/Current_Home.png";
import onlineExperiences from "./images/Journals/Online_Experiences.png";
import DLS from "./images/Journals/DLS.png";
import newHome from "./images/Journals/HomePage@2x.png";
import journal1 from "./images/Journals/Journal_1@2x.png";
import memento from "./images/Journals/Journal_Memento@2x.png";
import addToJournal from "./images/Journals/TeamAdobo_AirbnbCreativeJam_Add_To_Journal.mp4";
import addMemento from "./images/Journals/TeamAdobo_AirbnbCreativeJam_Submission.mp4";




function AirbnbJournals() {

    const styles = {
        airbnbStyle: {
            backgroundColor: "#fafafa",
            color: "#555555"

        },
        grey: {
            color: "#555555"
        },
    };

    const listStyle = {
        listStylePosition: "outside"
    }
    const hero = {
        backgroundImage: "url(" + heroImage + ")",
        backgroundPosition: "center",
    }

    return (
        <div style={styles.airbnbStyle}>
            <div
                class=" vh-50 vh-75-l cover bg-center"
                style={hero}
            ></div>
            <div class="mw8 center ph4">
                <div class="w-100 cf fl" >
                    <div class="fl w-100 w-25-ns mb4 mt4 pr1-l" >
                        <p class="f4 mv0 b" >Date</p>
                        <p class="db lh-copy mv0 f6 f5-m f4-l measure pb3">April 2020</p>
                        <p class="f4 mv0 b">Timeline</p>
                        <p class="db lh-copy mv0 f6 f5-m f4-l measure pb3">48 hours</p>
                        <p class="f4 mv0 b">Team</p>
                        <p class="db lh-copy mv0 f6 f5-m f4-l measure">Angelo Saraceno</p>
                        <p class="db lh-copy mv0 f6 f5-m f4-l measure">Renaise Kim</p>
                        <p class="db lh-copy mv0 f6 f5-m f4-l measure pb3">Tommy Tran</p>
                        <p class="f4 mv0 b">Tools</p>
                        <p class="db lh-copy mv0 f6 f5-m f4-l measure">Adobe XD, Figma</p>
                    </div>
                    <div class="fl w-100 w-75-l mb5">
                        <h1 class="fw6 f2 mb-ns mt4-l lh-title fl w-100 red">Airbnb Journals</h1>
                        <p class="db lh-copy mv0 f6 f5-m f4-l measure">
                            Airbnb Journals was an entry in the Airbnb + College Adobe
                            Creative Jam. It is a unified portal to keep trips organized
                            by listing and curating events that your group has booked to keep
                            everyone on the same page.
                        </p>
                        <br></br>
                        <p class="db lh-copy mv0 f6 f5-m f4-l measure"> We placed second among hundreds of entries.
                            <a href="https://xd.adobe.com/view/646cc6c0-f4d3-42be-6a0d-ef2c07554647-125d/" class="link">
                                <span class="b red"> Try the prototype.</span>
                            </a>
                        </p>

                    </div>
                </div>
                <div class="fr pt5 pb5 w-100 w-75-l bt b--black-05" style={styles.airbnbStyle}>
                    <h1 class="fw6 f3 mb-ns mt3-l lh-title fl w-100 red ">Challenge</h1>
                    <p class="db lh-copy mv0 f6 f5-m f4-l measure">
                        In a mobile app, provide a way to combine photos and/or notes
                        and transform their shared family trips into immersive stories
                        about the culture and destinations they visit. What if that
                        solution combined a traditional pledge with a fun new way to
                        spread the word, visually, through social media?
            </p>
                </div>
                <div class="fr pt5 pb5 w-100 w-75-l bt b--black-05 " style={styles.airbnbStyle}>
                    <h1 class="fw6 f3 mb-ns mt3-l lh-title fl w-100 red">Scope</h1>
                    <p class="db lh-copy mt0 f5 f4-m f4-l measure">
                        A storytelling app may optionally serve families or friends who
                        travel together best by:
            </p>
                    <ul class="pl4 measure">
                        <li>
                            <p class="f6 f5-m f4-l">
                                Giving group members a way to create a single trip or
                                multiple stories, during or after travel
                </p>
                        </li>
                        <li>
                            <p class="f6 f5-m f4-l">
                                Letting all family or travel members contribute, no matter
                                how old they are
                </p>
                        </li>
                        <li>
                            <p class="f6 f5-m f4-l">
                                Encouraging engagement with a gamified experience
                </p>
                        </li>
                        <li>
                            <p class="f6 f5-m f4-l">
                                Allowing people to learn, favorite and save stories,
                                discuss, and safely connect
                </p>
                        </li>
                    </ul>
                </div>
                <div class="fr pt5 pb5 w-100 w-75-l bt b--black-05" style={styles.airbnbStyle}>
                    <h1 class="fw6 f3 mb-ns mt3-l lh-title fl w-100 red">Evaluation</h1>
                    <ul class="pl4 measure" >
                        <li>
                            <p class="lh-copy f6 f5-m f4-l">
                                Does the solution address a target audience and their needs?
              </p>
                        </li>
                        <li>
                            <p class="lh-copy f6 f5-m f4-l">
                                Does the prototype solve the problem in an innovative way?
              </p>
                        </li>
                        <li>
                            <p class="lh-copy f6 f5-m f4-l">
                                Is the user experience and interface intuitive?
              </p>
                        </li>
                        <li>
                            <p class="lh-copy f6 f5-m f4-l">
                                Is visual design used in a thoughtful and meaningful way?
              </p>
                        </li>
                    </ul>
                </div>
                <div class="fr pt5 pb5 w-100 w-75-l bt b--black-05" style={styles.airbnbStyle}>
                    <h1 class="fw6 f3 mb-ns mt3-l lh-title fl w-100 red">Timeline</h1>
                    <div class="fn fl-ns w-25-ns">
                        <p class=" b f6 f5-m f4-l">Friday</p>
                    </div>
                    <div class="fn fl-ns w-75-ns">
                        <ul class="pl0 list" >
                            <li>
                                <p class=" f6 f5-m f4-l ">
                                    Research
                </p>
                            </li>
                            <li>
                                <p class="f6 f5-m f4-l">
                                    Define
                </p>
                            </li>
                            <li>
                                <p class="f6 f5-m f4-l">
                                    Plan
                </p>
                            </li>
                            <li>
                                <p class="f6 f5-m f4-l">
                                    Brand Identity
                </p>
                            </li>
                            <li>
                                <p class="f6 f5-m f4-l">
                                    Journey Map
                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="fn fl-ns w-25-ns">
                        <p class=" b f6 f5-m f4-l">Saturday</p>
                    </div>
                    <div class="fn fl-ns w-75-ns">
                        <ul class="pl0 list" >
                            <li>
                                <p class="f6 f5-m f4-l">
                                    Low Fidelity Wireframes
                  </p>
                            </li>
                            <li>
                                <p class="f6 f5-m f4-l">
                                    Refine Design System
                  </p>
                            </li>
                            <li>
                                <p class="f6 f5-m f4-l">
                                    Integrate Feedback Points
                  </p>
                            </li>
                            <li>
                                <p class="f6 f5-m f4-l">
                                    High Fidelity Wireframes
                  </p>
                            </li>
                            <li>
                                <p class="f6 f5-m f4-l">
                                    Prepare for presentation
                  </p>
                            </li>
                        </ul>
                    </div>
                    <div class="fn fl-ns w-25-ns">
                        <p class=" b f6 f5-m f4-l">Sunday</p>
                    </div>
                    <div class="fn fl-ns w-75-ns">
                        <ul class="pl0 list">
                            <li>
                                <p class="f6 f5-m f4-l">
                                    Submit
                </p>
                            </li>
                            <li>
                                <p class="f6 f5-m f4-l">
                                    Caffeinate
                </p>
                            </li>
                            <li>
                                <p class="f6 f5-m f4-l">
                                    Present
                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="fr pt5 pb5 w-100 bt b--black-05" style={styles.airbnbStyle}>
                    <h1 class="fw6 f2 mb-ns mt3-l lh-title fl w-100 red">How might we build compelling experiences that encourage engagement?</h1>
                    <ul class=" pl4 pb5">
                        <li>
                            <p class="lh-copy f6 f5-m f4-l">
                                Sharing travel experiences and contributing is difficult
              </p>
                        </li>
                        <li>
                            <p class="lh-copy f6 f5-m f4-l">
                                Hosts/potential guests can’t distinguish between 5 star ratings
              </p>
                        </li>
                        <li>
                            <p class="lh-copy f6 f5-m f4-l">
                                Organizing travel information post and pre experiences
              </p>
                        </li>
                    </ul>
                </div>
                <div class="fr pt5 pb5 w-100 bt b--black-05" style={styles.airbnbStyle}>
                    <h1 class="fw6 f3 mb3-ns lh-title tc w-100 red">Journey Map</h1>
                    <div class="fl mb5 mt3 tc center">
                        <img class="w-100 w-75-l center" src={userJourney}></img>
                    </div>
                </div>
                <div class="fl pt5 pb5 w-100 bt b--black-05" style={styles.airbnbStyle}>
                    <div class="fl w-100 w-50-l">
                        <h1 class="fw6 f3 mt3-l lh-title fl w-100 red">Feature Selection</h1>
                        <ul class="pl4 pb5" style={listStyle}>
                            <li class="">
                                <p class="lh-copy f6 f5-m f5-l b red">
                                    Collaborative album
              </p>
                            </li>
                            <li class="">
                                <p class="lh-copy f6 f5-m f5-l b red">
                                    Group itinerary+
              </p>
                            </li>
                            <li class="">
                                <p class="lh-copy f6 f5-m f5-l b red">
                                    Stickers
              </p>
                            </li>
                            <li class="">
                                <p class="lh-copy f6 f5-m f5-l b red">
                                    Polls on itinerary
              </p>
                            </li>
                            <li class="">
                                <p class="lh-copy f6 f5-m f5-l b red">
                                    Featured Journals on listings
              </p>
                            </li>
                            <li>
                                <p class="lh-copy f6 f5-m f5-l">
                                    Group leader can post announcements
              </p>
                            </li>
                            <li>
                                <p class="lh-copy f6 f5-m f5-l">
                                    AI generated montage videos
              </p>
                            </li>
                            <li>
                                <p class="lh-copy f6 f5-m f5-l">
                                    Remote Trip
              </p>
                            </li>
                            <li>
                                <p class="lh-copy f6 f5-m f5-l">
                                    Stories/Posts/Videos
              </p>
                            </li>
                            <li>
                                <p class="lh-copy f6 f5-m f5-l">
                                    Share Journal with host
              </p>
                            </li>
                            <li>
                                <p class="lh-copy f6 f5-m f5-l">
                                    Share completed trips/itineraries
              </p>
                            </li>
                            <li>
                                <p class="lh-copy f6 f5-m f5-l">
                                    Rebook completed trips
              </p>
                            </li>
                        </ul>
                    </div>
                    <div class="fl w-100 w-50-l">
                        <div class="mb5 mt5 tc center">
                            <img class="w-100 center" src={effortImpact}></img>
                            <p>Effort/Impact Matrix</p>
                        </div>
                    </div>
                </div>
                <div class="fr pt5 pb5 w-100 bt b--black-05" style={styles.airbnbStyle}>
                    <h1 class="fw6 f3 mb-ns mt3-l lh-title fl w-100 tc red">Visual Design Inspiration</h1>
                    <p class="lh-copy mv0 ph5-l f6 f5-m f4-l pb5 tc w-100">
                        We used Airbnb's Online Experiences and Design Language System as inspiration to create a brand new feature that snugly fits into the Airbnb ecosystem.
                        </p>
                    <div class="fn fr-ns mb5 w-100">
                        <div class="fn fl-ns w-third-ns ph1">
                            <p class="b lh-copy f6 f5-m f4-l">
                                Feature Logotypes
              </p>
                            <img class="w-100 w-60-l pb3" src={plus}></img>
                            <img class="w-100 w-60-l" src={luxe}></img>
                        </div>
                        <div class="fn fl-ns w-third-ns ph1">
                            <p class="b lh-copy f6 f5-m f4-l">
                                Current Home Page
              </p>
                            <img class=" w-100 w-75-l" src={currentHome}></img>
                        </div>
                        <div class="fn fl-ns w-third-ns ph1">
                            <p class="b lh-copy f6 f5-m f4-l">
                                Online Experiences
              </p>
                            <img class=" w-100 w-75-l" src={onlineExperiences}></img>
                        </div>
                        <div class="fn fl-ns w-100-ns pt5">
                            <p class="b lh-copy f6 f5-m f4-l">
                                Design Language System
              </p>
                            <img class="fl w-100 pb3" src={DLS}></img>
                        </div>
                    </div>
                </div>
                <div class="fr pt5 pb5 w-100 bt b--black-05" style={styles.airbnbStyle}>
                    <div class="">
                        <h1 class="fw6 f3 mb3-ns lh-title tc w-100 red">Final Design</h1>
                        <p class="lh-copy mv0 ph5-l f6 f5-m f4-l pb5 tc w-100">
                            Journals is a unified portal to keep your trips organized by listing and curating events that your group has booked to keep everyone on the same page. Group members can post photos, stills or ephermeral to share memories to close friends and family. At the end of the trip, journals will help you curate and share those memories to even those who werent physically with you but spiritually there.
                        </p>
                    </div>
                    <div class="fl mb5 w-100">
                        <div class="fl-ns w-100 w-third-l ph4 ph1-l pb3">
                            <p class="b lh-copy f6 f5-m f4-l">
                                New Home Page
                            </p>
                            <div class="iphone-wrapper w-100 w-75-l">
                                <img class="iphone " src={newHome}></img>
                            </div>
                        </div>
                        <div class="fl-ns w-100 w-third-l ph4 ph1-l pb3">
                            <p class="b lh-copy f6 f5-m f4-l">
                                Journals Page
                            </p>
                            <div class="iphone-wrapper w-100 w-75-l">
                                <img class="iphone " src={journalsHome}></img>
                            </div>
                        </div>
                        <div class="fl-ns w-100 w-third-l ph4 ph1-l pb3">
                            <p class="b lh-copy f6 f5-m f4-l">
                                Journals Feature
                            </p>
                            <video autoPlay loop muted class=" w-100 w-75-l">
                                <source src={addToJournal} type="video/mp4"></source>
                            </video>
                        </div>
                        <div class="fl-ns w-100 w-third-l ph4 ph1-l">
                            <p class="b lh-copy f6 f5-m f4-l">
                                Journal Itinerary
                            </p>
                            <div class="iphone-wrapper w-100 w-75-l">
                                <img class="iphone" src={journal1}></img>
                            </div>
                        </div>
                        <div class="fl-ns w-100 w-third-l ph4 ph1-l">
                            <p class="b lh-copy f6 f5-m f4-l">
                                Journals Mementos
                            </p>
                            <div class="iphone-wrapper w-100 w-75-l">
                                <img class="iphone" src={memento}></img>
                            </div>
                        </div>
                        <div class="fl-ns w-100 w-third-l ph4 ph1-l">
                            <p class="b lh-copy f6 f5-m f4-l">
                                Adding Mementos
                            </p>
                            <video autoPlay loop muted class="w-100 w-75-l">
                                <source src={addMemento} type="video/mp4"></source>
                            </video>
                        </div>
                    </div>
                </div>
                <div class="fl tc w-100" >
                    <h1 class="f3">
                        <a href="https://xd.adobe.com/view/646cc6c0-f4d3-42be-6a0d-ef2c07554647-125d/" class="link red">
                            View prototype
              </a>
                    </h1>
                </div>
                <section class="fl mt5 pv3 bt b--black-05 w-100">
                    <div class="fl db w-100">
                        <div class="fn fl-ns w-100 w-50-ns pr4-ns tl">
                            <h1 class="f4 f3-ns red">Prev</h1>
                            <p class="f6 f5-m f4-l">
                                <a href="/PA.html" class="link red">
                                    ← Public Announcement
              </a>
                            </p>
                        </div>
                        <div class="fn fr-ns w-100 w-50-ns tr">
                            <h1 class="f4 f3-ns red">Next</h1>
                            <p class="f6 f5-m f4-l">
                                <a href="/AirbnbJournals.html" class="link red">
                                    Move Review Case Study →
                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>


    );
}

export default AirbnbJournals;