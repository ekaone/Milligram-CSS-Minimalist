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
      <br />
      <blockquote>
        <p>
          <em>Yeah!! Milligram is amazing.</em>
        </p>
      </blockquote>
      <br />
      <p>The base type is 1.6rem (16px) over 1.6 line height (24px)</p>
      <a>Anchor</a>
      <em>Emphasis</em>
      <small>Small</small>
      <strong>Strong</strong>
      <u>Underline</u>
      <h1>Heading</h1>
      <h2>Heading</h2>
      <h3>Heading</h3>
      <h4>Heading</h4>
      <h5>Heading</h5>
      <h6>Heading</h6>
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Height</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stephen Curry</td>
            <td>27</td>
            <td>1,91</td>
            <td>Akron, OH</td>
          </tr>
          <tr>
            <td>Klay Thompson</td>
            <td>25</td>
            <td>2,01</td>
            <td>Los Angeles, CA</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
