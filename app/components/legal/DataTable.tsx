import React from "react";

// 1. تعريف واجهات البيانات (Interfaces)
interface TableRow {
  category: string;
  description?: string;
  items: string[];
}

interface ThreeColumnRow {
  basis: string;
  description: string;
  usages: string[];
}

interface DataTableProps {
  title1: string;
  title2: string;
  rows: TableRow[];
}

interface ThreeColumnTableProps {
  title1: string;
  title2: string;
  title3: string;
  rows: ThreeColumnRow[];
}

// المكون الأول: الجدول الثنائي
export const DataTable: React.FC<DataTableProps> = ({
  title1,
  title2,
  rows,
}) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm my-8 bg-white">
      <table className="w-full text-right border-collapse table-fixed">
        <thead>
          <tr className="bg-[#390D8E] text-white">
            <th className="px-6 py-4 font-bold text-lg w-1/2">{title1}</th>
            <th className="px-6 py-4 font-bold text-lg w-1/2">{title2}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-semibold text-gray-800 align-top">
                {row.category}
                {row.description && (
                  <p className="text-[14px] text-gray-500 mt-1 font-normal">
                    {row.description}
                  </p>
                )}
              </td>
              <td className="px-6 py-4 text-gray-700 align-top">
                <ul className="list-disc pr-4 space-y-1 text-sm">
                  {row.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const ThreeColumnTable: React.FC<ThreeColumnTableProps> = ({
  title1,
  title2,
  title3,
  rows,
}) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm my-6 bg-white">
      <table className="w-full text-right border-collapse bg-white">
        <thead>
          <tr className="bg-[#390D8E] text-white">
            <th className="px-6 py-4 font-bold text-lg w-1/5">{title1}</th>
            <th className="px-6 py-4 font-bold text-lg w-2/5">{title2}</th>
            <th className="px-6 py-4 font-bold text-lg w-2/5">{title3}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-bold text-gray-900 align-top">
                {row.basis}
              </td>
              <td className="px-6 py-4 text-gray-700 text-sm leading-relaxed align-top">
                {row.description}
              </td>
              <td className="px-6 py-4 align-top">
                <ul className="list-disc pr-5 space-y-1 text-sm text-gray-600">
                  {row.usages.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
