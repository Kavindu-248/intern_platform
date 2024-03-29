/* eslint-disable react/prop-types */


const Card = ({ children }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">

        {children}

    </div>
  )
}

export default Card