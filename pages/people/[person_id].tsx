import Link from "next/link"
import { gql } from "@apollo/client"
import { GetServerSideProps } from 'next'
import client from "../../apollo-client"
import { Person } from "../../types/index"
import { InferGetServerSidePropsType } from "next"

export default function donor({
  person
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div id="wrapper">
      <div id="box">
        <div id="link">
          <Link href={"/problem2"}>
            <a>&larr; donor list</a>
          </Link>
        </div>
        <h3>Donor Information:</h3>
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
          {JSON.stringify(person.donations) === `[]`
            ? "No donations to date"
            : ""}
        </div>

        {person.donations.map((donation, i) => {
          return (
            <div
              id="d"
              className={
                person.donations.indexOf(donation) % 2 == 0
                  ? "highlight"
                  : "other"
              }
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
        {person.addresses.map((address, i) => {
          return (
            <div key={i} id="addr">
              <div id="type">{address.address_type}:</div>
              <div>{address.the_address}</div>
            </div>
          )
        })}
        <h3>Phone Numbers:</h3>

        {person.phones.map((phone, i) => {
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
          max-width: 960px;
        }
        #wrapper {
          padding-bottom: 300px;
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
        @media only screen and (max-width: 960px) {
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
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const { data } = await client.query({
    query: gql`
    query Donor {
      person(person_id: ${params.person_id}) {
        name
        ethnicity
        donations{
          memo
          type
          amount
        }
        phones {
          phone_type
          phone
        }
        addresses {
          the_address
          address_type
        }
      }
    }
    `,
  })

  const person: Person = await data.person

  return {
    props: {
      person,
    },
  }
}
