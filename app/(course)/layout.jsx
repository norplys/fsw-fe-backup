import Navbar from "@/components/Navbar"

export default function CoursesLayout({children}) {
    return (
      <section>
        <Navbar />
        {children}
      </section>
    )
  }