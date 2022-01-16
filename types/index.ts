export interface Person {
  person_id: number
  name: string
  ethnicity: string
  ssn: string
  donations: Donation[]
  addresses: Address[]
  phones: Phone[]
}

type ReadonlyNullable<T> = {
    readonly [K in keyof T]: T[K] | null;
}

export interface Donation {
  type: string
  amount: string
  date: string
  memo: string
  donation_id: number
  person_id: number
}

export interface Address {
  address_id: number
  person_id: number
  the_address: String
  address_type: String
}

export interface Phone {
    phone_id: number
    person_id: number
    phone: String
    phone_type: String
  }