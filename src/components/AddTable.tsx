import React from 'react';

interface TableProps {
  columns: string[];
  data: any[];
  nameTable: string;
  description: string;
}

const AddTable: React.FC<TableProps> = ({ columns, data, nameTable, description }) => {
  return (
    <div className="bg-main1-1 flex flex-col mt-2 ml-7 min-w-[300px] max-w-[700px] p-5 h-[560px]">
      <div className="mt-2">
        <span className="text-slate-200 text-2xl ml-10 font-semibold">{nameTable}</span>
      </div>
      <div className="ml-7">
        <span className="text-main1-3">{description}</span>
      </div>

      <div className="mx-auto mt-10 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
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
                  <td key={colIndex} className="py-2 px-4 border-b text-center text-white min-w-[150px]">
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