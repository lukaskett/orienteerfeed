import React from 'react';

export const Card = ({ title, description, children }) => {
  return (
    <div className="w-full lg:max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="w-full p-6">
          <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
          {description && <p className="mt-2 text-gray-600">{description}</p>}
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </div>
  );
};