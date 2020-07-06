import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Front-end Dev (React Js) at QuantEdge JSC<span> August 2019- December 2019</span></h2>
                        <p>
                          I joined the Front-End team , my main job was to take and render datas from APIs , make responsive user interface , 
                          working with testers to fix bugs , fix bugs that was left on Jira after each sprint .
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at CMC Global (.NET Dev) <span>April 2019 - July 2019</span></h2>
                        <p>I learned how the company take on a project from the start , how teams interact and working together in Agile model , interacted and studied directly from
                          their team leaders and seniors . I did many excercises and projects from basic to advanded levels and finished the course with a mock-up project : an online
                          test application .
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Studying IT at Le Quy Don University (MTA) <span>2015-2020</span></h2>
                        <p>
                          I studied there with IT as my major , I got to experience programing languages at basic and advanded levels , learned their pros
                          and cons so I could decide which I should study further into . I learned to work with databases and did projects as well as group projects ,
                          all of that was to ensure I can do well when it comes to working in companies .
                        </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
