export default function About() {
  return (
    <section id="about" className="s-about target-section">
      <div className="col section-intro has-bottom-sep">
        <h1>About Me</h1>
        <div className="text-left" style={{ margin: "0px 40px" }}>
          <p>
            I am passionate about software systems, and have done considerable
            work as a full-stack engineer. No matter the project, I ultimately
            just love the process of fitting together many moving parts! While I
            currently reside in Philadelphia, PA, I grew up in the suburbs of
            Atlantic City, NJ. I hold a bachelor's degree in Computer Science from the
            University of Pennsylvania.
          </p>
        </div>
      </div>

      <div className="col" style={{ justifyContent: "center" }}>
        <div>
          <center>
            <h3>My Work Experience.</h3>
          </center>
        </div>

        <div className="tab-full">
          <div className="timeline">
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <p className="timeline__timeframe">May 2022 - Aug 2022</p>
                <h3>Meta</h3>
                <h5>Software Engineer Intern</h5>
              </div>
              <div className="timeline__desc">
                <p>
                  - Implemented FB Watch ads previews (React JS) for Meta Ads
                  Manager. Created formats accounting for &gt;50M ads per day.
                  <br />- Built featured product information card for FB Live
                  Shopping using React (web) and a server-side rendering
                  framework (mobile).
                </p>
              </div>
            </div>
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <p className="timeline__timeframe">Jan 2021 - Dec 2022</p>
                <h3>Penn Engineering</h3>
                <h5>Teaching Assitant: Data Structurees and Algorithms</h5>
              </div>
              <div className="timeline__desc">
                <p>
                  -Instructed recitations of &gt;15 students on the theory
                  behind fundamental data structures and algorithms.
                  <br />- Created and graded exams as well as written and
                  programming (Java) homework assignments.
                </p>
              </div>
            </div>
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <p className="timeline__timeframe">May 2021 - Aug 2021</p>
                <h3>Facebook</h3>
                <h5>Software Engineer Intern</h5>
              </div>
              <div className="timeline__desc">
                <p>
                  - Developed framework to automate project onboarding, saving
                  team members &gt;30 minutes of work per project.
                  <br />- Created tool that enables customers to request new ACS
                  projects and view use cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
