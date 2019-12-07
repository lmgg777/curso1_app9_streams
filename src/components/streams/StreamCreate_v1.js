import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  // renderInput(formProps) {   =ref.2=
  renderInput = ({ input, label, meta }) => {
    // console.log(fromProps);   =ref.2=
    // console.log({ input });   =testing=
    // console.log(meta);   =testing=
    // return(   =ref.1=
    //   <input
    //   onChange={formProps.input.onChange}
    //   value={formProps.input.value}
    //   />
    // );
    // return <input {...formProps.input} />;   =ref.2=

    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    // console.log(formValues);   =testing=
    this.props.createStream(formValues);
  };

  render() {
    // console.log(this.props);   =testing=
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui primary button">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

// export default connect() (reduxForm({
//   form: "streamCreate",
//   validate
// })(StreamCreate));
const formWrapped = reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
