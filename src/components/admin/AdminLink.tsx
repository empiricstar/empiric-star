import React from 'react';
import { Edit } from 'lucide-react';

export function AdminLink() {
  return (
    <a
      href="/admin"
      className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg transition-colors"
    >
      <Edit className="h-4 w-4" />
      <span>Edit Content</span>
    </a>
  );
}