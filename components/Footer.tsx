
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">MPF</span>
              </div>
              <span className="text-xl font-bold text-slate-900">RealEstate MPF</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Empowering real estate decisions through advanced location intelligence and data-driven scoring.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/ritzmediaworld?igsh=eTV5ZzN6YnY1OWg1" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors group"
                title="Follow us on Instagram"
              >
                <svg className="w-5 h-5 text-slate-600 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">API Access</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Marketplace</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Disclaimer</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; 2024 RealEstate MPF Platform. All rights reserved.
            </p>
            <div className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold border border-emerald-100">
              Demo MVP: Simulation purposes only
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
