import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((requestError) => {
        console.error('Unable to load jokes:', requestError)
        setError('We couldn’t load the jokes right now. Please try again later.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <main className="page-shell">
      <div className="page-container">
        <header className="topbar">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">☺</span>
            <span>the giggle club</span>
          </div>
          <span className="collection-label">Your daily dose of fun</span>
        </header>

        <section className="hero" aria-labelledby="page-title">
          <span className="eyebrow">A little laughter goes a long way</span>
          <h1 id="page-title">Good jokes.<br />Better <span>days.</span></h1>
          <p className="hero-copy">
            Take a tiny break, find your favorite, and pass a smile along.
            There’s always room for one more laugh.
          </p>
        </section>

        <section aria-labelledby="joke-list-title">
          <div className="list-heading">
            <h2 id="joke-list-title">Fresh from the joke jar</h2>
            <span className="joke-count" aria-live="polite">
              {isLoading ? 'Loading…' : `${jokes.length} ${jokes.length === 1 ? 'joke' : 'jokes'}`}
            </span>
          </div>

          {isLoading && (
            <p className="status-message" role="status">Gathering some laughs…</p>
          )}

          {!isLoading && error && (
            <p className="status-message error" role="alert">{error}</p>
          )}

          {!isLoading && !error && jokes.length === 0 && (
            <p className="status-message">The joke jar is empty for now. Check back soon!</p>
          )}

          {!isLoading && !error && jokes.length > 0 && (
            <div className="joke-grid">
              {jokes.map((joke, index) => (
                <article className="joke-card" key={joke.id}>
                  <div className="card-topline">
                    <span className="joke-number">Joke {String(index + 1).padStart(2, '0')}</span>
                    <span className="quote-mark" aria-hidden="true">“</span>
                  </div>
                  <h3>{joke.title}</h3>
                  <p>{joke.content}</p>
                </article>
              ))}
            </div>
          )}
        </section>

        <footer className="page-footer">Made for smiles, one joke at a time.</footer>
      </div>
    </main>
  )
}

export default App
