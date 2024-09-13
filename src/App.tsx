// data
import MetaJSON from "./data/Meta.json"

// Components
import Footer from './components/Footer/Footer';
import PageMeta from './components/PageMeta/PageMeta';
import MainErrorBoundary from "./utils/errorhandlers/ErrorBoundary";

// styles
import './App.module.scss';


const App = () => {
  return (
    <PageMeta
      pageTitle={MetaJSON.home.title}
      pageDescription={MetaJSON.home.description}
    >
      <MainErrorBoundary onError={() => { }}>
        <Footer />
      </MainErrorBoundary>
    </PageMeta>
  )
}

export default App;
