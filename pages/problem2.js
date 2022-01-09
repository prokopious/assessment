import Link from "next/link"
export default function Problem2({ people, donations }) {
  if (people != []) {
    return (
      <>
        <div id="wrapper">
          <div id="box">
            <div id="link"><Link href={"/"}>
              <a>
              &larr; home
              </a>
            </Link></div>
            <h3>Project 2 summary:</h3>
            <div id="repo">
              <a href="https://evening-stream-23706.herokuapp.com/">
                <div>Link to raw API endpoint data</div>
              </a>
            </div>
            <div id="repo">
              <a href="https://github.com/prokopious/rds/blob/main/app.js">
                <div>Link to server code</div>
              </a>
            </div>
            <p>
              This project consists of a MsSQL Server deployed on AWS RDS. The
              data is fetched from a Node.js REST API{" "}
              <a href="https://github.com/prokopious/rds/blob/main/app.js">
                (see the code here)
              </a>{" "}
              deployed on Heroku, which makes SQL queries on behalf of the
              client. Please refer to the provided server-side code (app.js) to
              see those queries. I only exposed two GET endpoints, but it could
              easily be expanded. I connected to my database instance using
              MsSQL Server Management Studio (and built the database itself
              using SQL commands). Due to the large number of people (over
              1,000,000) in the database, I opted for server-side rendering as
              opposed to static rendering, which keeps users up to date in the
              event of a data change. I chose to use one-to-many relationships
              for donations, phone numbers, and addresses. I did so to retain
              flexibility (there could well be a person with 10 mobile numbers)
              and efficiency. The same is true of the donations. Below is a
              donor list with a brief summary for each person. Click on a name
              to see more details. You will be taken to a dynamically generated
              page.
            </p>

            <h3>Donor List</h3>
            {people.map((person, i) => {
              const sorted = donations.sort((a, b) =>
                a.amount < b.amount ? 1 : -1
              )
              let result = sorted.find(obj => {
                return obj.person_id === person.person_id
              })

              return (
                <>
                  <div className="list" key={i}>
                    <Link href={`/people/${person.person_id}`}>
                      <a>
                        <div id="name">{person.name}</div>
                      </a>
                    </Link>

                    <div id="donation">
                      {result.amount != []
                        ? "Highest donation: $" + result.amount
                        : "No donations to date"}
                    </div>
                    <div>
                      <i>{result.memo ? result.memo : ""}</i>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
        <style jsx>{`
          #name {
        color: #393535;
        font-size: calc(16px + .2vw);
            margin-bottom: 0;
          
          }

          #link {
            margin-bottom: calc(10px + 4vw);
    
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
  
            }
          }
          @media only screen and (max-width: 700px) {
            #box {
          
            }
          }
        `}</style>
      </>
    )
  } else {
    return <>Loading...</>
  }
}

export async function getServerSideProps() {
  const res = await fetch(`https://evening-stream-23706.herokuapp.com/`)
  const data = await res.json()
  const people = data.recordsets[0]
  console.log(data.recordsets)
  const donations = data.recordsets[1]
  return { props: { people, donations } }
}
