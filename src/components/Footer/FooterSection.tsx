import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-white">{title}</h3>
      {children}
    </div>
  );
}