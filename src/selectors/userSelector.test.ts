import { TEST_DATA } from '../constants'
import { userSelector } from './userSelector'

test('should return a cat fact by id', () => {
  const fact = userSelector(
    { factList: TEST_DATA, loading: false },
    TEST_DATA[0]._id
  )
  const expected = {
    _id: '591d9b2f227c1a0020d26823',
    text:
      'Every year, nearly four million cats are eaten in China as a delicacy.',
    type: 'cat',
    upvotes: 9,
    user: {
      _id: '5a9ac18c7478810ea6c06381',
      name: {
        first: 'Alex',
        last: 'Wohlbruck',
      },
    },
    userUpvoted: null,
  }

  expect(fact).toEqual(expected)
})

test('should return undefined if nou record found', () => {
  const fact = userSelector(
    { factList: TEST_DATA, loading: false },
    '123youcantfindme'
  )

  expect(fact).toEqual(undefined)
})
