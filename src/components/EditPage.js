import React from 'react';
import ReactDOM from 'react-dom';


const EditPage = () => {
  console.log(props);
  return (
    <div>
      Editing the expense with id of {props.match.params.id}
    </div>
);
};

export default EditPage;