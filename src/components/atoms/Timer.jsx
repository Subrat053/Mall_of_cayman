export const Timer = ({ seconds, className = '' }) => (
    <div className={`timer text-2xl md:text-3xl font-mono font-bold text-yellow-400 bg-black/20 px-4 py-2 rounded ${className}`}>
        {seconds}s
    </div>
);