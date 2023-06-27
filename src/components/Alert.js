import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    
  return (
//    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
//     {props.alert.msg}{props.alert.type}
//   <button type="button" className="close" data-dismiss="alert" aria-label="Close">
//     <span aria-hidden="true">&times;</span>
//   </button>
// </div>
props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    {capitalize(props.alert.type)} : {props.alert.msg}

<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
