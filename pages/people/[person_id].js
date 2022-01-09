import Link from "next/link"

export default function person({ person, phones, addresses, donations }) {
  if (person != []) {
    console.log(donations)
    return (
      <div id="wrapper">
        <div id="box">
          <div id="link">
            <Link href={"/problem2"}>
              <a>&larr; donor list</a>
            </Link>
          </div>
          <h3>Donor Information</h3>
          <div id="addr">
            <div id="type">Name: </div>
            <div>{person.name}</div>
          </div>
          <div id="addr">
            <div id="type">Race: </div>
            <div>{person.ethnicity}</div>
          </div>
          <h3>Donations:</h3>
          <div>
            {JSON.stringify(donations) === `[]` ? "No donations to date" : ""}
          </div>

          {donations.map((donation, i) => {
            const index = donations.indexOf(donation) % 2
            console.log(index)
            return (
              <div
                id="d"
                className={index == 0 ? "highlight" : "other"}
                key={i}
              >
                <div id="addr">
                  <div>TYPE:</div>
                  <div>{donation.type}</div>
                </div>
                <div id="addr">
                  <div>TOTAL:</div>
                  <div>{donation.amount}</div>
                </div>
                <div id="addr">
                  <div>MEMO:</div>
                  <div>{donation.memo}</div>
                </div>
              </div>
            )
          })}
          <h3>Addresses:</h3>
          {addresses.map((address, i) => {
            return (
              <div key={i} id="addr">
                <div id="type">{address.address_type}:</div>
                <div>{address.the_address}</div>
              </div>
            )
          })}
          <h3>Phone Numbers:</h3>
          {phones.map((phone, i) => {
            return (
              <div key={i} id="addr">
                <div id="type">{phone.phone_type}:</div>
                <div>{phone.phone}</div>
              </div>
            )
          })}
        </div>
        <style jsx>{`
          #box {
            padding: 50px;
            margin-left: auto;
            margin-right: auto;
            height: 100vh;
            max-width: 900px;
          }
          #link {
            margin-bottom: calc(10px + 4vw);
          }
          div {
            padding: 1px;
          }
          #addr {
            display: grid;
            grid-template-columns: 100px 9fr;
          }
          #d {
            margin-bottom: 5px;
          }
          .other {
            background-color: #f8f8f3;
          }
          #type {
            text-transform: uppercase;
          }
          .highlight {
            background-color: #fffcdd;
          }
          @media only screen and (max-width: 900px) {
            #box {
              height: 100vw;
            }
          }
          @media only screen and (max-width: 700px) {
            #box {
            }
          }
        `}</style>
      </div>
    )
  } else {
    return <>Loading...</>
  }
}

export async function getServerSideProps({ params }) {
  console.log(params)
  const res = await fetch(
    `https://evening-stream-23706.herokuapp.com/${params.person_id}`
  )
  const data = await res.json()
  const person = data.recordsets[0][0]
  const phones = data.recordsets[1]
  const addresses = data.recordsets[2]
  const donations = data.recordsets[3]
  return { props: { person, phones, addresses, donations } }
}
