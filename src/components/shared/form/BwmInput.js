import React from 'react';

export function BwmInput ({
  input,
  label,
  type,
  className,
  symbol,
  meta: { touched, error }
})
{
  return(
    <div className="form-group">
      <label>{label}</label>
      <div class="input-group">
      { symbol && (
        <div class="input-group-prepend">
          <div class="input-group-text">{symbol}</div>
        </div>
        )
      }
        <input {...input} type={type} className={className}/>
        {touched && (error && <div className="alert alert-danger">{error}</div>)}
      </div>
    </div>
  )
}
