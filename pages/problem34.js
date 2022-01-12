import { AiOutlinePlusCircle } from "react-icons/ai"
import { useState } from "react"
import Navbar from "../components/Navbar"
import { random } from '../utils/random'

import { FaSearch } from "react-icons/fa";

import Link from "next/link"
import names from "../data.json"
export default function Home({ data }) {

  const [toggle, setToggle] = useState(true)
  const [filtered, setFiltered] = useState(data)

  const filterPosts = e => {
    let form = e.target.value.toLowerCase()
    let newArr = []
    newArr = data.filter((n, i) => {
      return n.title.search(form) != -1
    })
    setFiltered(newArr)
  }
  const restrictPosts = () => {
    setToggle(!toggle)
  }
  return (
    <div>
      <Navbar />
      <div id="box">
        <div id="summary">
        <div id="link">
          <Link href={"/"}>
            <a>&larr; home</a>
          </Link>
        </div>
        <h3>Project description</h3>
        <div id="repo">
          <a href="https://github.com/prokopious/assessment">
            <div>Link to the code for this site.</div>
          </a>
        </div>
        <p>
          This is a combination of questions 3 and 4. I Made the API call to
          jsonplaceholder using the Next.js getServersideProps API. It refreshes data on every request for up-to-date information,
          but it can be somehwat slow. Static pages would be faster, but data changes would have to wait untli the next build. I filtered the original dataset
          client-side and created a toggle button that hides any array item with
          an index greater than 9 (from my card array) via the display property.
          I kept track of application state (toggle state and filtered (search) data)
          using React's useState hook. For the cards and the grid itself, I used
          CSS grid for everything. The CSS is all written inside the JSX within
          special style tags supplied by Next.js. The style is my own version of
          neomorphism and I didn't use any CSS libraries or frameworks. No endpoint of the jsonplaceholder API had an 'author'
          field, so I supplied dummy author names, generated randomly from a JSON list. Because I combined two project, the interface won't look quite like either one.
        </p></div>
        <div id="gr">
          <h3>Photo Grid</h3>
          <div>
            <input
              type="text"
              placeholder="filter by title.."
              onChange={e => filterPosts(e)}
            />
          </div>
          <div>
            <div
              id="toggler"
              style={!toggle ? { display: "none" } : { display: "block" }}
              onClick={restrictPosts}
            >
              show more
            </div>
            <div
              id="toggler"
              style={toggle ? { display: "none" } : { display: "block" }}
              onClick={restrictPosts}
            >
              show fewer
            </div>
          </div>

          <div id="grid">
            {filtered.map((n, i) => {
              let number
              toggle == true ? (number = 10) : (number = 50)
              if (i < number || number == null) {
                return (
                  <div id="card">
                    <div id="grad"> </div>
                    <div id="troika">
                      <div id="info">
                        <div>
                          <h4 id="author">{random()}</h4>
                        </div>
                        <div id="title">{n.title}</div>
                      </div>
                      <div id="b">
                        <AiOutlinePlusCircle />
                      </div>
                    </div>
                  </div>
                )
              } else return <></>
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        #link {
          margin-bottom: calc(10px + 4vw);
        }
        #b {
          font-size: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        #image {
          object-fit: fill;
        }
        .in {
          border: 2px solid hsla(251, 54%, 43%, 0);
          box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.25),
            -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
          padding-top: 5px;
          padding-bottom: 5px;
          padding-left: 10px;
          padding-right: 10px;
          border-radius: 3px;
          margin-top: 0px;
          color: gray;
        }
        #author {
          margin-top: 0px;
        }
        h3 {
          margin-bottom: 16px;
        }
        input {
          border: 2px solid hsla(251, 54%, 43%, 0);
          box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.25),
            -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
          padding-top: 5px;
          padding-bottom: 5px;
          padding-left: 10px;
          padding-right: 10px;
          border-radius: 3px;
          margin-top: 0px;
          color: gray;
        }
        #toggler {
          background: linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.22),
            rgba(255, 255, 255, 0.25)
          );
          font-size: 12px;
          box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.25),
            -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
          padding-top: 5px;
          padding-bottom: 5px;
          padding-left: 8px;
          padding-right: 8px;
          text-align: center;
          border-radius: 3px;
          margin-top: 30px;
          width: 100px;
        }
        #grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 10px;
          margin-top: 10px;
        }
        #troika {
          display: grid;
          grid-template-columns: 7fr 2fr;
        }
        #info {
          display: grid;
          grid-template-rows: 30px 50px;
          padding: 10px;
        }
        #grad {
          background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
          height: calc(100px + 7vw);
        }
        #card {
          background: linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.22),
            rgba(255, 255, 255, 0.25)
          );

          border-radius: 3px;
          box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
            -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
        }
        #box {
          padding: 50px;
          margin-left: auto;
          margin-right: auto;
          max-width: 960px;
        }
        @media only screen and (max-width: 960px) {
          #box {
            padding: 20px;
          }
          #grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media only screen and (max-width: 700px) {
          #box {
            padding: 10px;
          }
          #card {
            display: grid;
            grid-template-columns: 3fr 7fr;
          }
          #author {
            padding-top: 5px;
          }
          #grad {
            height: 125px;
          }
          #grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)
  const data = await res.json()
  return { props: { data } }
}
