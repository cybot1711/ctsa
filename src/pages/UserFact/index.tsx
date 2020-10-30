import './styles/index.scss'
import React, { FunctionComponent } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import Layout from '../../components/Layout'
import { useFetchAvatarData } from '../../hooks'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Tilt from 'react-tilt'

export type Props = RouteComponentProps<Record<string, string | undefined>>

const UserFact: FunctionComponent = () => {
  const { response, error, loading, data } = useFetchAvatarData()
  return (
    <Layout>
      <>
        {!loading && (
          <div className="container">
            <div>
              {!loading && (
                <Tilt>
                  <img src={response} alt="avatar" />
                </Tilt>
              )}
            </div>
            <div>
              <Link className="link" to="/">
                Back
              </Link>
              {!loading && !error && data && data.user && (
                <ul>
                  <li>
                    Added by {data.user.name.first} {data.user.name.last}
                  </li>
                  <li>
                    Fact: <span className="white-text">{data.text}</span>
                  </li>
                  <li>
                    Upvotes: <span className="white-text">{data.upvotes}</span>
                  </li>
                  <li>
                    User Upvotes:{' '}
                    <span className="white-text">
                      {data.userupvotes ?? 'None'}
                    </span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        )}
      </>
    </Layout>
  )
}

export default UserFact
