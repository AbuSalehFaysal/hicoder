import React from 'react';
import './Slider2.css'

const Slider2 = () => {
    return (
        <section id="carousel">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <div class="quote"><i class="fa fa-quote-left fa-4x"></i></div>
                        <div class="carousel slide" id="fade-quote-carousel" data-ride="carousel" data-interval="3000">
                            {/* <!-- Carousel indicators --> */}
                  <ol class="carousel-indicators">
                                <li data-target="#fade-quote-carousel" data-slide-to="0" class="active"></li>
                                <li data-target="#fade-quote-carousel" data-slide-to="1"></li>
                                <li data-target="#fade-quote-carousel" data-slide-to="2"></li>
                            </ol>
                            {/* <!-- Carousel items --> */}
				  <div class="carousel-inner">
                                <div class="active item">
                                    <blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    </blockquote>
                                    <div class="profile-circle" style={{backgroundColor: "rgba(0,0,0,.2)"}}></div>
                                </div>
                                <div class="item">
                                    <blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    </blockquote>
                                    <div class="profile-circle" style={{backgroundColor: "rgba(77,5,51,.2)"}}></div>
                                </div>
                                <div class="item">
                                    <blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    </blockquote>
                                    <div class="profile-circle" style={{backgrounColor: "rgba(145,169,216,.2)"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider2;