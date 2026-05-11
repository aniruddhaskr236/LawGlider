function DocSimplifier() {
  return (
    <div
      className="rounded-3 p-4"
      style={{ backgroundColor: "#f4f8ff", border: "1px solid #d6e4ff" }}
    >
      <h3 className="h5 mb-3">Upload your document</h3>
      <form className="d-flex flex-wrap gap-2 align-items-center">
        <input
          type="file"
          id="myFile"
          name="filename"
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
      <br />

      <div className="Response">
        <h1>Response:-</h1>
        <div>
          <p>RESPONSE</p>
        </div>
      </div>
    </div>
  );
}

export default DocSimplifier;
