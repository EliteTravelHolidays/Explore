import { BookOpen } from "lucide-react"
import BlogCard from "./BlogCard"
import LoadingSkeleton from "../common/LoadingSkeleton"

function BlogGrid({ posts, loading, error }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <LoadingSkeleton key={index} type="card" />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Unable to load stories right now. Please try again shortly.</p>
      </div>
    )
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16">
        <BookOpen className="w-12 h-12 mx-auto text-brand-sky mb-3" />
        <p className="text-gray-500">No stories yet. Check back soon!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default BlogGrid
