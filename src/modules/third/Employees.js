import React from 'react'

const Employees = (props) => {
  return (
    <div>
        <h1>Hello</h1>
    {props.data.map((item, index) => {
      if (item.Dept == "Accounts") {
        return (
          <div className="flex flex-col">
            <div
              key={index}
              className="border-[5px] border-red-900 flex px-5 items-center h-20 mt-6 rounded-3xl"
            >
              {/* <h1>{item.Username}</h1> */}
              <h1>{item.Username}</h1>
            </div>
          </div>
        );
      }
    })}
  </div>
  )
}

export default Employees