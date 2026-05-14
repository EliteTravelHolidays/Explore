function LoadingSkeleton({ type = "card" }) {
  if (type === "card") {
    return (
      <div className="rounded-3xl overflow-hidden bg-gray-100 animate-pulse">
        <div className="h-56 bg-gray-200" />
        <div className="p-4 space-y-3">
          <div className="h-4 bg-gray-200 rounded-full w-full" />
          <div className="h-4 bg-gray-200 rounded-full w-4/5" />
          <div className="h-4 bg-gray-200 rounded-full w-3/5" />
        </div>
      </div>
    )
  }

  return null
}

export default LoadingSkeleton
