import * as React from 'react'
import './styles/index.scss'
import { CatFact } from '../../interfaces'
import { Link } from 'react-router-dom'
import { FunctionComponent } from 'react'

type Props = {
  data: CatFact[]
  loading: boolean
}

const Table: FunctionComponent<Props> = ({ data, loading }) => (
  <div className="scroll-container">
    <table>
      <thead>
        <tr>
          <th scope="col">User Id</th>
          <th scope="col">First name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Cat Text</th>
          <th scope="col">Upvotes</th>
        </tr>
      </thead>
      <tbody>
        {!loading &&
          data.length > 0 /* Double check here */ &&
          data.map((fact) => (
            <tr key={fact._id}>
              <td data-label="User id">
                <Link to={`/fact/${fact._id}`}>{fact._id} </Link>
              </td>
              <td data-label="First name">
                {fact.user && fact.user.name.first}
              </td>
              <td data-label="Last name">{fact.user && fact.user.name.last}</td>
              <td data-label="Text">{fact.text}</td>
              <td data-label="Upvotes">{fact.user && fact.upvotes}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
)

export default Table
