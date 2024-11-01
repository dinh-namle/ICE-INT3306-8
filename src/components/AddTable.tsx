import React from 'react';

interface TableProps {
  columns: string[];
  data: any[];
  nameTable: string;
  description: string;
}

const AddTable: React.FC<TableProps> = ({ columns, data, nameTable, description }) => {
  return (
    <div className="bg-main1-1 flex flex-col mt-[10px] ml-[30px] p-[20px] w-full h-[70vh]">
      <div className="mt-[10px]">
        <span className="text-slate-200 text-[20px] ml-[40px] font-semibold">{nameTable}</span>
      </div>
      <div className="ml-[30px]">
        <span className="text-main1-3">{description}</span>
      </div>

      <div
        className="mx-auto mt-[40px] mb-[40px] w-full"
        style={{
          maxHeight: 'auto',
          overflowY: 'auto', 
          scrollbarWidth: 'thin', 
          scrollbarColor: '#4a5568 transparent', 
        }}
      >
        <table className="w-full h-full border border-gray-600 table-auto">
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
            {data.slice(0, 15).map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-center text-white">{index + 1}</td>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="py-2 px-4 border-b text-center text-white">
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