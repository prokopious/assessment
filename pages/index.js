import Link from "next/link"

export default function sparrow() {
  return (
    <>
      <div id="cover">
        <div className="center">
          <h4>Todd Huyett's Assessment</h4>
          <div id="project">
            <Link href="/problem2"><a >Project 2</a></Link>
          </div>
          <div id="project">
            <Link href="/problem34"><a>Projects 3 and 4</a></Link>
          </div>
          <div>
            <div id="project2">
              <a href="https://github.com/prokopious">Github</a>
            </div>
            <div id="project2">
              <a href="https://www.toddhuyett.com/">Portfolio</a>
            </div>
          
          </div>
        </div>
      </div>

      <style jsx>{`
        h4 {
          margin-bottom: 5px;
          font-size: 24px;
          color: black;
        }
        #project {
          display: inline-block;
          padding: 4px;
          color: gray;
          font-size: 20;
       
        }
        #project2 {
          display: inline-block;
          font-size: 18;
          color: gray;
          padding: 3px;
        }
        a {
        
          font-size: 19px;
          padding: 5px;
          color: #5c5c5c;
        }
        #cover {
          position: relative;
          padding-bottom: 100px;
          min-height: 100vh;
          background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
        }
        .center {
          position: fixed;
          text-align: center;
          font-weight: 600;
          color: #3d3a3a;
          top: 50%;
          left: 50%;
          /* bring your own prefixes */
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  )
}
