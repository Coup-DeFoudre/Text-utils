import React from "react";

export default function Alert(props) {
    const dismissalert = () => {
        document.querySelector('.alert').style.display = 'none';
    }
    const alertType = () => {
        if (props.type === 'Success') {
            console.log('success');
            return 'bg-green-500';
            
        }
        if (props.type === 'Warn') {
            return 'bg-yellow-500';
        }
        if (props.type === 'Info') {
            return 'bg-blue-500';
        }
        if (props.type === 'Error') {
            return 'bg-red-500';
        }
    }
    
    alertType();

  return (
    <div>
       <div className={`alert box h-12 flex justify-between ${alertType} bg-yellow-300  items-center  px-4 `}>
        <h1 className="text-black">
          <strong>{props.type}!</strong> {props.alert}
        </h1>

        <button className="dismiss" onClick={dismissalert}>
          <i className="fa-solid fa-x text-black"></i>
        </button>
      </div>
    </div>
  );
}


