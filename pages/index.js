import Link from "next/link"

export default function sparrow() {
  return (
    <>
      <div id="cover">
        <div className="center">
          <h4 id="t">Todd Huyett</h4>
          <h4>Code Assessment</h4>
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
              <a id="port" href="https://www.toddhuyett.com/">Portfolio</a>
            </div>
          
          </div>
        </div>
      </div>

      <style jsx>{`
 
        h4 {
        margin: 0;
        padding: 0;
          font-size: 20px;
          color: black;
        }
        #t {
          margin-bottom: -4px;
        }
        #project {
          display: inline-block;
          padding: 3px;
    
          font-size: 15;
       
        }
        #project2 {
          display: inline-block;
          font-size: 15;
          padding-top: 0px;
          padding: 3px;
     
        }
        #port {
          padding-top: 0px;
          margin-top: -10px;

        }
        a {
        
          font-size: 15px;
          padding: 4px;
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
        @media only screen and (max-width: 900px) {
          h4 {
        margin: 0;
        padding: 0;
          font-size: 16px;
          color: black;
        }
        a {
        
        font-size: 15px;
        padding: 3px;
        padding-top: 0px;
        color: #303058;
      }
        #t {
          margin-bottom: -2px;
        }
        #project {
          display: inline-block;
          padding: 3px;
    
          font-size: 15;
       
        }
        #project2 {
          display: inline-block;
          font-size: 13;
          margin-top: -5px;
        
        }
      }
      `}</style>
    </>
  )
}
