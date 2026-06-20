export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-950">
      <div className="relative text-center">
        {/* Background glow */}
        <div className="absolute -inset-10 bg-accent-500/10 blur-3xl rounded-full" />

        {/* Content */}
        <div className="relative">
          <div className="spinner" />

          <h2 className="text-3xl font-semibold text-accent-500 mb-2">
            The Wild Oasis
          </h2>

          <p className="text-primary-100 text-lg">
            Preparing your luxury cabin experience...
          </p>

          <div className="flex justify-center gap-2 mt-5">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-bounce" />
            <span
              className="w-2 h-2 rounded-full bg-accent-500 animate-bounce"
              style={{ animationDelay: "0.15s" }}
            />
            <span
              className="w-2 h-2 rounded-full bg-accent-500 animate-bounce"
              style={{ animationDelay: "0.3s" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
