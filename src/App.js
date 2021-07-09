import { Layout } from './Layout'
import { Information, Map, Settings, Sight, NotFound } from './pages'

function App() {
  return (
    <Layout>
      <Map />
      <Sight />
      <Information />
      <Settings />
      <NotFound />
    </Layout>
  );
}

export default App;
