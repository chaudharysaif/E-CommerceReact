import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
    return (
        <div>
            <Navbar aboutactive="info" />

            <div className="container p-4 my-5 p-md-5 mb-4 rounded text-body-emphasis" style={{backgroundImage:"url('aboutus.jpg')",backgroundPosition:"bottom",backgroundSize:"cover"}}>
                <div className="col-lg-6 px-0">
                    <h1 className="display-4 fst-italic">Title of a longer featured about post</h1>
                    <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                </div>
            </div>

            <div className="container">
                <div class="row featurette my-5 p-5">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-body-secondary">It’ll blow your mind.</span></h2>
                        <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div class="col-md-5">
                        <img src="" alt="default" />
                    </div>
                </div>

                <div class="row featurette my-5 p-5">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h2>
                        <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img src="" alt="default" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
