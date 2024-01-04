export function Collapse({
  open,
  children,
}){
  return (
    <div
      className={
        `grid grid-rows-[0fr] overflow-hidden transition-[grid-template-rows] duration-300',
        ${open ? 'grid-rows-[1fr]' : ''}
        `}
    >
      <div
        className={
          `invisible min-h-0 text-sm transition-[visibility] duration-300',
          ${open ? '!visible' : ''}
          `
        }
      >
        {children}
      </div>
    </div>
  );
}