import React from 'react';

interface TableProps {
  columns: string[];
  data: any[];
  nameTable: string;
  description: string;
}

const AddTable: React.FC<TableProps> = ({ columns, data, nameTable, description }) => {
  return (
    <div className="bg-main1-1 flex flex-col mt-[10px] ml-[30px] min-w-[300px] max-w-[700px] p-[20px] h-[560px]">
      <div className="mt-[10px]">
        <span className="text-slate-200 text-[20px] ml-[40px] font-semibold">{nameTable}</span>
      </div>
      <div className="ml-[30px]">
        <span className="text-main1-3">{description}</span>
      </div>

      <div
        className="mx-auto mt-[40px]"
        style={{
          maxHeight: '400px',
          overflowY: 'auto', 
          scrollbarWidth: 'thin', 
          scrollbarColor: '#4a5568 transparent', 
        }}
      >
        <table className="min-w-full w-auto border border-gray-600 table-auto">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left"></th>
              {columns.map((column, index) => (
                <th key={index} className="py-2 px-4 border-b">
                  <span className="text-main2-1 font-medium">{column}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 10).map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-center text-white">{index + 1}</td>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="py-2 px-4 border-b text-center text-white" style={{ minWidth: '150px' }}>
                    {item[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AddTable;