import React from "react";
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = () => {
  const actions = (
    /* <div>
     <button className="ui negative button">Delete</button>
     <button className="ui button">Cancel</button>
    </div> */

    //<>
    <React.Fragment>
      <button className="ui negative button">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
    //</>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default StreamDelete;
