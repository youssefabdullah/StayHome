import React, { Component } from 'react'
import './Backgroundproperty.css'
import Element from './Element'
class Property extends Component{

    render(){
        return(
            <div>
            <section class="hero-wrap hero-wrap-2"  data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-9 ftco-animate pb-4">
            <h1 class="mb-3 bread">Properties</h1>
             <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>Properties <i class="ion-ios-arrow-forward"></i></span></p>
          </div>
        </div>
      </div>
    </section>
    <Element/>
    {/* <div className="item">
                <div class="img">
                    <img src="images/work-1.jpg" class="img-fluid"/>
                </div>
                <div class="desc">
                    <div
                        class="text bg-primary d-flex text-center align-items-center justify-content-center">
                        <span>Sale</span>
                    </div>
                    <div class="d-flex pt-5">
                        <div>
                            <h3><a href="properties.html">Fatima Subdivision</a></h3>
                        </div>
                        <div class="pl-md-4">
                            <h4 class="price">$120,000</h4>
                        </div>
                    </div>
                    <p class="h-info"><span class="location">New York</span> <span
                            class="details">&mdash; 3bds, 2bath</span></p>
                </div>

                <style>{"\
                    .item{\
                        width: 350px;\
                    }\
                    h3{\
                        text-align: left;\
                    }\
                "}</style>


            </div>

    <div class="row mt-5">
		          <div class="col text-center">
		            <div class="block-27">
		              <ul>
		                <li><a href="#">&lt;</a></li>
		                <li class="active"><span>1</span></li>
		                <li><a href="#">2</a></li>
		                <li><a href="#">3</a></li>
		                <li><a href="#">4</a></li>
		                <li><a href="#">5</a></li>
		                <li><a href="#">&gt;</a></li>
		              </ul>
		            </div>
		          </div>
		        </div> */}
    </div>
    
            )
        }
    }
    export default Property