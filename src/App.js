import './App.css';
import CounterClass from './components/Counter/CounterClass'
import CounterFn from './components/Counter/CounterFn';
import CounterNumber from './components/Counter/CounterNumber';
import BuyStockClass from './components/BuyStock/BuyStockClass'
import { useContext, useState } from 'react';
import BuyStockFn from './components/BuyStock/BuyStockFn';
import { CounterContext } from './context/counterContext';
import BuyStockNumber from './components/BuyStock/BuyStockNumber';


const pageInfo = [
  {
    pageName: "CounterClass",
    pageComponent: CounterClass
  },
  {
    pageName: "CounterFn",
    pageComponent: CounterFn
  },
  {
    pageName: "BuyStockClass",
    pageComponent: BuyStockClass
  },
  {
    pageName: "BuyStockFn",
    pageComponent: BuyStockFn
  }
]

function App() {

  const [currentPage, setCurrentPage] = useState(pageInfo[1])
  const value = useContext(CounterContext);

  console.log("APP", value)
  const hanldeChangePage = (activePageInfo) => {
    setCurrentPage(activePageInfo)
  }

  const renderCurrentPage = () => {
    const CurPage = currentPage.pageComponent
    return <CurPage patrick="patrick" />
  }

  return (
    <div className="App" hello="hello">
      <header className="App__header">
        <nav className="App__header__nav">
          {pageInfo.map(page => {
            switch (page.pageName) {
              case "CounterClass":
                return <a onClick={() => hanldeChangePage(page)} >
                    {page.pageName} <CounterNumber />
                    </a>
              case "BuyStockClass":
                return <a onClick={() => hanldeChangePage(page)} >
                  {page.pageName} <BuyStockNumber />
                  </a>
              default:
                return <a onClick={() => hanldeChangePage(page)} >{page.pageName}</a>
            }
          })}
        </nav>
      </header>
      {
        renderCurrentPage()
      }
    </div>
  );
}

export default App;
