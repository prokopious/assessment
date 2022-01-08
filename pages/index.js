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
    
          font-size: 20;
       
        }
        #project2 {
          display: inline-block;
          font-size: 18;
   
          padding: 3px;
        }
        a {
        
          font-size: 19px;
          padding: 5px;
          color: #303058;
        }
        #cover {
          position: relative;
          padding-bottom: 100px;
          min-height: 100vh;
        }
        .center {
          position: fixed;
          text-align: center;
        
      
          top: 50%;
          left: 50%;
          /* bring your own prefixes */
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  )
}
