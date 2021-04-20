import React from "react";

export function Search() {
  return (
    <>
      <div className="col-8">
        <form id="searchCity" action="" className="mt-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Change Location"
              id="city"
              name="city"
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-search-location"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-4 mt-3 ">
        <button type="button" className="btn btn-primary" id="currentLocation">
          <i className="fas fa-street-view"></i>
        </button>
      </div>
    </>
  );
}
