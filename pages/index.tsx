import Link from "next/link"

export default function home(): JSX.Element {
  return (
    <>
      <div id="cover">
        <div className="center">
          <h4 id="t">Todd Huyett</h4>
          <h4 id="code">Code Assessment</h4>
          <div id="project">
            <Link href="/problem2">
              <a>Project 2</a>
            </Link>
          </div>
          <div id="project">
            <Link href="/problem34">
              <a>Projects 3 and 4</a>
            </Link>
          </div>
          <div>
            <div id="project2">
              <a href="https://github.com/prokopious">GitHub</a>
            </div>
            <div id="project2">
              <a id="port" href="https://www.toddhuyett.com/">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #code {
          margin-top: -4px;
        }
        h4 {
          margin: 0;
          padding: 0;
          font-size: calc(16px + 0.7vw);
          color: #234361;
        }
        #t {
          margin-bottom: -4px;
        }
        #project {
          display: inline-block;
          padding: 3px;
        }
        #project2 {
          display: inline-block;
          padding-top: 0px;
          padding: 3px;
        }
        #port {
          padding-top: 0px;
          margin-top: -10px;
        }
        a {
          font-size: calc(12px + 0.7vw);
          padding: 4px;
        }
        #cover {
          position: relative;
          padding-bottom: 100px;
          min-height: 100vh;
          margin-top: -5px;
        }
        .center {
          position: fixed;
          text-align: center;
          margin-top: -20px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        @media only screen and (max-width: 900px) {
          h4 {
            margin: 0;
            padding: 0;
          }
          #code {
          }
          a {
            padding: 1px;
            padding-top: 0px;
          }
          #t {
            margin-bottom: -2px;
          }
          #project {
            display: inline-block;
            padding: 3px;
          }
          #project2 {
            display: inline-block;
            margin-top: -5px;
          }
        }
      `}</style>
    </>
  )
}
