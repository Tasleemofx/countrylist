import React from 'react';

const Filterform = ({onChange}) => {
    return (
        <form >
            <label>Search</label>
            <input type="text" onChange={onChange}/>
        </form>
      );
}
 
export default Filterform;