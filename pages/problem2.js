import Link from "next/link"
export default function Problem2({ people, donations }) {
  if (people != []) {
    return (
      <>
        <div id="box">
          <Link href={"/"}>
            <a>
              <h3>&larr; home</h3>
            </a>
          </Link>
          <h3>Project summary:</h3>
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
            This project consists of a MSSQL Server deployed on AWS RDS. The
            data is fetched from a Node.js REST API{" "}
            <a href="https://github.com/prokopious/rds/blob/main/app.js">
              (see the code here)
            </a>{" "}
            deployed on Heroku, which makes SQL queries on behalf of the client.
            I connected to my database instance using MSSQL Server Management
            Studio (and built the database itself using SQL commands). Due to
            the large number of people (over 1,000,000) in the database, I opted
            for server-side rendering as opposed to static rendering, which
            keeps users of the data up to date in the event of a change. The
            database itself is otherwise auto-scaling. I chose to use
            one-to-many relationships for donations, phone numbers, and
            addresses. I did so to retain flexibility (there could well be a
            person with 10 mobile numbers). The same is true of the donations.
            Below is a donor list with a brief summary for each person. Click on
            a name to see more details. You will be taken to a dynamically
            generated page.
          </p>
      
          <h2>Donor List</h2>
          {people.map((person, i) => {
            const sorted = donations.sort((a, b) =>
              a.amount < b.amount ? 1 : -1
            )
            let result = sorted.find(obj => {
              return obj.person_id === person.person_id
            })

            return (
              <>
                <div key={i}>
                  <Link href={`/people/${person.person_id}`}>
                    <a>
                      <h4 id="name">{person.name}</h4>
                    </a>
                  </Link>

                  <div>
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
        <style jsx>{`
          #name {
            padding-bottom: 0;
            margin-bottom: 0;
          }
          #repo {
            font-size: 18px;
          }
          a {
            color: black;
          }

          #box {
            margin-left: 20px;
            padding-top: 25px;
            padding-left: 10px;
            padding-right: 20px;
            margin-top: 10px;
            height: 100vw;
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
