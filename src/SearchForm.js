import React from "react";

export default function SearchForm() {
  return (
    <section className="main-section">
      <div className="main-section-container">
        <form action="" id="search-form">
          <input
            type="text"
            id="search-input"
            placeholder="🔍 Enter your city"
          />
        </form>

        <div className="btn-container">
          <button className="button" id="search-btn">
            Search
          </button>
          <button className="button" id="current-btn">
            Current
          </button>
        </div>
      </div>
    </section>
  );
}
