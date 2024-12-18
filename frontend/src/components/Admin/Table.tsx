interface TableProps {
  data: { [key: string]: string }[]
}

const Table: React.FC<TableProps> = ({  data }) => {
  const columns = Object.keys(data[0] || {});

  return (
    <div className='bg-main1-2 text-white mx-8 table-auto'>
      <table className="table-auto w-full">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th className="text-center px-4 py-4" key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td className="text-center px-4 py-4" key={`${rowIndex}-${colIndex}`}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
