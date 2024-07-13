export default function DividerWithText() {
  return (
    <div className="flex items-center my-24">
      <div className="flex-grow border-t border-primary-500/20"></div>
      <span className="mx-4 text-white transform transition-transform duration-500 hover:scale-105">
        Work With Us
      </span>
      <div className="flex-grow border-t border-primary-500/20"></div>
    </div>
  );
}
