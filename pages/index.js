import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import withData from '../withData'


const query = `
query listTasks {
      listTasks(limit:100) {
        items{
          id
          name
        }
      }
    }`;


class App extends React.Component {
  render() {
    console.log('props: ', this.props)
    return <div>
      <p>Hello World waiting2</p>
      {
        this.props.tasks.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))
      }
    </div>
  }
}

// export default App

const AppWithTodos = graphql(gql(query), {
    options: (props) => ({
      fetchPolicy: 'network-only',
      variables: {limit:1000},
      authMode: 'API_KEY'
    }),
    props: ({ data: { listTasks = { items: [] } } }) => ({
      tasks: listTasks.items
    })
  }
)(App)


export default withData(AppWithTodos)