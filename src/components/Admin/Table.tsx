interface TableProps {
  columns?: string[]
  data: { [key: string]: any }[]
  needHeader: boolean
}

const Table: React.FC<TableProps> = ({ columns, data,needHeader }) => {
  return (
    <div className='bg-main1-2 text-white mx-8 table-auto'>
      <table className="table-auto w-full">
        {needHeader && (<thead className="">
          <tr className="text-center">
            {(columns || []).map((column, index) => (
              <th className="px-8 py-2" key={index}>{column}</th>
            ))}
          </tr>
        </thead>)}
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {(columns || []).map((column, index) => (
                <td className="text-center px-4 py-4" key={index}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
