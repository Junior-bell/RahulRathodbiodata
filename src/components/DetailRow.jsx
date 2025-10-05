import React from 'react';

function DetailRow({ label, value, highlight = false }) {
  return (
    <div className={`${highlight ? 'md:col-span-2 bg-yellow-50 p-3 rounded-lg border-2 border-yellow-200' : ''}`}>
      <div className="text-sm font-semibold text-gray-600 mb-1">{label}</div>
      <div className={`text-gray-900 ${highlight ? 'text-lg font-bold text-orange-700' : ''}`}>
        {value}
      </div>
    </div>
  );
}

export default DetailRow;
