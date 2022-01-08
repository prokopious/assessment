import { AiOutlinePlusCircle } from "react-icons/ai"
import { useState } from "react"
import Navbar from "../components/Navbar"
import Link from 'next/link'
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
      <Link href={"/"}>
          <a>
            <h3>&larr; home</h3>
          </a>
        </Link>
        <h3>Project description</h3>
        <div id="repo">
            <a href="https://github.com/prokopious/assessment">
              <div>Link to the code for this site.</div>
            </a>
          </div>
        <p>This is a combination of questions 3 and 4. I Made the API call to jsonplaceholder using the Next.js getServersideProps API, which, now that I think about it, probably wasn't the best choice for this use case. It refreshes data on every request for up-to-date information, but it can be somehwat slow. I filtered the original dataset client-side and created a toggle button that hides any array item with an index greater than 9 (from my card array) via the display property. I kept track of application state (toggle state and filtered data) using React's useState hook. For the cards and the grid itself, I used CSS grid for everything. The CSS is all written inside the JSX within special style tags supplied by Next.js. The style is my own version of neomorphism. No endpoint of the jsonplaceholder API had an 'author' field, so I supplied dummy author names. My version of the site isn't identical to the example, but I got the feeling that there was at least some room to change things.   </p>
        <div>
          <h3>Photo Grid</h3>
          <div>
            <input
              type="text"
              placeholder="Filter by title"
              onChange={e => filterPosts(e)}
            />
          </div>
          <div>
            <button
              id="toggler"
              style={!toggle ? { display: "none" } : { display: "block" }}
              onClick={restrictPosts}
            >
              show more
            </button>
            <button id="toggler"
              style={toggle ? { display: "none" } : { display: "block" }}
              onClick={restrictPosts}
            >
              show fewer
            </button>
          </div>

          <div id="grid">
            {filtered.map((n, i) => {
              let number
              if (toggle == true) {
                number = 10
              } else {
                number = null
              }
              if (i < number || number == null) {
                let random = Math.floor(Math.random() * 1000)
                let name = names[random]
                return (
                  <div id="card">
                    <div id="grad"></div>
                    <div id="troika">
                      <div id="info">
                        <div>
                          <h4 id="author">{name}</h4>
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
        #b {
          font-size: 30px;
          color; blue;
          display: flex;
        justify-content: center;
        align-items: center;
        }  
      #author {
      margin-top: 0px;
        }
        input {
          border: none;
          padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 3px;
        border: 2px solid hsla(251, 54%, 43%, 0);
        color: gray;
        background-color: #cacaff
        padding-left: 10px;
        padding-right: 10px;
        box-shadow: 7px 7px 10px 0 rgba(0, 0, 0, 0.25),
   -4px -4px 7px 0 rgba(255, 255, 255, 0.3);
        }
        #toggler {
          background-color: white;
          border: 2px solid hsla(251, 54%, 43%, 0);
     
          box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
   -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 10px;
        padding-right: 10px;
          border-radius: 3px;
          margin-top: 10px; 
        color: gray;
        }
        #grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 10px;
          margin-top: 30px;
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
          height: 100px;
        }
    
        #card {
          background: linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));

    
          border-radius: 3px;
          box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
   -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
        }
        #box {
          padding: 20px;
        }
        @media only screen and (max-width: 900px) {

#grid {
  grid-template-columns: 1fr 1fr;
}}

        @media only screen and (max-width: 700px) {
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
}}`}</style>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)
  const data = await res.json()
  return { props: { data } }
}
