import React,{useState,useEffect} from 'react'

export const Alert = (props) => {
    const [show, setShow] = useState(true)

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false)
    }, 1000)

    return () => {
      clearTimeout(timeId)
    }
  }, []);

  if (!show) {
    return null;
  }
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                {props.message}
            </div>
        </div>
    )
}
