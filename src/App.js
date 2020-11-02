function App() {
  return (
    <>
      <ul>
        <li>Unordered list item 1</li>
        <li>Unordered list item 2</li>
      </ul>

      <ol>
        <li>Ordered list item 1</li>
        <li>Ordered list item 2</li>
      </ol>

      <dl>
        <dt>Description list item 1</dt>
        <dd>Description list item 1.1</dd>
      </dl>

      <br />
      <a className="button" href="#">
        Default Button
      </a>

      <button className="button button-outline">Outlined Button</button>

      <input
        className="button button-clear"
        type="submit"
        value="Clear Button"
      ></input>
      <br />

      <div className="container">
        <div className="row">
          <div className="column">.column</div>
          <div className="column">.column</div>
          <div
            className="column"
            style={{ backgroundColor: "yellowgreen", borderRadius: "7px" }}
          >
            .column
          </div>
          <div className="column">.column</div>
        </div>
        <div className="row">
          <div className="column">.column</div>
          <div className="column column-50 column-offset-25">
            .column column-50 column-offset-25
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
