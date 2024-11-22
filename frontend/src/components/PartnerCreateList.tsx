import React from 'react';

interface ButtonProps {
  handleAction: () => void;
  icon: React.ReactNode;
}

interface CreateListProps {
  showCheckbox: boolean;
  headers: string[];
  data: string[][];
  buttons: ButtonProps[]; 
}

const PartnerCreateList: React.FC<CreateListProps> = ({ showCheckbox, headers, data, buttons }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="text-main2-1 border-b-[0.25px] border-main1-3">
          <tr>
            {showCheckbox && <th></th>}
            {headers.map((header, index) => (
              <th key={index} className="text-start p-[10px]">
                {header}
              </th>
            ))}
            {buttons.map((_, index) => (
              <th key={`button-header-${index}`}></th>
            ))}
          </tr>
        </thead>
        <tbody className="text-main1-3">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {showCheckbox && (
                <td>
                  <input
                    type="checkbox"
                  />
                </td>
              )}
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="p-[10px]">
                  {cell}
                </td>
              ))}
              {buttons.map((button, buttonIndex) => (
                <td key={`button-${rowIndex}-${buttonIndex}`}>
                  <button onClick={button.handleAction} className="mr-2 pt-[10px]">
                    {button.icon} 
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PartnerCreateList;