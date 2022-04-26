import { 
  asyncGetQuotes, thenGetQuotes,
  asyncTryGetQuotes, thenTryGetQuotes,
  asyncFinallyGetQuotes, thenFinallyGetQuotes,
  thenAsyncGetQuotes, asyncThenGetQuotes,
} from './services/promise-me';

export default function App() {
  return (
    <>
      <button onClick={async () => console.log(await asyncGetQuotes())}>
        asyncGetQuotes
      </button>
      <button onClick={async () => console.log(await thenGetQuotes())}>
        thenGetQuotes
      </button>
      <button onClick={async () => console.log(await asyncTryGetQuotes())}>
        asyncTryGetQuotes
      </button>
    </>
    )
}
