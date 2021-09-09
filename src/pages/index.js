import React from "react"
import Layout from "../components/Layout"
export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  )
}
