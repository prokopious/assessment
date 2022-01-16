import { Person, Donation } from "../types/index"
import Link from "next/link"
import { FunctionComponent } from "react"

type ItemProps = {
  person: Person
}

export const ListItem: FunctionComponent<ItemProps> = ({
  person,
}) => {
    let donations: Donation[] = person.donations
    .map((item: Donation, i) => {
      return item
    })
    .sort((a, b) => (a.amount > b.amount ? 1 : -1))
  return (
    <div>
      <div className="list">
        <Link href={`/people/${person.person_id}`}>
          <a>
            <div id="name">{person.name}</div>
          </a>
        </Link>
        <div id="donation">
          {donations.length
            ? "Highest donation: $" + donations[0].amount
            : "No donations to date"}
        </div>
        <div>
          <i>{donations.length ? donations[0].memo : ""}</i>
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
        #donation {
          padding-top: 5px;
          padding-bottom: 5px;
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
      `}</style>
    </div>
  )
}

export default ListItem
