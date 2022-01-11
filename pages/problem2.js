import Link from "next/link"
import { useQuery, gql } from "@apollo/client"

const QUERY = gql`
  query Donors {
    people {
      name
      person_id
      donations {
        amount
        type
        memo
      }
    }
  }
`
export default function Problem2() {
  const { data, loading, error } = useQuery(QUERY)
  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    console.error(error)
    return null
  }
    return (
      <>
        <div id="wrapper">
          <div id="box">
            <div id="link">
              <Link href={"/"}>
                <a>&larr; home</a>
              </Link>
            </div>
            <h3>Project 2 summary:</h3>
            <div id="repo">
              <a href="https://github.com/prokopious/rds/blob/main/app.js">
                <div>Link to REST API code</div>
              </a>
            </div>
            <div id="repo">
              <a href="https://evening-stream-23706.herokuapp.com/">
                <div>Link to REST endpoint</div>
              </a>
            </div>
            <div id="repo">
              <a href="https://github.com/prokopious/apollo/blob/main/index.js">
                <div>Link to GraphQL server code</div>
              </a>
            </div>
            <div id="repo">
              <a href="https://evening-stream-23706.herokuapp.com/">
                <div>Link to GraphQL endpoint</div>
              </a>
            </div>
          
            <p>
              This project consists of a MsSQL Server deployed on AWS RDS. The
              data is fetched from a Node.js REST API{" "}
              <a href="https://github.com/prokopious/rds/blob/main/app.js">
                (see the code here)
              </a>{" "}
              deployed on Heroku, which makes SQL queries on behalf of a GraphQL server (also deployed on Heroku).
              The same GraphQL server could easily fetch data from additional sources and then make it possible for the client to fetch data from multiple sources with a single API call and select only the fields that it needs.     
              I connected to my database instance using
              MsSQL Server Management Studio (and creates the tables, etc., 
              using SQL commands). I chose to use one-to-many relationships
              for donations, phone numbers, and addresses. I did so to retain
              flexibility (there could well be a person with 10 mobile numbers)
              and efficiency. The same is true of the donations. Below is a
              donor list with a brief summary for each person. Click on a name
              to see more details. You will be taken to a dynamically generated
              page.
            </p>

            <h3>Donor List:</h3>
            <div id="dlist">
              {data.people.map((person, i) => {
         let arr = [];
         person.donations.forEach(element => {
           arr.push(element)
         });
     
        
        
                const sorted = arr.sort((a, b) =>
                  a.amount > b.amount ? 1 : -1
                )
                console.log(sorted[0].amount)
        
             
      
                return (
                  <>
                    <div className="list" key={i}>
                      <Link href={`/people/${person.person_id}`}>
                        <a>
                          <div id="name">{person.name}</div>
                        </a>
                      </Link>

                      <div id="donation">
                        {sorted[0].amount
                          ? "Highest donation: $" + sorted[0].amount
                          : "No donations to date"}
                      </div>
                      <div>
                        <i>{sorted[0].memo ? sorted[0].memo : ""}</i>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
        <style jsx>{`
          #name {
            color: #393535;
            font-size: calc(16px + 0.2vw);
            margin-bottom: 0;
          }
          #link {
            margin-bottom: calc(10px + 4vw);
          }
          #dlist {
            padding-bottom: 100px;
          }
          #donation {
            padding-top: 5px;
            padding-bottom: 5px;
          }
          #wrapper {
            height: 100vw;
          }
          .list {
            border-radius: 5px;
            margin-bottom: 10px;
            background-color: #f3f3f3;
            mix-blend-mode: multiply;
          }
          div {
            padding: 1px;
          }
          #box {
            padding: 50px;
            margin-left: auto;
            margin-right: auto;
            max-width: 900px;
            height: 100vw;
          }
          @media only screen and (max-width: 900px) {
            #box {
              height: 100vw;
              padding: 20px;
            }
          }
          @media only screen and (max-width: 700px) {
            #box {
              height: 100vw;
            }
          }
        `}</style>
      </>
    )
  } 


export async function getServerSideProps() {
  const res = await fetch(`https://evening-stream-23706.herokuapp.com/`)
  const data = await res.json()
  const people = data.recordsets[0]
  console.log(data.recordsets)
  const donations = data.recordsets[1]
  return { props: { people, donations } }
}
