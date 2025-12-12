export default function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 animate-gradient-x">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 via-transparent to-blue-400/30"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </div>
  )
}