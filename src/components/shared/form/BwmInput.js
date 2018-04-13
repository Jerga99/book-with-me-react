import React from 'react';

export function BwmInput ({
  input,
  label,
  type,
  className,
  meta: { touched, error }
})
{
  return(
    <div className="form-group">
      <label>{label}</label>
      <div>
        <input {...input} type={type} className={className}/>
        {touched && (error && <div className="alert alert-danger">{error}</div>)}
      </div>
    </div>
  )
}
