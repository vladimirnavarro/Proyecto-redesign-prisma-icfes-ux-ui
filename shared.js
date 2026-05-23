// shared.js - PRISMA ICFES shared components
// This file provides the consistent header/footer for all authenticated pages

function getCurrentPage() {
  const path = window.location.pathname.split('/').pop();
  return path;
}

function getNavActiveClass(href) {
  const current = getCurrentPage();
  return current === href 
    ? 'text-white bg-white/20 px-3 py-2 rounded-lg font-bold text-sm border-b-2 border-[#ffe08b]'
    : 'text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg font-semibold text-sm transition-all';
}