import Link from "next/link"
import { gql } from "@apollo/client"
import { Person } from "../types/index"
import { InferGetServerSidePropsType } from "next"
import client from "../apollo-client"
import { GetServerSideProps } from "next"
import ListItem from "../components/ListItem"

export default function Problem2({
  people,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
            <a href="https://blooming-island-13363.herokuapp.com/">
              <div>Link to GraphQL endpoint</div>
            </a>
          </div>
          <div id="repo">
            <a href="https://github.com/prokopious/assessment/blob/main/pages/problem2.tsx">
              <div>Code for this page</div>
            </a>
          </div>

          <p>
            This project consists of a MsSQL Server deployed on AWS RDS. The
            data is fetched from a Node.js REST API deployed on Heroku, which
            makes SQL queries on behalf of an Apollo GraphQL server (also
            deployed on Heroku). The same GraphQL server could easily fetch data
            from additional sources and then make it possible for the client to
            fetch data from multiple sources with a single API call and select
            only the fields that it needs. Originally, I wasn't sure whether to
            use GraphQL, which is why there's a REST API between the database
            and the GraphQL server (which I decided to keep for this exercise).
            I could just as easily have used the MsSQL database alone with
            GraphQL. On the client side, the front-end was built with Next.js
            and Typescript. I fetch data from the GraphQL API using the Apollo
            Client library. Please refer to the link above to see the code for
            this page. I connected to my database instance using MsSQL Server
            Management Studio (and created the tables, etc., using SQL
            commands). I chose to use one-to-many relationships for donations,
            phone numbers, and addresses. I did so to retain flexibility (there
            could well be a person with 10 mobile numbers). The same is true of
            the donations. Below is a donor list with a brief summary for each
            person. Click on a name to see more details. You will be taken to a
            dynamically generated page.
          </p>

          <h3>Donor List:</h3>
          <div id="dlist">
            {people.map((person: Person, i) => {
              return (
                <>
                  <ListItem person={person} />
                </>
              )
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        #link {
          margin-bottom: calc(10px + 4vw);
        }
        #dlist {
          padding-bottom: 100px;
        }
        #wrapper {
          height: 100vw;
        }
        div {
          padding: 1px;
        }
        #box {
          padding: 50px;
          margin-left: auto;
          margin-right: auto;
          max-width: 960px;
          height: 100vw;
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
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
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
    `,
  })

  const people: Person[] = data.people

  return {
    props: {
      people,
    },
  }
}
